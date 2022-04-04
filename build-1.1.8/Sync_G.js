function initClient() {
    gapi.client.init({
        // Ваш ключ API
        apiKey: config["g_apiKey"],

        // Ваш идентификатор клиента
        clientId: config["g_clientId"],

        // Указание, что мы хотим использовать Google Drive API v3
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],

        // Запрос доступа к application data folder (см. ниже)
        scope: 'https://www.googleapis.com/auth/drive.appfolder'

    }).then(() => {
        // Начинаем ловить события логина/логаута (см. ниже)
        gapi.auth2.getAuthInstance().isSignedIn.listen(onSignIn)
        // инициализация приложения
        initApp()

    }, error => {
        console.log('Failed to init GAPI client', error)
        // работаем без гугла
        initApp('Failed')
    })
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

function isGapiLoaded() {
    return gapi && gapi.auth2
}

function logIn() {
    if (isGapiLoaded()) {
        // откроется стандартное окно Google с выбором аккаунта
        gapi.auth2.getAuthInstance().signIn()
        // gapi.auth2.getAuthInstance().signIn().then(googleUser => {
        //
        //   // метод возвращает объект пользователя
        //   // где есть все необходимые нам поля
        //   const profile = googleUser.getBasicProfile()
        //   console.log('Full Name: ' + profile.getName())
        //   console.log('Given Name: ' + profile.getGivenName())
        //   console.log('Family Name: ' + profile.getFamilyName())
        //   console.log('Image URL: ' + profile.getImageUrl())
        //   console.log('Email: ' + profile.getEmail())
        // })
    }
}

function logOut() {
    if (isGapiLoaded()) {
        gapi.auth2.getAuthInstance().signOut()
    }
}

function isLoggedIn() {
    return isGapiLoaded() && gapi.auth2.getAuthInstance().isSignedIn.get()
}

async function createEmptyFile(name, mimeType) {
    const resp = await prom(gapi.client.drive.files.create, {
        resource: {
            name: name,
            // для создания папки используйте
            // mimeType = 'application/vnd.google-apps.folder'
            mimeType: mimeType || 'text/plain',
            // вместо 'appDataFolder' можно использовать ID папки
            parents: ['appDataFolder']
        },
        fields: 'id'
    })
    // функция возвращает строку — идентификатор нового файла
    return resp.result.id
}

async function upload(fileId, content) {
    // функция принимает либо строку, либо объект, который можно сериализовать в JSON
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
    // resp.body хранит ответ в виде строки
    // resp.result — это попытка интерпретировать resp.body как JSON.
    // Если она провалилась, значение resp.result будет false
    // Т.о. функция возвращает либо объект, либо строку
    return resp.result || resp.body
}

async function find(query) {
    let ret = []
    let token
    do {
        const resp = await prom(gapi.client.drive.files.list, {
            // вместо 'appDataFolder' можно использовать ID папки
            spaces: 'appDataFolder',
            fields: 'files(id, name), nextPageToken',
            pageSize: 100,
            pageToken: token,
            orderBy: 'createdTime',
            q: query
        })
        ret = ret.concat(resp.result.files)
        token = resp.result.nextPageToken
    } while (token)
    // результат: массив объектов вида [{id: '...', name: '...'}],
    // отсортированных по времени создания
    return ret
}
async function deleteFile(fileId) {
    try {
        await prom(gapi.client.drive.files.delete, {
            fileId: fileId
        })
        return true
    } catch (err) {
        if (err.status === 404) {
            return false
        }
        throw err
    }
}



// Интервал между синхронизациями конфига
const SYNC_PERIOD = 1000 * 60 * 10     // Таймер на 10 минут
const REL_PERIOD = 1000 * 60 * 1 // Таймер на 1 минуту
// Конфигурация по умолчанию
const DEFAULT_CONFIG = dynamic_text_his();

// храним ID таймера синхронизации, чтобы иметь возможность его сбросить
let configSyncTimeoutId
let releaseSyncTimeoutId

async function getConfigFileId() {
    // берем configFileId
    let configFileId = localStorage.getItem('configFileId')
    if (!configFileId) {
        // ищем нужный файл на Google Drive
        const configFiles = await find('name = "config.json"')
        if (configFiles.length > 0) {
            // берем первый (раньше всех созданный) файл
            configFileId = configFiles[0].id
        } else {
            // создаем новый
            configFileId = await createEmptyFile('config.json')
        }
        // сохраняем ID
        localStorage.setItem('configFileId', configFileId)
    }
    return configFileId
}

async function onSignIn() {
    // обработчик события логина/логаута (см. выше)
    if (isLoggedIn()) {
        // пользователь зашел
        // шедулим (как это по-русски?) немедленную синхронизацию конфига
        // scheduleConfigSync(0);
        syncConfig_time();
        logIn_n();
    } else {
        // пользователь вышел
        // в следующий раз пользователь может зайти под другим аккаунтом
        // поэтому забываем config file ID
        localStorage.removeItem('configFileId');
        // в localStorage лежит актуальный конфиг, дальше пользуемся им
    }
}

function getConfig() {
    let ret
    try {
        ret = JSON.parse(localStorage.getItem('config'))
    } catch(e) {}
    // если сохраненного конфига нет, возвращаем копию дефолтного
    return ret || {...DEFAULT_CONFIG}
}

async function saveConfig(strConfig) {
    // эту функцию зовем всегда, когда надо изменить конфиг
    let newConfig = JSON.parse(strConfig);
    localStorage.setItem('config', JSON.stringify(newConfig))
    if (isLoggedIn()) {
        // получаем config file ID
        const configFileId = await getConfigFileId()
        // заливаем новый конфиг в Google Drive
        upload(configFileId, newConfig)
    }
}

async function syncConfig() {
    if (!isLoggedIn()) {
        return
    }
    // получаем config file ID
    const configFileId = await getConfigFileId()
    try {
        // загружаем конфиг
        const remoteConfig = await download(configFileId)
        if (!remoteConfig || typeof remoteConfig !== 'object' || remoteConfig == '{}' || remoteConfig == JSON.stringify('')) {
            // пустой или испорченный конфиг, перезаписываем текущим
            upload(configFileId, getConfig())
        } else {
            // сохраняем локально, перезаписывая существующие данные
            localStorage.setItem('config', JSON.stringify(remoteConfig))
            sync_his(remoteConfig);
            del_his();
        }
        // синхронизация завершена, в localStorage актуальный конфиг
    } catch(e) {
        if (e.status === 404) {
            // кто-то удалил наш конфиг, забываем неверный fileID и пробуем еще раз
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
      // выполняем синхронизацию и шедулим снова
      syncConfig()
          .catch(e => console.log('Failed to synchronize config', e))
          .finally(() => scheduleConfigSync())
  }, typeof delay === 'undefined' ? SYNC_PERIOD : delay)
}

function releaseConfigSync(delay) {
  var href = window.location.pathname;
  if (href == '/release') {
    // сбрасываем старый таймер, если он был
    if (releaseSyncTimeoutId) {
        clearTimeout(releaseSyncTimeoutId)
    }
    releaseSyncTimeoutId = setTimeout(() => {
        // выполняем синхронизацию и шедулим снова
        saveConfig(dynamic_text_his())
            .catch(e => console.log('Failed to synchronize config', e))
            .finally(() => releaseConfigSync())
    }, typeof delay === 'undefined' ? REL_PERIOD : delay)
  }
}

function history_from_app() {
  saveConfig(dynamic_text_his());
  scheduleConfigSync();

  document.getElementById('history_mess').setAttribute("style", "display:none;");
}
function history_from_google() {
  scheduleConfigSync();
  syncConfig()
  document.getElementById('history_mess').setAttribute("style", "display:none;");
  var href = window.location.pathname;
  if (href == '/myHistory') {
    setTimeout(function(){
      load_his();
    },1000)
  }
}
async function syncConfig_time() {
    // Если данные в приложении есть
    if (localStorage.getItem('config')) {
      var local_time_config = JSON.parse(localStorage.getItem('config'));
      const configFileId = await getConfigFileId();
      const remote_time_config = await download(configFileId);
      // Проверяем совпадения в данных по времени загрузки конфига
      if (remote_time_config) {
        if (remote_time_config['time'] == local_time_config['time']) {
          // Данных совпадают, берём из Google
          scheduleConfigSync();
          var href = window.location.pathname;
          if (href == '/myHistory') {
            setTimeout(function(){
              load_his();
            },1000)
          }
        } else {
          // Данных не совпадают
          // Открываем окно выбора данных для синхронизации
          document.getElementById('history_mess').setAttribute("style", "display:block;");
        }
      } else {
        scheduleConfigSync();
      }

    } else {
      // Данных нет, берём из Google
      scheduleConfigSync();
      syncConfig();
      var href = window.location.pathname;
      if (href == '/myHistory') {
        setTimeout(function(){
          load_his();
        },1000)
      }
    }

    // получаем config file ID
    const configFileId = await getConfigFileId();
    const remoteConfig = await download(configFileId);

}


function initApp(mess_g) {
  if (isLoggedIn()) {
    syncConfig_time()
  }
}
