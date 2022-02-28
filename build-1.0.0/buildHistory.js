function update_his(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    var readJson = reader.result;
    // var readJson_edit = readJson.slice(0, -4);
    let str_playlist = JSON.parse('['+readJson+']');
    for(var i = 0; i < str_playlist.length; i++) {
      localStorage.setItem(str_playlist[i]["key"], str_playlist[i]["Item"]);
    }
    var container_his = document.getElementById("history_payer_release");
    var elements_his = container_his.getElementsByClassName("article_his");
    while (elements_his[0]) {
        elements_his[0].parentNode.removeChild(elements_his[0]);
    }
    load_his();
  };
  reader.onerror = function() {
    console.log(reader.error);
  };
 }

function dynamic_text_his() {
  let keys2 = Object.keys(localStorage);
  var json = '';
  for(let key2 of keys2) {
    var pljsplayfrom = key2.substr(0, 12);
    if (pljsplayfrom == "pljsplayfrom") {
      json += '{"key":"'+key2+'", "Item":"'+localStorage.getItem(key2)+'"}, '+'\r\n';
    }
  }
  var json_edit = json.slice(0, -4);
  return json_edit;
}

console.log(dynamic_text_his());

function download_his(name, contents, mime_type) {
    mime_type = mime_type || "text/plain";

    var blob = new Blob([contents], {type: mime_type});

    var dlink = document.createElement('a');
    const data_file = Date.now();
    dlink.download = data_file+'_'+name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function(e) {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function() {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };

    dlink.click();
    dlink.remove();
}
