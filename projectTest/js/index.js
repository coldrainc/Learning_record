var X = XLSX;
var XW = {
	/* worker message */
	msg: 'xlsx',
	/* worker scripts */
	worker: './xlsxworker.js'
};

var global_wb;
var process_wb = (function() {
	var OUT = document.getElementById('out');
	var HTMLOUT = document.getElementById('htmlout');
	var to_json = function to_json(workbook) {
		var result = {};
		var result2 = {};
		workbook.SheetNames.forEach(function(sheetName) {
			var roa = X.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
//			alert(roa[0])
			for(var j=1;j<roa[0].length;j++){
			    var list = []
			    for(var i=1;i<roa.length;i++){
			    list.push(roa[i][j])
                    result[roa[0][j]]=list
			    }
			}
		});
		return JSON.stringify(result, 2, 2);
	};
//	var to_csv = function to_csv(workbook) {
//		var result = [];
//		workbook.SheetNames.forEach(function(sheetName) {
//		    //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
//            //wb.Sheets[Sheet名]获取第一个Sheet的数据
//			var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);
//			alert("csv"+csv)
//			str = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
////			var str1 = str.replace(/序号/g,"num").replace(/缺损构件/g,"dcomponent").replace(/缺损类型/g,"dtype").replace(/病害描述（具体位置、严重程度）/g,"ddescription").replace(/定性描述/g,"qdescription").replace(/定量描述/g,"qudescription").replace(/评定标度/g,"escale");
//			if(csv.length){
////				result.push("SHEET: " + sheetName);
////				result.push("");
//				result.push(csv);
//				alert("result"+result)
//			}
//		});
//		return result.join("\n");
//	};

	return function process_wb(wb) {
		global_wb = wb;
//		var output = to_csv(wb);
        var output = to_json(wb)
		if(OUT.innerText === undefined)
		    OUT.textContent = output;
		else
		    OUT.innerText = output;
		 alert(OUT.innerText)
		if(typeof console !== 'undefined')
		    console.log("output", new Date());
	};
})();

var setfmt = window.setfmt = function setfmt() {
    if(global_wb)
        process_wb(global_wb);
 };

var do_file = (function() {
    var rABS = false
    var use_worker = false
	var xw = function xw(data, cb) {
		var worker = new Worker(XW.worker);
		worker.onmessage = function(e) {
			switch(e.data.t) {
				case 'ready': break;
				case 'e': console.error(e.data.d); break;
				case XW.msg: cb(JSON.parse(e.data.d)); break;
			}
		};
		worker.postMessage({d:data,b:rABS?'binary':'array'});
	};

	return function do_file(files) {
		var f = files[0];
		var reader = new FileReader();
		reader.onload = function(e) {
			if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
			var data = e.target.result;
			if(!rABS)
			    data = new Uint8Array(data);
			if(use_worker)
			    xw(data, process_wb);
			else
			    process_wb(X.read(data, {type: rABS ? 'binary' : 'array'}));
		};
		if(rABS)
		    reader.readAsBinaryString(f);
		else
		    reader.readAsArrayBuffer(f);
	};
})();

(function() {
	var xlf = document.getElementById('xlf');
	if(!xlf.addEventListener) return;
	function handleFile(e) {
	    do_file(e.target.files);
	     }
	xlf.addEventListener('change', handleFile, false);
})();
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-36810333-1']);
	_gaq.push(['_trackPageview']);
	//是用于网页追踪的，把这段代码网到网页上，当网页被请求时，就会向谷歌的服务器发送回
	//相应的COOKIES数据，然后形成报告。

