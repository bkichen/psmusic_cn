var setTime=1000;
var PlayLoop=1;
if (setTime)
{
	var date = new Date();
	date.setTime(date.getTime()+(setTime*60*60*24));
	var expires = "; expires="+date.toGMTString();
}
else 
	var expires = "";
function getXML(surl,nodeTag){
	try{
		if (window.ActiveXObject) {
			var xmlObj = new ActiveXObject("Microsoft.XMLDOM");
			xmlObj.async=false;
			xmlObj.load(surl);
			var nodeItems = xmlObj.getElementsByTagName(nodeTag);
		} 
		else if (document.implementation && document.implementation.createDocument) {
			var xmlObj= document.implementation.createDocument("","",null);
			xmlObj.load(surl);
			var nodeItems = xmlObj.getElementsByTagName(nodeTag);
		} 
		else {
			alert('您的浏览器不支持本页功能，请下载更新您的浏览器！');
			return false;
		}
		return nodeItems;
	}catch(E){}
}

function GetFlash(){
	var list = getXML("/TempHtml/flashlist.xml","item");	
	var ss = "";
	var sid;
	var fovid;
	var picurl;
	var leng = list.length;	
	var rnds = ArrRnd(leng,5);
	try{
		var htm = '';
		for (var i=0;i<5;i++)
		{
			htm += '<div class="zj_pic_box1">';
			 j = rnds[i];
			 ss = list[j].childNodes[0].text.split("@@");//歌手 FLASH名称
			 sid = list[j].childNodes[2].text;//FLASH地址
			 picurl=list[j].childNodes[1].text;// 图片地址
			 fovid=list[j].childNodes[3].text;//FLASH歌手地址
			 htm += '<div class="zj_pic2">';
			 htm += '<a href="'+sid+'" target="_blank"><img src="'+picurl+'" alt="'+ss[1] +'" border="0"></a></div>';
			 htm += '<div class="zj_txt1"><a href="'+fovid+'" target="_blank">'+ ss[0] +'</a></div>';
			 htm += '<div class="zj_txt1"><a href="'+sid+'" target="_blank">'+ss[1]+'</a></div>';
			 htm+="</div>";
		}
		document.write(htm);
	}catch(E){}
}

function GetMTVlist(){
	var list = getXML("/TempHtml/mtvlist.xml","item");	
	var ss = "";
	var sid;
	var fovid;
	var picurl;
	var leng = list.length;	
	var rnds = ArrRnd(leng,5);
	try{
		var htm = '';
		for (var i=0;i<5;i++)
		{
			htm += '<div class="zj_pic_box1">';
			 j = rnds[i];
			 ss = list[j].childNodes[0].text.split("@@");//歌手 FLASH名称
			 sid = list[j].childNodes[2].text;//FLASH地址
			 picurl=list[j].childNodes[1].text;// 图片地址
			 fovid=list[j].childNodes[3].text;//FLASH歌手地址
			 htm += '<div class="zj_pic2">';
			 htm += '<a href="'+sid+'" target="_blank"><img src="'+picurl+'" alt="'+ss[1] +'" border="0"></a></div>';
			 htm += '<div class="zj_txt1"><a href="'+fovid+'" target="_blank">'+ ss[0] +'</a></div>';
			 htm += '<div class="zj_txt1"><a href="'+sid+'" target="_blank">'+ss[1]+'</a></div>';
			 htm+="</div>";
		}
		document.write(htm);
	}catch(E){}
}

//******************************获取专辑列表*********************
function getAlbumList(id){
	var list = getXML("/Play/"+id+"/"+id+".xml","item");
	var ss = "";
	var sid;
	var fovid;
	var Singerid,order;
	var cookiesplay='$$';
	var leng = list.length;	
	var k=0;
	try{
		var htm = '<form action="" name="formT"><div class="flash1">';
		for (var i=0;i<leng;i++){
			k=i+1;
			if(k<10)
				order='0'+k;
			else
				order=k;
		 	ss = list[i].childNodes[0].text.split("@@");
		 	sid = list[i].childNodes[2].text;
		 	fovid=list[i].childNodes[3].text;
		 	Singerid=list[i].childNodes[4].text;
		 	htm += '<div id="song">'+order+'.<input type=checkbox value="'+sid+'" name=checked> <a href="'+list[i].childNodes[1].text+'" target="_self">'+ss[1]+'</a></div><div id="save"><a href="http://my.yymp3.com/Box.asp?Action=Add&ID='+fovid+'">收藏</a></div><div id="save"><span onClick="JavaScript:add('+id+','+i+')" style="CURSOR: hand">添加</span></div>';
		}
		htm += '</div>';
		htm += '<div id="title3" align=center><input name="全选" type="button" class="button" value="全选" onClick="CheckAll(this.form)"> <input name="反选" type="button" class="button" value="反选" onClick="CheckOthers(this.form)"> <input name="连播" type="button" class="button" value="连播" onClick="lbsongwmaP(this.form)"></div>'
		document.getElementById("PlayList").innerHTML = htm;
	}catch(E){}
}
function ArrRnd(nums,renLength){
	var rnd = [];
	var tmp;
	var rndj;
	if (nums>0)
	{
		for(var i=0;i<nums;i++){
			rnd[i]=i;
		}
		for(var i=0;i<rnd.length;i++){
			if (i>=renLength)
				break;
			rndj=Math.floor(Math.random()*nums);
			tmp=rnd[i];
			rnd[i]=rnd[rndj];
			rnd[rndj]=tmp;
		}				
	}
	return rnd;
}