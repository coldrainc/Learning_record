
function saveall(){//点击保存事件
	gettrvalues();
    var parts = geterjilivalue()
    qiaoliang.push({
        'checktime':getvalue('sj'),
        'bridge_name':getvalue("qm"),
        'bridge_type':getvalue("lx"),

    })
	qiaoliang.push(gjslarr);
	qiaoliang.push(imgarr);
	qiaoliang.push($(erbiao).val())
	var data = {
	    "data":JSON.stringify(qiaoliang)
	}
//	alert("表格内容：" + JSON.stringify(qiaoliang));//表格内容
	$.ajax({
            url:'/myApp/qiaoliang/',
            type:'POST',
            data:data,
            traditional: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            async:false,
            dataType: 'html',
            success:function (res) {
                var json = JSON.parse(res);
                var file = json.htmlfile
                var transverhtml = document.getElementById('transverhtml');
                var tbodyid = document.getElementById('tbodyid');
                var htmlfile = document.createElement('iframe');
                htmlfile.src="/static/html/"+file+".html";
                htmlfile.style.height = "800px";
                htmlfile.style.width  = "100%";
                transverhtml.appendChild(htmlfile);
            },
            error:function (XMLHttpRequest,textStatus,errorThrown) {
                alert("服务器请求超时,请重试!")

            }
        });
}


var erjiarr = ['桥面系病害检查','上部结构病害检查','下部结构病害检查','全桥病害汇总'];
var sijiarr = ['桥梁技术状况评定计算','桥梁技术状态评定'];
var wujiarr = ['桥梁各构件完好程度','桥梁总体技术状况','基于检测结果的桥梁适用性评价','管养建议'];

var qiaoliang = new Array();//所有数据都存在这个数组里
var titleone = new Object();//桥梁概况
titleone.text = "";  //桥梁概况文字
// titleone.imgsrcs = new Array();
qiaoliang.push(titleone);
var titletwo = new Object();//检测结果汇总
titletwo.qmx = new Array();//桥面系
titletwo.sb = new Array();//上部
titletwo.xb = new Array();//下部
titletwo.qq = new Array();//全桥
qiaoliang.push(titletwo);
var gjslarr = new Array();//存储构件和数量的数组
function gjnum(name,num,bridge_type,parts,secondname){
	this.name = name;
	this.num = num;
	this.bridge_type = bridge_type;
	this.parts = parts;
	this.secondname = secondname
}

function imginfo(src,no,name){
	this.src = src;
	this.no = no;
	this.name = name;
}

var imgarr = new Array();//存储所有照片的数组，根据照片名no分类

var qualitjson='';
var classjson ='';
var shujujson = '';
$.ajax({
	url:"/myApp/qiaoliang/",
	type:"get",
	async : false,
	dataType:"json",
	contentType: 'charset=UTF-8',//防止乱码
	success:function(data){
		shujujson=data;
		alert(shujujson+"shujujson")
	}
});

$.ajax({
	url:"../json/qualittwo.json",
	type:"get",
	async : false,
	dataType:"json",
	contentType: 'charset=UTF-8',//防止乱码
	success:function(data){
		qualitjson=data;
	}
});
$.ajax({
	url:"../json/classification_weight.json",
	type:"get",
	async : false,
	dataType:"json",
	contentType: 'charset=UTF-8',//防止乱码
	success:function(data){
		classjson=data;
	}
});


var classjsontablenames = getclassjsontablename();
var classjsoncomponentevalus = getclassjsoncomponentevalu();
var qualitdescs = getqualitjsonqualitdesc();
var quantdescs = getqualitjsonquantdesc();
var qualitjsontablename = getqualitjsontablename();
var qualitparts = getclassjsonparts();
var sectionname = getqualitjsonsectionname();
//var topmainarr = ['主梁','挂梁'];
//var topnormalarr = ['湿接缝','横隔板','绞缝'];
//var xiearr = ['斜拉索','锚具','拉索护套','减震装置'];

setdocdis("lx");
setdocdis("gj");
setdocdis("bw");
//setdocdis("xiao");
setdocdis("b");
setdocdis("erb");

autoShowUser(classjsontablenames,'lx');
autoShowUser(classjsoncomponentevalus,'gj');
autoShowUser(sectionname,'bw');
autoShowUser(qualitdescs,'dxms1');
autoShowUser(quantdescs,'dlms1');
autoShowUser(qualitjsontablename,'qslx1');
setlxul(classjsontablenames);
setgjul(classjsoncomponentevalus);
setbwul(sectionname);


function setpage(str1,str2,str3,namearr,numarr,section,defect_goujian,text,imgsrcs,qmx,sb,xb,defect_type,disease,rating,part,imgname){
//alert(str1+str2+str3+namearr+numarr+section+defect_goujian+text+imgsrcs+qmx+sb+xb+defect_type+disease+rating+part+imgname)
    var tbodyid = document.getElementById('tbodyid');
    tbodyid.innerHTML = "";
	setvalue("qm",str1);//桥梁名称
	setvalue("lx",str2);//桥梁类型
	setvalue("sj",str3);//桥梁时间
	setvalue("gj",namearr);//桥梁构件
	setvalue("sl",Number(numarr));//桥梁构件数量
	setvalue("bw",section);//部件
	setvalue("erbw",);//子部件
	gjslarr = new Array();
//	imgarr = imgsrcs;
    qmx = null;
    sb = null;
    xb = null;

	if(numarr != null){
		for(var i = 0 ; i < numarr.length; i++){
			addshowperson(namearr[i],numarr[i],str2,section[i],defect_goujian[i]);//增加显示的构件名称和数量
		}
	}
	if(qmx == null)
		qmx = new Array();
	if(sb == null)
		sb = new Array();
	if(xb == null)
		xb = new Array();
	for(var item =0; item < part.length; item++){
	    if(part[item] == "桥面系"){
	        qmx = adddata(qmx,item,namearr,defect_type,disease,rating,imgname)
        }else if(part[item] == "上部结构"){
            sb = adddata(sb,item,namearr,defect_type,disease,rating,imgname)
        }else{
	             if(part[item] == "下部结构"){
	                xb = adddata(xb,item,namearr,defect_type,disease,rating,imgname)
                    }
	        }
    }

	titleone.text = text;//桥梁概况文字描述
	titletwo.qmx = qmx;//桥面系
	titletwo.sb = sb;//上部
	titletwo.xb = xb;//下部
	titletwo.qq = new Array();//全桥
	var biao = document.getElementById("biao");
	biao.value = "桥梁概况";
	var picwall = document.getElementById("picwallid");
	picwall.innerHTML = "0";
	clickone();

}
function adddata(part,item,namearr,defect_type,disease,rating,imgname){
     if(part == null)
         part = new Array();
     alert("adddata"+namearr[item]+defect_type[item]+disease[item]+""+""+rating[item]+""+imgname[item])
     var t = new trinfo(namearr[item],defect_type[item],disease[item],"","",rating[item],"",imgname[item])
     part.push(t)
     return part;
}
function settable(num,defect_goujian,defect_type,disease,rating,imgname,part){
//alert(num+defect_goujian+defect_type+disease+rating+part+imgname+"shuju ")
    qmx = null;
    sb = null;
    xb = null;
	if(qmx == null)
		qmx = new Array();
	if(sb == null)
		sb = new Array();
	if(xb == null)
		xb = new Array();
	for(var item =0; item < part.length; item++){
	    if(part[item] == "桥面系"){
	        qmx = adddata(qmx,item,defect_goujian,defect_type,disease,rating,imgname)
        }else if(part[item] == "上部结构"){
            sb = adddata(sb,item,defect_goujian,defect_type,disease,rating,imgname)
        }else{
	             if(part[item] == "下部结构"){
	                xb = adddata(xb,item,defect_goujian,defect_type,disease,rating,imgname)
                    }
	        }
    }

	titletwo.qmx = qmx;//桥面系
	titletwo.sb = sb;//上部
	titletwo.xb = xb;//下部
	titletwo.qq = new Array();//全桥
	var biao = document.getElementById("biao");
	biao.value = "桥梁概况";
	var picwall = document.getElementById("picwallid");
	picwall.innerHTML = "0";
	clickone();
}

function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var show = document.getElementById('show');
	show.innerHTML = "";
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}

function opensty(name){
	var yc = document.getElementById(name + "yc");
	yc.className = "yinchang bloimg"
	var ul = document.getElementById(name + "ul");
	ul.className = "ul blo"
}

function closesty(name){
	var yc = document.getElementById(name + "yc");
	yc.className = "yinchang hidimg"
	var ul = document.getElementById(name + "ul");
	ul.className = "ul hid"
}

function lxlichanged(li){
	var lx = document.getElementById("lx");
	lx.value = li.innerText;

	var arr = getqlgj(lx.value);

	if(arr != null)
	{
		setgjul(arr);
	}
	else
		alert("无此桥梁类型")
}


function gjlichanged(li){
	var gj = document.getElementById("gj");
	gj.value = li.innerText;
//	if(li.innerText == '上部主要承重构件'){
//		chbloorhid("block");
//		setxiaoul(topmainarr);
//	}
//
//	else if(li.innerText == '上部一般承重构件'){
//		chbloorhid("block");
//		setxiaoul(topnormalarr);
//	}
//	else if(li.innerText == '斜拉索系统(斜拉索、锚具、拉索护套、减震装置等）'){
//		chbloorhid("block");
//		setxiaoul(xiearr);
//	}
//	else
//		chbloorhid("none");

}
//function chbloorhid(displaysta){
//	var air = document.getElementById("xiao");
//	var airyc = document.getElementById("xiaoyc");
//	air.style.display = displaysta;
//	airyc.style.display = displaysta;
//}

//function xiaolichanged(li){
//	var xiao = document.getElementById("xiao");
//	xiao.value = li.innerText;
//}


function bwlichanged(li){
	var bw = document.getElementById("bw");
	bw.value = li.innerText;
	select_bridgetype = $("#lx").val()
	select_parts = $("#bw").val()
	 $.ajax({
			 url: '/myApp/dataintEractSubSection/',
			 data: {
				 'select_bridgetype': select_bridgetype,
				 'select_parts':select_parts,
					},
			 type: 'POST',
			 dataType: 'json',
			 success: function (data) {
//			          alert(data+"select")
			          var value_parts = data.value_parts
			          var erbw = $("#erbw")
			          var select_bridgetype = data.bridge_type
			          var tt = value_parts.toString()
                      var str = tt.split(',');
                       $("#erbw").empty();
                      for(var i = 0 ; i < str.length; i++){
                         erbw.append('<option value='+str[i]+'>'+str[i]+'</option>')
                      }

					   },

			});
}

function erblichanged(li){
	var erbiao = document.getElementById("erbiao");
	gettrvalues();
	erbiao.value = li.innerText;
	getquanqiao();
	geterjilivalue();
	displaypic();
}


function trinfo(qsgj,qslx,bhms,dxms,dlms,pdbd,imgsrc,imgname){
	this.qsgj = qsgj;
	this.qslx = qslx;
	this.bhms = bhms;
	this.dxms = dxms;
	this.dlms = dlms;
	this.pdbd = pdbd;
	this.imgsrc = imgsrc;
	this.imgname = imgname;
}


function gettrvalues(){//将表格内容存储
	var tbodychilds = document.getElementById('tbodyid').children;
	var bt = document.getElementById('erbiao').value;
	if(tbodychilds.length > 0){
		var trinarr = new Array();
		for(var i = 0 ; i < tbodychilds.length; i++){
			var t = tbodychilds[i];
			// if((t.children[2].children[1].value == null)
			var trin = new trinfo(t.children[1].children[1].value,t.children[2].children[1].value,t.children[3].children[1].value,t.children[4].children[1].value,t.children[5].children[1].value,t.children[6].children[1].value,"",t.children[7].children[1].innerHTML);
			trinarr.push(trin);
		}
		if(bt == "桥面系病害检查"){
			qiaoliang[1].qmx = trinarr;
		}else{
			if(bt == "上部结构病害检查"){
				qiaoliang[1].sb = trinarr;
			}else{
				if(bt == "下部结构病害检查"){
					qiaoliang[1].xb = trinarr;
				}else{
					if(bt == "全桥病害汇总")
						qiaoliang[1].qq = trinarr;
				}
			}
		}
	}
}


function textareach(th){
	qiaoliang[0].text = th.value;
}

function seterbiaolivalue(arr){
	var erbul = document.getElementById('erbul');
	var erbiao = document.getElementById('erbiao');
	var html = "";
	for(var j = 0 ; j < arr.length; j++){
		html += "<li class='erbli'  onclick='erblichanged(this)'>" + arr[j] + "</li>";
	}
	erbul.innerHTML = html;
	erbiao.value = arr[0];
}

function havesame(a,b){//根据a是否在parts查看componentevalu是否有b
	var havearr = new Array();
	for(var i = 0 ; i < classjson.RECORDS.length; i++){
		if(classjson.RECORDS[i].parts.indexOf(a) > -1){
			havearr.push(classjson.RECORDS[i].component_evalu);
		}
	}
	for(var j = 0 ; j < havearr.length; j++){
		if(havearr[j] == b){
			return true;
		}
	}
//	if(a == "上部结构"){
//		if(b == "挂梁" || b == "湿接缝" || b == "横隔板" || b == "斜拉索" || b == "锚具" || b == "拉索护套" || b == "减震装置")
//		return true;
//	}
	return false;
}

function getqlgj(a){//获取tablename a的componentevalu
	var havearr = new Array();
	for(var i = 0 ; i < classjson.RECORDS.length; i++){
		if(classjson.RECORDS[i].table_name.indexOf(a) > -1){
			havearr.push(classjson.RECORDS[i].component_evalu);
		}
	}
	if(havearr.length > 0)
		return havearr;
	else
		return null;
}


function numchange(th){
	var b = th.parentElement.parentElement.children[2].children[1].value;
	var arr = getQualitandQuant(th.value,b)

	if(arr.length > 0){
		th.parentElement.parentElement.children[4].children[1].value = arr[0];
		th.parentElement.parentElement.children[5].children[1].value = arr[1];
	}
}

function getQualitandQuant(a,b){//根据scale a和table_name b 获取相应的Qualit_desc和Quant_desc
	var arr = new Array();
	for(var i = 0 ; i < qualitjson.RECORDS.length; i++){
		if((qualitjson.RECORDS[i].scale == "" + a) && (qualitjson.RECORDS[i].table_name == b)){
			arr.push(qualitjson.RECORDS[i].Qualit_desc);
			arr.push(qualitjson.RECORDS[i].Quant_desc);
		}
	}
	return arr;
	// alert(a + b + qlitarr + qntarr);
}

function startsel(){//获取添加构件内容
	var qmx = new Array();
	var sb = new Array();
	var xb = new Array();
	for(var i = 0 ; i < gjslarr.length; i++){
		var showarr = new Array();
		for(var j = 0 ; j < gjslarr[i].num; j++){
		alert("#" + (j+1) +gjslarr[i].secondname+"huhu")
			var t = new trinfo("#" + (j+1) +gjslarr[i].secondname,"","","","",0,"","上传照片");
			showarr.push(t);
		}
		if(havesame("桥面系",gjslarr[i].name)){
			qmx = qmx.concat(showarr);
		}else{
			if(havesame("上部结构",gjslarr[i].name)){
				sb= sb.concat(showarr);
			}else{
				if(havesame("下部结构",gjslarr[i].name)){
					xb = xb.concat(showarr);
				}
			}
		}
	}
	qiaoliang[1].qmx = getnewarr(qiaoliang[1].qmx,qmx);
	qiaoliang[1].sb = getnewarr(qiaoliang[1].sb,sb);
	qiaoliang[1].xb = getnewarr(qiaoliang[1].xb,xb);
	getquanqiao();
}

function getnewarr(arr1,arr2){//arr1全局变量，arr2函数变量
	for(var i = 0 ; i < arr2.length; i++){
		for(var j = 0 ; j < arr1.length ; j++){
			if(arr2[i].qsgj == arr1[j].qsgj){
				arr2[i] = arr1[j];
//				alert(arr2[i].qsgj+"arr2[i].qsgj");
			}

		}
	}
	return arr2;
}

function getquanqiao(){
	qiaoliang[1].qq = qiaoliang[1].qmx.concat(qiaoliang[1].sb,qiaoliang[1].xb);
}

function geterjilivalue(){//获取二级标题内容
	var erbiao = document.getElementById('erbiao');
	var ervalue = erbiao.value||"";
	if(ervalue == "桥面系病害检查"){
		settabletr("桥面系");
	}else{
		if(ervalue == "上部结构病害检查"){
			settabletr("上部结构");
		}else{
			if(ervalue == "下部结构病害检查"){
				settabletr("下部结构");
			}else{
				if(ervalue == "全桥病害汇总"){
					settabletr("");
				}
			}
		}
	}

}

function settabletr(name){//显示表格并设置内容
	var t;
	if(name == "桥面系"){
		t = qiaoliang[1].qmx;
	}else{
		if(name == "上部结构"){
			t = qiaoliang[1].sb;

		}else{
			if(name == "下部结构"){
				t = qiaoliang[1].xb;
			}else{
				if(name == ""){
					t = qiaoliang[1].qq;
				}
			}
		}
	}
	var tbodyid = document.getElementById('tbodyid');
	tbodyid.innerHTML = "";
	for(var i = 0 ; i < t.length; i++){
		addtr(t[i].qsgj,t[i].qslx,t[i].bhms,t[i].dxms,t[i].dlms,t[i].pdbd,t[i].imgname);
	}
}


var bli = document.getElementsByClassName("bli");
for(var i = 0; i < bli.length; i++){
	bli[i].onclick = function(){
		var biao = document.getElementById("biao");
		biao.value = this.innerText;
		var erjibiaoti = document.getElementById('erjibiaoti');
		erjibiaoti.style.display = "block";
		switch(biao.value){
			case '检测结果汇总':
				chfiledis("scwj","block");
//				alert("bli"+erjiarr)
//				chfiledis("sczp","none");
				seterbiaolivalue(erjiarr);
				setconarea("hid");
				setcontable("blo");
				displaypic();
				break;
			case '桥梁总体技术状况评定':
				chfiledis("scwj","block");
				chfiledis("sczp","none");
				seterbiaolivalue(sijiarr);
				setconarea("hid");
				setcontable("blo");
				displaypic();
				break;
			case '结论与建议':
				chfiledis("scwj","block");
				chfiledis("sczp","none");
				seterbiaolivalue(wujiarr);
				setconarea("hid");
				setcontable("blo");
				displaypic();
				break;
			default:
				clickone()
		}
		geterjilivalue();
		gettrvalues();
	}
}

function clickone(){
	var erjibiaoti = document.getElementById('erjibiaoti');
	chfiledis("scwj","none");
//	chfiledis("sczp","block");#照片
	setconarea("blo");
	setcontable("hid");
	erjibiaoti.style.display = "none";
	displaypic();
}

function setconarea(zt){
	var conarea = document.getElementById('conarea');
	conarea.className = "qlgk " + zt;
}

function setcontable(zt){
	var conarea = document.getElementById('contable');
	conarea.className = "exceltable " + zt;
}

function removeshow(showdel){
	var show = document.getElementById('show');
	show.removeChild(showdel.parentNode);

	for(var i = 0 ; i < gjslarr.length; i++){
		if(showdel.parentElement.firstElementChild.innerHTML == gjslarr[i].name + "," + gjslarr[i].num)
			gjslarr.removeByIndex(i);
	}
	startsel();

	geterjilivalue();
}

Array.prototype.removeByIndex = function(i) {
	this.splice(i, 1);

}

var showadd = document.getElementById('showadd');

showadd.onclick = function(){
	gettrvalues();
	var lx = document.getElementById('lx').value;
    var bw = document.getElementById('bw').value;
    var erbw = document.getElementById('erbw').value;
	var gj = document.getElementById('gj').value;
	var sl = document.getElementById('sl').value;
	if(gj == ''|| sl == ''){
		alert("构件或数量为空")
	}

		addshowperson(gj,sl,lx,bw,erbw);
		startsel();
		geterjilivalue();
}

function addshowperson(gj,sl,lx,bw,erbw){//将构件name和数量num加入到全局变量里
	var show = document.getElementById('show');
	var per = document.createElement('div');
	var boo = true;
	if(gjslarr.length > 0){
		for(var i = 0 ; i < gjslarr.length; i++){
			if(gj == gjslarr[i].name){
				gjslarr[i].num = Number(gjslarr[i].num) + Number(sl);
				boo = false;
			}
		}
	}
	if(boo){
		var gjn = new gjnum(gj,sl,lx,bw,erbw);
		gjslarr.push(gjn);
	}
	var html = ""
	for(var j = 0 ; j < gjslarr.length; j++){
//	    alert(gjslarr[j].name+gjslarr[j].bridge_type+gjslarr[j].parts+"shuju")
	    html += "<div class='per'><span>"+gjslarr[j].name + "," + gjslarr[j].num + "," + gjslarr[j].bridge_type + "," + gjslarr[j].parts+ "</span><i onclick='removeshow(this)' class='showdel'></i></div>";
	}
	show.innerHTML = html;
}

function exceltdcli(td){
	var exceltd = document.getElementsByClassName('exceltd');
	var excelinput = document.getElementsByClassName('excelinput');
	var tdsp = document.getElementsByClassName('tdsp');
	for(var j = 0 ; j < exceltd.length; j++){
		if(exceltd[j] == td){
			excelinput[j].className = 'excelinput blo';
			tdsp[j].className = 'tdsp hid';
			excelinput[j].focus();
		}
		else{
			excelinput[j].blur();
		}
	}
}

function exceonkeyup(up){
	var tdsp = document.getElementsByClassName('tdsp');
	var excelinput = document.getElementsByClassName('excelinput');
	for(var j = 0 ; j < excelinput.length; j++){
		if(excelinput[j] == up){
			tdsp[j].innerText = excelinput[j].value;
		}
	}
}

function exceonfocus(us){
	var tdsp = document.getElementsByClassName('tdsp');
	var excelinput = document.getElementsByClassName('excelinput');
	for(var j = 0 ; j < excelinput.length; j++){
		if(excelinput[j] == us){
			excelinput[j].value = tdsp[j].innerText;
		}
	}
}


function exceonblur(ur){
	var tdsp = document.getElementsByClassName('tdsp');
	var excelinput = document.getElementsByClassName('excelinput');
	for(var j = 0 ; j < excelinput.length; j++){
		if(excelinput[j] == ur){
			if(excelinput[j].value != '')
				tdsp[j].innerText = excelinput[j].value;
			excelinput[j].className = 'excelinput hid';
			tdsp[j].className = 'tdsp blo';
		}
	}
}


function changeinp(inp){
    var time = $('#sj').val()
    imgsrc = document.getElementsByClassName('imgsrc');
    var img_path = ""
    var _self = this
	for(var i = 0 ; i < imgsrc.length; i++){
		if(imgsrc[i] == inp){
			var reads= new FileReader();
			var fileobj = imgsrc[i].files[0];
			var form = new FormData();
            form.append('img',fileobj);
            form.append('bridge_name',_self.qm.value);
            form.append('bridge_type',_self.lx.value);
            form.append('time',_self.sj.value);
            $.ajax({
                      url: '/myApp/savePics/',
                      data:form,
                      type: 'POST',
                      processData: false,  // tell jquery not to process the data
                      contentType: false,
                      dataType:'json',
                      async : false,
                      success: function (data) {
                            alert("请求成功")
                            img_path = data.path
                             },
                      });


			reads.readAsDataURL(fileobj);
			reads.onload=function (e) {
				var erbiao = document.getElementById('erbiao');
				var time = document.getElementById("sj");
				var boo = false;
				if(imgarr.length > 0){
					for(var j = 0 ; j < imgarr.length; j++){
						if(i+1 == imgarr[j].no){
							boo = true;
							break;
						}
					}
				}
				if(boo){
					if(imgarr[j].src != e.target.result){
						imgarr[j].src = e.target.result;
					}
				}
				else{
					var imgobj = new imginfo(e.target.result,erbiao.value+time.value+i+1+".jpg",img_path);
					imgarr.push(imgobj);
				}
				displaypic();
			}

			var scimg = document.getElementsByClassName('scimg');
			var zptd = document.getElementsByClassName('zptd');
			var erbiao = document.getElementById('erbiao');
			zptd[i].innerText = erbiao.value + i+1;
			scimg[i].className = "scimg hid";
			zptd[i].className = "zptd blo";
			var ervalue = erbiao.value;
			if(ervalue == "桥面系病害检查"){
				qiaoliang[1].qmx[i].imgsrc = e.target.result;
			}else{
				if(ervalue == "上部结构病害检查"){
					qiaoliang[1].sb[i].imgsrc = e.target.result;
				}else{
					if(ervalue == "下部结构病害检查"){
						qiaoliang[1].xb[i].imgsrc = e.target.result
					}
				}
			}
			qiaoliang[1].qq[i].imgsrc = e.target.result
		}
	}

}



function addimgarr(){
	var imgsrc = document.getElementsByClassName('imgsrcbu');
	var reads= new FileReader();
	f=imgsrc[0].files[0];
	reads.readAsDataURL(f);
	reads.onload=function (e) {
		var biao = document.getElementById('biao');
		var imgobj = new imginfo(e.target.result,biao.value , i+1+".jpg");
		imgarr.push(imgobj);
		displaypic();
	};
}


function displaypic(){
	var picwallid = document.getElementById('picwallid');
	var erbiao = document.getElementById('erbiao');
	var biao = document.getElementById('biao').value;
	var ervalue = erbiao.value||"";
	picwallid.innerHTML = "";
	imgarr.sort(function(obj1,obj2){
		return obj1.no - obj2.no;
	})
	var arr = new Array();
	for(var i = 0 ; i < imgarr.length; i++){
		if(biao == "桥梁概况" && (imgarr[i].no.indexOf(biao) > -1)){
			arr.push(imgarr[i]);
		}
		else if(ervalue == "桥面系病害检查" && (imgarr[i].no.indexOf(ervalue) > -1) && biao != "桥梁概况"){
			arr.push(imgarr[i]);
		}
		else if(ervalue == "上部结构病害检查" && (imgarr[i].no.indexOf(ervalue) > -1) && biao != "桥梁概况"){
			arr.push(imgarr[i]);
		}
		else if(ervalue == "下部结构病害检查" && (imgarr[i].no.indexOf(ervalue) > -1) && biao != "桥梁概况"){
			arr.push(imgarr[i]);
		}
		if(ervalue == "全桥病害汇总" && (imgarr[i].no.indexOf("桥梁概况") < 0) && biao != "桥梁概况"){
			arr.push(imgarr[i]);
		}
	}

	for(var i = 0 ; i < arr.length; i++){
		var imgroom = document.createElement('div');
		imgroom.className = 'imgroom';
		imgroom.innerHTML = "<img alt='img' src='' class='imgpic' id='img1'/><span class='imgsp' contenteditable='true'>" + arr[i].no + "</span>"
		picwallid.appendChild(imgroom);
	}
	for(var i = 0 ; i < arr.length; i++){
		var imgp = document.getElementsByClassName('imgpic')
		imgp[i].src=arr[i].src;
	}
}

function zptdclick(zp){
	var zptd = document.getElementsByClassName('zptd');
	var scimg = document.getElementsByClassName('scimg');
	for(var i = 0 ; i < zptd.length; i++){
		if(zptd[i] == zp){
			zptd[i].className = "zptd hid";
			scimg[i].className = "scimg blo";
		}
	}

}
//function addtr2(str1,str2,str3,str4,str5,str6,str7){
//	str6 = Number(str6);
//	str7 = str7||"上传照片"
//	var tbodyid = document.getElementById('tbodyid');
//    var trnum = 2
//	var trd =  document.createElement('tr');
//	var qslx = "qslx"+trnum;
//	var dxms = "dxms"+trnum;
//	var dlms = "dlms"+trnum;
//	trd.innerHTML = "<tr class='spotrela'><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp blo'>" + trnum + "</span><input type='text' id='xh' class='excelinput hid' name='cys'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='text' id='qsgj' class='excelinput blo' value='" + str1 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid' id='qslxsp'></span><input type='text' id='" + qslx + "' class='excelinput blo'  value='" + str2 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='text'id='bhlx' class='excelinput blo' value='" + str3 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='text' id='" + dxms + "' class='excelinput blo' value='" + str4 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp bhidlo'></span><input type='text' id='" + dlms + "' class='excelinput blo' value='" + str5 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='number' onchange='numchange(this)' id='pdbd' class='excelinput blo' value='" + str6 + "'/></td><td class='imgsctd'><div class='scimg hid'><input type='file' accept='image/gif,image/jpeg,image/x-png' id='imgsrc1' onchange='changeinp(this)' class='imgsrc rexcel'/>上传照片</div><span class='zptd blo' onclick='zptdclick(this)'>" + str7 + "</span></td><td><span class='spbot spdel' onclick='deltr(this)'>－</span></td></tr><td><span class='anniu'  onclick='clianniu(this)'>按钮</span></td>";
//	tbodyid.appendChild(trd);
//	autoShowUser(qualitjsontablename,qslx);
//	autoShowUser(qualitdescs,dxms);
//	autoShowUser(quantdescs,dlms);
//}

function addtr(str1,str2,str3,str4,str5,str6,str7){
	str6 = Number(str6);
	str7 = str7||"上传照片";
	var tbodyid = document.getElementById('tbodyid');
	var trnum = tbodyid.children.length + 1;
	var trd =  document.createElement('tr');
	var qslx = "qslx"+trnum;
	var dxms = "dxms"+trnum;
	var dlms = "dlms"+trnum;
	trd.innerHTML = "<tr class='spotrela'><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp blo'>" + trnum + "</span><input type='text' id='xh' class='excelinput hid' name='cys'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='text' id='qsgj' class='excelinput blo' value='" + str1 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid' id='qslxsp'></span><input type='text' id='" + qslx + "' class='excelinput blo'  value='" + str2 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='text'id='bhlx' class='excelinput blo' value='" + str3 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='text' id='" + dxms + "' class='excelinput blo' value='" + str4 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp bhidlo'></span><input type='text' id='" + dlms + "' class='excelinput blo' value='" + str5 + "'/></td><td class='exceltd' onclick='exceltdcli(this)'><span class='tdsp hid'></span><input type='number' onchange='numchange(this)' id='pdbd' class='excelinput blo' value='" + str6 + "'/></td><td class='imgsctd'><div class='scimg hid'><input type='file' accept='image/gif,image/jpeg,image/x-png' id='imgsrc1' onchange='changeinp(this)' class='imgsrc rexcel'/>上传照片</div><span class='zptd blo' onclick='zptdclick(this)'>" + str7 + "</span></td><td><span class='spbot spdel' onclick='deltr(this)'>－</span></td></tr><td><span class='anniu'  onclick='clianniu(this)'>按钮</span></td>";
	tbodyid.appendChild(trd);
//	alert(tbodyid.innerHTML+"body")
	autoShowUser(qualitjsontablename,qslx);
	autoShowUser(qualitdescs,dxms);
	autoShowUser(quantdescs,dlms);
}

Array.prototype.removeByValue = function(val) {
	for(var i=0; i<this.length; i++) {
		if(this[i].no == val) {
			this.splice(i, 1);
			break;
		}
	}
}

function chfiledis(name,play){
	var dis = document.getElementById(name);
	dis.style.display = play;
}

function deltr(trd){
	var tbodyid = document.getElementById('tbodyid');
	tbodyid.removeChild(trd.parentNode.parentNode);
	imgarr.removeByValue(trd.parentNode.previousElementSibling.lastElementChild.innerHTML);
	displaypic();
}

function toright(){
	var leftdiv = document.getElementById('leftdiv');
	var rightdiv = document.getElementById('rightdiv');
	var botdisid = document.getElementById("botdisid");
	if(leftdiv.className == "left noleftch"){
		leftdiv.className = "allleft noleftch"
		rightdiv.className = "noright";
		botdisid.className = "botdis atright";
	}
	if(leftdiv.className == "left leftch"){
		leftdiv.className = "left noleftch";
		rightdiv.className = "right";
		botdisid.className = "botdis atmid";
	}
}

function toleft(){
	var leftdiv = document.getElementById('leftdiv');
	var rightdiv = document.getElementById('rightdiv');
	var botdisid = document.getElementById("botdisid");
	if(leftdiv.className == "left noleftch"){
		leftdiv.className = "left leftch";
		rightdiv.className = "rightch";
		botdisid.className = "botdis atleft";
	}
	if(leftdiv.className == "allleft noleftch"){
		leftdiv.className = "left noleftch";
		rightdiv.className = "right";
		botdisid.className = "botdis atmid";
	}

}

function autoShowUser(users,id) {
	id=('#' + id)||"#value";
	$(id).bind('keyup click',function (e) {
		var suggestid = document.getElementById('suggest');
		var lf = "";
		var tp = "";
		if(this.id.indexOf('qslx') > -1){
			lf = '6%';
			tp = 360 + (Number(this.id.charAt(4))-1) * (this.clientHeight +26) + 'px';
		}
		else if(this.id.indexOf("dxms")>-1){
			lf = '32.5%';
			tp = 360 + (Number(this.id.charAt(4))-1) * (this.clientHeight +26) + 'px';
		}
		else if(this.id.indexOf("dlms")>-1){
			lf = '36%';
			tp = 360 + (Number(this.id.charAt(4))-1) * (this.clientHeight +26) + 'px';
		}
		else{
			lf = this.offsetLeft + 'px';
			tp = this.offsetTop + this.clientHeight + 2 + 'px';
		}

		suggestid.style.width = this.clientWidth + 'px';
		suggestid.style.left = lf;
		suggestid.style.top = tp;
		suggestid.style.maxHeight = "300px";
		suggestid.style.overflow = "scroll";
		var name= $(this).val();
		var num=0;
		if(name!='' ){
			var html='';
			for (var i=0;i<users.length;i++){
				if(users[i].indexOf(name)>-1){
					html += "<li>" +users[i]+"</li>";
					num++;
				}
				if(num>9){
					break;
				}
			}
			if(html !=''){
				$('#suggest').show();
				$('#suggest').html(html);
				$('#suggest li').bind('click',function(e){
					$(id).val($(e.target).html());
					$('#suggest').hide();
				});
			}
		}else{

			$('#suggest').hide();
		}
	});

	$(id).blur(function () {
		setTimeout(function () {
			$('#suggest').hide();
		},150);
	})
}

function getclassjsontablename(){
	var tablenamearr = new Array();
	var boo = true;

	for(var i = 0 ; i < classjson.RECORDS.length; i++){
		boo= true;
		if(tablenamearr.length > 0){
			for(var j = 0 ; j < tablenamearr.length; j++){
				if(tablenamearr[j] == classjson.RECORDS[i].table_name || classjson.RECORDS[i].table_name == null){
					boo = false;
					break;
				}
			}
		}

		if(boo){
			tablenamearr.push(classjson.RECORDS[i].table_name);
		}
	}
	return tablenamearr;
}

function getclassjsonparts(){
	var partsarr = new Array();
	var boo = true;
	for(var i = 0 ; i < classjson.RECORDS.length; i++){
		boo= true;
		if(partsarr.length > 0){
			for(var j = 0 ; j < partsarr.length; j++){
				if(partsarr[j] == classjson.RECORDS[i].parts || classjson.RECORDS[i].parts == null){
					boo = false;
					break;
				}
			}
		}

		if(boo){
			partsarr.push(classjson.RECORDS[i].parts);
		}
	}
	return partsarr;
}

function getclassjsoncomponentevalu(){
	var componentevaluarr = new Array();
	var boo = true;
	for(var i = 0 ; i < classjson.RECORDS.length; i++){
		boo= true;
		if(componentevaluarr.length > 0){
			for(var j = 0 ; j < componentevaluarr.length; j++){
				if(componentevaluarr[j] == classjson.RECORDS[i].component_evalu || classjson.RECORDS[i].component_evalu == null){
					boo = false;
					break;
				}
			}
		}
        if(boo){
			componentevaluarr.push(classjson.RECORDS[i].component_evalu);
		}
	}
	return componentevaluarr;
}


function getqualitjsonqualitdesc(){
	var qualitdescarr = new Array();
	var boo = true;
	for(var i = 0 ; i < qualitjson.RECORDS.length; i++){
		boo= true;
		if(qualitdescarr.length > 0){
			for(var j = 0 ; j < qualitdescarr.length; j++){
				if(qualitdescarr[j] == qualitjson.RECORDS[i].Qualit_desc || qualitjson.RECORDS[i].Qualit_desc == null){
					boo = false;
					break;
				}
			}
		}

		if(boo){
			qualitdescarr.push(qualitjson.RECORDS[i].Qualit_desc);
		}
	}
	return qualitdescarr;
}


function getqualitjsonquantdesc(){
	var quantdescarr = new Array();
	var boo = true;
	for(var i = 0 ; i < qualitjson.RECORDS.length; i++){
		boo= true;
		if(quantdescarr.length > 0){
			for(var j = 0 ; j < quantdescarr.length; j++){
				if(quantdescarr[j] == qualitjson.RECORDS[i].Quant_desc || qualitjson.RECORDS[i].Quant_desc == null){
					boo = false;
					break;
				}
			}
		}

		if(boo){
			quantdescarr.push(qualitjson.RECORDS[i].Quant_desc);
		}
	}
	return quantdescarr;
}

function getqualitjsontablename(){
	var tablenamearr = new Array();
	var boo = true;
	for(var i = 0 ; i < qualitjson.RECORDS.length; i++){
		boo= true;
		if(tablenamearr.length > 0){
			for(var j = 0 ; j < tablenamearr.length; j++){
				if(tablenamearr[j] == qualitjson.RECORDS[i].table_name || qualitjson.RECORDS[i].table_name == null){
					boo = false;
					break;
				}
			}
		}

		if(boo){
			tablenamearr.push(qualitjson.RECORDS[i].table_name);
		}
	}
	return tablenamearr;
}

function getqualitjsonsectionname(){
	var sectionnamearr = new Array();
	var boo = true;
	for(var i = 0 ; i < qualitjson.RECORDS.length; i++){
		boo= true;
		if(sectionnamearr.length > 0){
			for(var j = 0 ; j < sectionnamearr.length; j++){
				if(sectionnamearr[j] == qualitjson.RECORDS[i].section_name || qualitjson.RECORDS[i].section_name == null){
					boo = false;
					break;
				}
			}
		}

		if(boo){
			sectionnamearr.push(qualitjson.RECORDS[i].section_name);
		}
	}
	return sectionnamearr;
}

function setlxul(arr){
	var lxul = document.getElementById('lxul');
	lxul.innerHTML = "";
	for(var j = 0 ; j < arr.length; j++){
		lxul.innerHTML += "<li class='lxli' onclick='lxlichanged(this)'>" + arr[j] + "</li>";
	}
}

function setgjul(arr){
	var gjul = document.getElementById('gjul');
	gjul.innerHTML = "";
	for(var j = 0 ; j < arr.length; j++){
		gjul.innerHTML += "<li class='gjli'  onclick='gjlichanged(this)'>" + arr[j] + "</li>";

	}


}

//function setxiaoul(arr){
//	var xiaoul = document.getElementById('xiaoul');
//	xiaoul.innerHTML = "";
//	for(var j = 0 ; j < arr.length; j++){
//		xiaoul.innerHTML += "<li class='xiaoli'  onclick='xiaolichanged(this)'>" + arr[j] + "</li>";
//	}
//
//}

function setbwul(arr){
	var bwul = document.getElementById('bwul');
//    var bridge_type = $("#lx").val()
//    for (var item = 0;item < arr.length;item++){
//        if(qualitjson.RECORDS[item].chapter_name == bridge_type){
////                alert(qualitjson.RECORDS[item].chapter_name)
//                var newoption = $("#bw").append("<option value = '"+qualitjson.RECORDS[item].section_name+"'>"+ qualitjson.RECORDS[item].section_name +"</option>")
//
//
//        }
//    }

	bwul.innerHTML = "";
	for(var j = 0 ; j < arr.length; j++){
		bwul.innerHTML += "<li class='bwli'  onclick='bwlichanged(this)'>" + arr[j] + "</li>";
	}

}

//var rABS = false; //是否将文件读取为二进制字符串
//function importf(obj) {//导入
//	if (!obj.files) { return; }
//	var f = obj.files[0];
//	{
//		var reader = new FileReader();
//		var name = f.name;
//		reader.onload = function (e) {
//			var data = e.target.result;
//			var wb;
//			if (rABS) {
//				wb = XLSX.read(data, { type: 'binary' });
//			} else {
//				var arr = fixdata(data);
//				wb = XLSX.read(btoa(arr), { type: 'base64' });
//
//			}
//
//			str = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
//			var str1 = str.replace(/序号/g,"num").replace(/缺损构件/g,"dcomponent").replace(/缺损类型/g,"dtype").replace(/病害描述（具体位置、严重程度）/g,"ddescription").replace(/定性描述/g,"qdescription").replace(/定量描述/g,"qudescription").replace(/评定标度/g,"escale");
//			var txt = '{"BInformation":' + str1 + '}';
//
//			objexcel = JSON.parse(txt);
//			if(objexcel.BInformation.length <= 0){
//				alert("文件为空！")
//				return;
//			}
//			else{
//				for(var i = 0 ; i < objexcel.BInformation.length; i++){
//					if(objexcel.BInformation[i].num != null)
//						num = objexcel.BInformation[i].num;
//					else
//						num = "";
//					if(objexcel.BInformation[i].dcomponent != null)
//						dcomponent = objexcel.BInformation[i].dcomponent;
//					else
//						dcomponent = "";
//					if(objexcel.BInformation[i].dtype != null)
//						dtype = objexcel.BInformation[i].dtype;
//					else
//						dtype = "";
//					if(objexcel.BInformation[i].ddescription != null)
//						ddescription = objexcel.BInformation[i].ddescription;
//					else
//						ddescription = "";
//					if(objexcel.BInformation[i].qdescription != null)
//						qdescription = objexcel.BInformation[i].qdescription;
//					else
//						qdescription = "";
//					if(objexcel.BInformation[i].qudescription != null)
//						qudescription = objexcel.BInformation[i].qudescription;
//					else
//						qudescription = "";
//					if(objexcel.BInformation[i].escale != null)
//						escale = objexcel.BInformation[i].escale;
//					else
//						escale = "";
//					addtr(dcomponent,dtype,ddescription,qdescription,qudescription,escale);
//				}
//			}
//		};
//		if (rABS) reader.readAsBinaryString(f);
//		else reader.readAsArrayBuffer(f);
//	}
//}

function fixdata(data) {
	var o = "", l = 0, w = 10240;
	for (; l < data.byteLength / w; ++l)
	o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
	o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
	return o;
}

function topch(){
	var topcli = document.getElementById('topcli');
	var topid = document.getElementById('topid');
	if(topcli.innerHTML == '︿'){
		topid.style.top = "-64px";
		topcli.innerHTML = '﹀';
	}
	else{
		topid.style.top = "0";
		topcli.innerHTML = '︿';
	}
}

function stopPropagation(e) {
	if (e.stopPropagation)
		e.stopPropagation();
	else
		e.cancelBubble = true;
}

function setdocdis(name){
	$('#' + name + 'yc').bind('click',function(e){
		if(document.getElementById(name + 'yc').className == "yinchang hidimg"){
			opensty(name);
		}
		else{
			closesty(name);
		}
		// opensty(name);
		stopPropagation(e);
	});

	$(document).bind('click',function(){
		closesty(name);
	});
}

function setvalue(name,value){
	document.getElementById(name).value = value;
}


function clickhappen(inp){//查询后处理结果
    var bridgename_query = $('#topidqm').val();
    var checktime_query = $('#topidtime').val();

    data = {"bridgename_query":bridgename_query,"checktime_query":checktime_query}
	$.ajax({
           url: '/myApp/Query/',
           data:data,
           async:false,
           type: 'POST',
           dataType:'json',
           success: function (data) {
//                alert(JSON.stringify(data))
                var bridge_name = data.bridge_name;
//                alert(bridge_type[0])
                var bridge_type = data.bridge_type
                var bridgeinfo = data.bridgeinfo;
                var addtime =data.addtime;
                var cxsele = document.getElementById('cxsele');
                for (var i=0;i<addtime.length;i++){
                    cxsele.innerHTML += "<option  value='"+addtime[i] + bridge_name[i] + "'>" +addtime[i]+ bridge_name[i] + "</option>"
                }
                $("#cxsele").change(function(){
                    var bridgename_query = $('#topidqm').val()
                    var checktime_query = $('#topidtime').val()
                    for(var i=0;i<addtime.length;i++){
                        if($(this).children('option:selected').val()==addtime[i] + bridge_name[i] ){
//                            alert(addtime[i] + bridge_name[i] +"huhu")
                            var obj = JSON.parse(bridgeinfo[i])
//                            alert(obj.part+"bridgeinfo")
                            var goujian_query = obj.goujian;
                            var defect_type = obj.defect_type;
                            var disease = obj.disease;
                            var rating = obj.rating;
                            var number_query =obj.number;
                            var section = obj.section;
                            var part = obj.part;
                            var defect_goujian = obj.defect_goujian;
                            var imgname =obj.imgname;

                            setpage($(this).children('option:selected').val(),bridge_type[i],getNowFormatDate(),goujian_query,number_query,section,defect_goujian,'',null,null,null,null,defect_type,disease,rating,part,imgname);
                        }
                    }
		})
                },
    });
}


function clianniu(th){//按钮表格点击事件

}

function getvalue(name){
	return document.getElementById(name).value;
}

function addqiaoliang(name){
	var arr = new Array();
	arr.push(getvalue(name))
	qiaoliang.push(arr);
}
//上传文件
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
		var fromTo = '';
		var person;
		for (var sheet in workbook.Sheets) {
             if (workbook.Sheets.hasOwnProperty(sheet)) {
                 fromTo = workbook.Sheets[sheet]['!ref'];
//                 alert(fromTo+"fromto")
                 console.log(fromTo);
//                        persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                 persons = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
                        // break; // 如果只取第一张表，就取消注释这行
                }
        }
        console.log(persons);

    return JSON.stringify(persons, 2, 2)
	};

	return function process_wb(person) {
        var output = to_json(person)
        var persons = eval(output)
        var nums=[];
        var defect_goujians=[];
        var defect_types=[]
        var diseases = [];
        var qualits = [];
        var quantitys = [];
        var parts = [];
        var ratings = [];
        var imgnames =[];
        for(var item =0;item<persons.length;item++){
            var num = persons[item].序号
            nums.push(num)
            var defect_goujian = persons[item].缺损构件
            defect_goujians.push(defect_goujian)
            var defect_type = persons[item].缺损类型
            defect_types.push(defect_type)
            var disease = persons[item].病害描述
            diseases.push(disease)
            var qualit = persons[item].定性描述
            qualits.push(qualit)
            var quantity = persons[item].定量描述
            quantitys.push(quantity)
            var part = persons[item].部件
            parts.push(part)
            var rating = persons[item].评定标度
            ratings.push(rating)
            var imgname = persons[item].照片编号
            imgnames.push(imgname)
        }
//        alert(nums+"num")
        settable(nums,defect_goujians,defect_types,diseases,ratings,imgnames,parts);
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

//将html文件显示到右侧
