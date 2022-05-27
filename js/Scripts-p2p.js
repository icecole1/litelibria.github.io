// Rickshaw
function initChart() {
	var chartConf = {
		element: document.querySelector("#chart"),
		renderer: 'multi',
		interpolation: "basis",
		stack: false,
		min: 'auto',
		strokeWidth: 2,
		series: [
			{name: "Upload P2P", color: "#39d33a", data: [], renderer: 'area'},
			{name: " - P2P", color: "#5DAEFF", data: [], renderer: 'area'},
			{name: " - HTTP", color: "#F37751", data: [], renderer: 'area'},
			{name: "Download", color: "var(--PrimaryColor)", data: [], renderer: 'line'}
		]
	};

	this.chart = new Rickshaw.Graph(chartConf);

	new Rickshaw.Graph.Axis.X({
		graph: this.chart,
		tickFormat: () => ''
	});

	new Rickshaw.Graph.Axis.Y({
		graph: this.chart,
		orientation: 'left',
		element: document.getElementById('y_axis')
	});

	this.legend = new Rickshaw.Graph.Legend({
		graph: this.chart,
		element: document.getElementById('legend')
	});

	this.legendTotals = new Rickshaw.Graph.Legend({
		graph: this.chart,
		element: document.getElementById("legend-totals")
	});

	this.chart.render();
	setInterval(this.updateChartData.bind(this), 500);

	var chartResize = () => {
		chartConf.width = this.chart.element.clientWidth;
		this.chart.configure(chartConf);
		this.chart.render();
	};

	chartResize();
	window.addEventListener("resize", chartResize);
}
function refreshChart() {
	if (!this.chart) {
		return;
	}

	var data0 = this.chart.series[0].data;
	var data1 = this.chart.series[1].data;
	var data2 = this.chart.series[2].data;
	var data3 = this.chart.series[3].data;
	var lastX = data0.length > 0 ? data0[data0.length - 1].x : -1;

	var seriesDataMapper = (currentValue, index) => ({x: index + lastX + 1, y: 0});

	data0.length = 0;
	data1.length = 0;
	data2.length = 0;
	data3.length = 0;

	var stubData = Array.apply(null, Array(200)).map(seriesDataMapper);
	data0.push.apply(data0, stubData.slice(0));
	data1.push.apply(data1, stubData.slice(0));
	data2.push.apply(data2, stubData.slice(0));
	data3.push.apply(data3, stubData.slice(0));

	this.chart.update();
}
function updateChartData() {
	var downloadSpeed = this.getDownloadSpeed();
	var http = Number((downloadSpeed.http * 8 / 1000000).toFixed(2));
	var p2p = Number((downloadSpeed.p2p * 8 / 1000000).toFixed(2));
	var total = Number((http + p2p).toFixed(2));
	var upload = Number(this.getUploadSpeed() * 8 / 1000000).toFixed(2);

	var data0 = this.chart.series[0].data;
	var data1 = this.chart.series[1].data;
	var data2 = this.chart.series[2].data;
	var data3 = this.chart.series[3].data;
	var x = data0.length > 0 ? data0[data0.length - 1].x + 1 : 0;

	data0.shift();
	data1.shift();
	data2.shift();
	data3.shift();
	data0.push({x: x, y: -upload});
	data1.push({x: x, y: total});
	data2.push({x: x, y: http});
	data3.push({x: x, y: total});

	this.chart.update();

	this.formatChartLegendLine(0, total);
	this.formatChartLegendLine(1, http);
	this.formatChartLegendLine(2, p2p);
	this.formatChartLegendLine(3, upload);

	this.updateLegendTotals();
}
function formatChartLegendLine(index, speed) {
	if (this.legend) {
		var line = this.legend.lines[index];
		line.element.childNodes[1].textContent = line.series.name + ' - ' + speed + ' Mbit/s';
	}
}
function updateLegendTotals() {
	if (!this.legendTotals) {
		return;
	}

	var httpMb = this.downloadTotals.http / 1048576;
	var p2pMb = this.downloadTotals.p2p / 1048576;
	var totalMb = httpMb + p2pMb;
	var uploadMb = this.uploadTotal / 1048576;

	if (totalMb != 0) {
		this.legendTotals.lines[0].element.childNodes[1].textContent
				= "Download - "
				+ Number(totalMb).toFixed(1) + " MiB";

		this.legendTotals.lines[1].element.childNodes[1].textContent
				= " - HTTP - "
				+ Number(httpMb).toFixed(1) + " MiB - "
				+ Number((httpMb * 100) / totalMb).toFixed(0) + "%";

		this.legendTotals.lines[2].element.childNodes[1].textContent
				= " - P2P - "
				+ Number(p2pMb).toFixed(1) + " MiB - "
				+ Number((p2pMb * 100) / totalMb).toFixed(0) + "%";

		this.legendTotals.lines[3].element.childNodes[1].textContent
				= "Upload P2P - "
				+ Number(uploadMb).toFixed(1) + " MiB";
	}
}
function getDownloadSpeed() {
	var startingPoint = performance.now() - (this.loadSpeedTimespan * 1000);
	var httpSize = 0;
	var p2pSize = 0;

	var i = this.downloadStats.length;
	while (i--) {
		var stat = this.downloadStats[i];
		if (stat.timestamp < startingPoint) {
			break;
		}

		if (stat.method === "p2p") {
			p2pSize += stat.size;
		} else if (stat.method === "http") {
			httpSize += stat.size;
		}
	}

	this.downloadStats.splice(0, i + 1);

	return {p2p: p2pSize / this.loadSpeedTimespan, http: httpSize / this.loadSpeedTimespan};
}
function getUploadSpeed() {
	var startingPoint = performance.now() - (this.loadSpeedTimespan * 1000);
	var size = 0;

	var i = this.uploadStats.length;
	while (i--) {
		var stat = this.uploadStats[i];
		if (stat.timestamp < startingPoint) {
			break;
		}

		size += stat.size;
	}

	this.uploadStats.splice(0, i + 1);

	return size / this.loadSpeedTimespan;
}
function onBytesDownloaded(method, peerId, size) {
	this.downloadStats.push({method: method, size: size, timestamp: performance.now()});
	this.downloadTotals[method] += size;
}
function onBytesUploaded(method, peerId, size) {
	this.uploadStats.push({size: size, timestamp: performance.now()});
	this.uploadTotal += size;
}


// p2p-graph
function initGraph(){
	graph = new window.P2PGraph('#graph')
	graph.add({
		id: 'You',
		me: true,
		name: myLogin || 'Я'
	})
}
function onPeerConnect(peer) {
	if (!graph.hasPeer(peer.id)) {
		graph.add({id: peer.id, name: 'Либрийц'});
		graph.connect("You", peer.id);
	}
}
function onPeerClose(id) {
	if (graph.hasPeer(id)) {
		graph.disconnect("You", id);
		graph.remove(id);
	}
}