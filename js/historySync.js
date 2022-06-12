var SYNC_PERIOD = 1000 * 60 * 2     // 2 минуты

var apiKey = config["g_apiKey"];
var clientId = config["g_clientId"];
var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var scopes = 'https://www.googleapis.com/auth/drive.appdata';

var DEFAULT_CONFIG = []
let configSyncTimeoutId


function initClient() {
	gapi.client.init({
			apiKey: apiKey,
			discoveryDocs: discoveryDocs,
			clientId: clientId,
			scope: scopes
	}).then(() => {
		gapi.auth2.getAuthInstance().isSignedIn.listen(onSignIn);
	}, error => {
		console.log('Failed to init GAPI client', error)
		initHistory('Failed')
})
}

function isGapiLoaded() {
	return gapi && gapi.auth2
}

function logIn() {
	if (isGapiLoaded()) {
		gapi.auth2.getAuthInstance().signIn();
		document.getElementById('signout-button').style.display = '';
		document.getElementById('authorize-button').style.display = 'none';
		questionConfig();
	}
}

function logOut() {
	if (isGapiLoaded()) {
		gapi.auth2.getAuthInstance().signOut();
		document.getElementById('signout-button').style.display = 'none';
		document.getElementById('authorize-button').style.display = '';
	}
}

function isLoggedIn() {
	return isGapiLoaded() && gapi.auth2.getAuthInstance().isSignedIn.get()
}

async function onSignIn() {
	// обработчик события логина/логаута (см. выше)
	if (isLoggedIn()) {
			initHistory();
	} else {
			localStorage.removeItem('configFileId');
	}
}


function prom(gapiCall, argObj) {
	return new Promise((resolve, reject) => {
		gapiCall(argObj).then(resp => {
			if (resp && (resp.status < 200 || resp.status > 299)) {
				console.log('GAPI call returned bad status', resp)
				reject(resp)
			} else {
				resolve(resp)
			}
		}, err => {
			console.log('GAPI call failed', err)
			reject(err)
		})
	})
}

async function createEmptyFile(name, mimeType) {
	const resp = await prom(gapi.client.drive.files.create, {
		resource: {
			name: name,
			mimeType: mimeType || 'text/plain',
			parents: ['appDataFolder']
		},
		fields: 'id'
	})
	return resp.result.id
}

async function getConfigFileId() {
	let configFileId = localStorage.getItem('configFileId')
	if (!configFileId) {
		let response;
		try {
			response = await gapi.client.drive.files.list({
				'spaces': 'appDataFolder',
				'pageSize': 1,
				'fields': 'files(id, name)',
			});
		} catch (err) {
			configFileId = await createEmptyFile('config.json')
			return;
		}
		const configFiles = response.result.files;
		if (!configFiles || configFiles.length == 0) {
			configFileId = await createEmptyFile('config.json')
		} else {
			configFileId = configFiles[0].id
		}
		localStorage.setItem('configFileId', configFileId)
	}
	return configFileId
}

async function upload(fileId, content) {
	return prom(gapi.client.request, {
		path: `/upload/drive/v3/files/${fileId}`,
		method: 'PATCH',
		params: {uploadType: 'media'},
		body: typeof content === 'string' ? content : JSON.stringify(content)
	})
}

async function download(fileId) {
	const resp = await prom(gapi.client.drive.files.get, {
		fileId: fileId,
		alt: 'media'
	})
	return resp.result || resp.body
}

function getConfig() {
	let ret
	try {
		ret = JSON.parse(localStorage.getItem('history'))
	} catch(e) {}
	return ret || {...DEFAULT_CONFIG}
}

async function saveConfig(newConfig) {
	if (isLoggedIn()) {
		const configFileId = await getConfigFileId()
		upload(configFileId, newConfig)
	}
}

async function syncConfig() {
	const configFileId = await getConfigFileId()
	try {
		var remoteConfig = await download(configFileId)
		if (!remoteConfig || typeof remoteConfig !== 'object' || remoteConfig.length == 0 || remoteConfig == JSON.stringify('')) {
			upload(configFileId, getConfig())
		} else {
			localStorage.setItem('history', JSON.stringify(remoteConfig))
		}
	} catch(e) {
		if (e.status === 404) {
			localStorage.removeItem('configFileId')
			syncConfig()
		} else {
			throw e
		}
	}
}
async function questionConfig() {
	const configFileId = await getConfigFileId()
	try {
		var remoteConfig = await download(configFileId)
		if (!remoteConfig || typeof remoteConfig !== 'object' || remoteConfig.length == 0 || remoteConfig == JSON.stringify('')) {
			upload(configFileId, getConfig())
		} else {
			document.getElementById('history_mess').setAttribute("style", "display:block;");
		}
	} catch(e) {
		if (e.status === 404) {
			localStorage.removeItem('configFileId')
			syncConfig()
		} else {
			throw e
		}
	}
}
async function questionConfigUpload(n){
	document.getElementById('history_mess').setAttribute("style", "display:none;");
	const configFileId = await getConfigFileId()
	try {
		var remoteConfig = await download(configFileId)
		if(n == true){
			localStorage.setItem('history', JSON.stringify(remoteConfig))
			window.location.reload();
		} else {
			upload(configFileId, getConfig())
			window.location.reload();
		}
	} catch(e) {
		if (e.status === 404) {
			localStorage.removeItem('configFileId')
			syncConfig()
		} else {
			throw e
		}
	}
}

function scheduleConfigSync(delay) {
	if (configSyncTimeoutId) {
		clearTimeout(configSyncTimeoutId)
	}
	configSyncTimeoutId = setTimeout(() => {
		syncConfig()
			.catch(e => console.log('Failed to synchronize config', e))
			.finally(() => scheduleConfigSync())
	}, typeof delay === 'undefined' ? SYNC_PERIOD : delay)
}

function initHistory(){
	if (isLoggedIn()) {
		questionConfig()
    scheduleConfigSync()
  }
}