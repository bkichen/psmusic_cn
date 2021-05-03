if(document.URL.toLowerCase().indexOf("www.yymp3.com")!=-1)document.domain="yymp3.com";

if (top.location != self.location) {top.location=self.location;window.external.addFavorite('http://www.yymp3.com','YYMP3音乐网');}
var AuthCode="";
var myPlaylist= new jPlayerPlaylist({
		jPlayer: " ",
		cssSelectorAncestor: " "
	}, [
		{
			title:" ",
			artist:" ",
			mp3:" "
		}
	], {
ready: function (event) {
			$(this).jPlayer("setMedia", {
				mp3:firstplay //mp3的播放地址
			}).jPlayer("play");
		},
		playlistOptions: {
			enableRemoveControls: true
		},
timeupdate: function(event) {
				if(event.jPlayer.status.currentTime==0){
					time = "";
				}else {
					time = event.jPlayer.status.currentTime;
				}
				
			},

		swfPath: "js",
		supplied: "mp3",
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
try{AuthCode = "?"+UUAuthCode;}catch(e){AuthCode=""}

var DzUrl="http://ting6.yymp3.net:82/";
var sArr=new Array();
var maxr=1;
sArr[1]=DzUrl;
var $song_Lrc = new Array();
var $data_Url = new Array();
var id_list=0;
var id_list_play=0;
var id_list_fy=1;
var song_play_id=0;
var song_gs_id=0;
var song_qumu_id=0;
var fast=false;
var maxperpage=17;
var buffering=0,stoped=0,linking=0;
var totalpage=1,currentPage=1;
var $referrer=document.referrer;
var _url = "/";  //http://www.yymp3.com
var playlrcid;
var isIE=document.all? true:false;
var wmaaddr = "";



var JKSite=new Object();
JKSite.Cookie={
	set:function(name,value,path){
		var expires=new Date(new Date().getTime()+(120*3600*200*7));
		var domain="yymp3.com";
		document.cookie=name+"="+value+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"; path=/")+((domain)?";domain="+domain:"");
	},
	get:function(name){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr!=null){return unescape(arr[2]);}
		return null;}
};
function IsNum(s){return(new RegExp(/^(\+|-)?(0|[1-9]\d*)(\.\d*[1-9])?$/).test(s));}
function formatFloat(src, pos){ var gyc= Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);if(src>gyc){return gyc+1;}else{return gyc;}}
function $waitbehind(b){document.getElementById('song_list').innerHTML= '<div id="landing"><div id="lan"><div class="h3"><p>'+b+'</p></div></div></div>';}
function User_landing(b){
var html = '<div id="landing"><div id="lan"><div class="h2">会员登录</div>';
if(b){html +='<div class="h4" id="landing_error">'+b+'</div>';}
html +=' <form action="" method="POST" onSubmit="return User_attestation(this);"><div class="h3">用户名称：  <input name="username" type="text" id="username" value="" size="15" /></div><div class="h3">登录密码： <input name="password" type="password" id="password" value="" size="15" /></div><div class="h5"><input type="submit" id="B12" class="bu ok" value="登 录"/>  <input type="button" class="bu ok" id="B13" onclick="javascript:Reg()" value="注 册"/></div></form></div></div>';
document.getElementById('song_list').innerHTML= html;
}
function User_attestation(b){
if (b.username.value == "") {document.getElementById('landing_error').innerHTML='<span style="color: #009900">注意！</span><br />请输入会员名称。';b.username.focus(); return (false); } 
if (b.password.value == "") {document.getElementById('landing_error').innerHTML='<span style="color: #009900">注意！</span><br />请输入登录密码。';b.password.focus(); return (false); } 
b.B12.disabled=true;b.B13.disabled=true;
var url = "/user/Check_Login.aspx?loginstype=pjs&UserName="+ escape(b.username.value) + "&PassWord=" + escape(b.password.value);
$waitbehind('正在登录，请稍候....');
$download(url);
return (false);
}
function slTop(b){document.getElementById("song_list").scrollTop=b;}
function ctlent(hf){
var ie = (document.all)? true:false;
if (ie){
if(event.ctrlKey && window.event.keyCode==13){
document.getElementById('bofang').value='1';
optlist(3);
document.getElementById('bofang').value='0';
}}}
function imgadd(imgid){document.getElementById("addimg"+imgid).src="/newplaycss/i/no-add.gif";}
function song_list(x,fi){
this._ad = function(u,w,h){return '<div class="ad" style="text-align:center;width:'+w+'px"><iframe MARGINWIDTH="0" MARGINHEIGHT="0" FRAMEBORDER="0" SCROLLING="no" src="'+u+'" width="'+w+'" height="'+h+'"></iframe></div>';};
x=parseInt(x);
fi=parseInt(fi);
eval("id_list_fy=fi");
if(x==id_list){
var listHtml='';
var ni=maxperpage;
var ki=0;
if($song_data[x]){
var song_data = $song_data[x].split('||');

var n=song_data.length-1
var gy=formatFloat(n/ni, 0);
if(fi>gy){fi=gy;}
if(fi>1){ki=ni*(fi-1);}
if(n>ni){ni=ni*fi;}
if(ni>n){ni=n;}
for(var i = ki;i < ni;i++){
var song_n = song_data[i].split('|');
if(x==0){listHtml += '<ul id="song_'+song_n[0]+'_p" onMouseOut="pu.MouseOut(this,'+i+');pu.hideDelIcon(this,'+i+');" onMouseOver="pu.MouseOver(this,'+i+');pu.showDelIcon(this,'+i+');"'}else{
listHtml += '<ul id="song_'+song_n[0]+'_p" onMouseOut="pu.MouseOut(this,'+i+');" onMouseOver="pu.MouseOver(this,'+i+');"'}



var curplaystr="";
if(song_n[0]==song_play_id && x==id_list_play){listHtml += ' class="a"';curplaystr="checked";}

listHtml += '><li class="a">';

listHtml += '<input name="id" type="checkbox" id="id" value="'+song_data[i]+'||'+i+'" />';
listHtml += '<a onClick="pu.utils('+id_list+','+i+',1);" title="歌手：'+song_n[3]+'&#10;歌曲：'+song_n[1]+'" style="CURSOR: pointer" class="light">'+(i+1)+'.'+song_n[1]+'</a></li>';
listHtml += '<li class="b"><a onclick="pu.getgsmusic('+song_n[2]+',\''+song_n[3]+'\');" style="cursor:pointer;"><span style="COLOR:#36c;">'+song_n[3]+'</span></a></li>';
if(x==0){listHtml+='<li class="c" style="display:none;">';}else{listHtml+='<li class="c">';}
if(x==0){listHtml += '<a onClick="pu.DelPlayer('+i+');" style="CURSOR: pointer" title="删除"><img src="/newplaycss/i/del.gif" style="margin-top: 2px;" alt="删除" ></a>';
}else{
listHtml += '<a ';
if($song_data[0].indexOf(song_data[i]+'||')==-1){listHtml += 'onClick="pu.$AddPlayer(\''+song_data[i]+'||\');" style="CURSOR: pointer" title="添加到“临时列表”">';}else{listHtml+=' style="CURSOR: pointer" title="已添加到“临时列表”">';}
listHtml += '<span style="';
if($song_data[0].indexOf(song_data[i]+'||')==-1){imgstr="add";listHtml += 'COLOR:#0066FF';}else{imgstr="no-add";listHtml += 'COLOR:#999999';}
listHtml +='" onClick="imgadd('+i+');"><img id="addimg'+i+'" style="margin-top: 2px;" src="/newplaycss/i/'+imgstr+'.gif"></span></a>';
}
listHtml += '</li></ul>';
}
if(x==3&&totalpage>1){
//搜索其他页
var tiaoHtml = '<select onChange="searchnextpage(this.options[this.selectedIndex].value);slTop(0)">';
for(var ti = 1;ti <= totalpage;ti++){
if(currentPage==ti){tiaoHtml += '<option value="'+ti+'" selected>'+ti+'</option>';
}else{tiaoHtml += '<option value="'+ti+'">'+ti+'</option>';}
}
tiaoHtml += '</select>';
listHtml += '<div class="x"><span>共'+(totalpage)+'/'+tiaoHtml+'页</span>';
if(currentPage==1){listHtml += '上一页 ';}else{listHtml += '<a onClick="searchnextpage('+(currentPage-1)+');slTop(0)" style="CURSOR: pointer">上一页</a> ';}
if(currentPage==totalpage){listHtml += '下一页';}else{listHtml += '<a onClick="searchnextpage('+(currentPage+1)+');slTop(0)" style="CURSOR: pointer">下一页</a>';}
listHtml +='</div>';
//搜索页结束
}else{
if(gy!=1){
var tiaoHtml = '<select onChange="song_list('+x+',this.options[this.selectedIndex].value);slTop(0)">';
for(var ti = 1;ti < gy+1;ti++){
if(fi==ti){tiaoHtml += '<option value="'+ti+'" selected>'+ti+'</option>';
}else{tiaoHtml += '<option value="'+ti+'">'+ti+'</option>';}
}
tiaoHtml += '</select>';
listHtml += '<div class="x"><span>共'+(gy)+'/'+tiaoHtml+'页</span>';
if(fi==1){listHtml += '上一页 ';}else{listHtml += '<a onClick="song_list('+x+','+(fi-1)+');slTop(0)" style="CURSOR: pointer">上一页</a> ';}
if(fi==gy){listHtml += '下一页';}else{listHtml += '<a onClick="song_list('+x+','+(fi+1)+');slTop(0)" style="CURSOR: pointer">下一页</a>';}
listHtml +='</div>';
}else{
//临时列表广告
if(n<=5){listHtml += _ad('',150,300)}
}}
document.getElementById('song_list').innerHTML=listHtml;

}else{document.getElementById('song_list').innerHTML='<p class="el">没找到歌曲</p>';}
}
if(x==3){var qString = new String(document.getElementById('key').value);var keywords = qString.split(" ");/*setAllColor('light', keywords, 'CC0033');*/}
}
function searchnextpage(pages){
currentPage=pages;
optlist(3);return (false);	
}
function $download(URL){Tag = document.createElement("script");Tag.type="text/javascript";Tag.src=URL;document.getElementsByTagName("head")[0].appendChild(Tag);}
function so_jk(){
var select1 = document.getElementById('select').value;
if (select1 != "default") {var key = document.getElementById('key').value;var bofang = document.getElementById('bofang').value;
window.open("/search.aspx?n=2&key="+key,"_blank");return (false);}
optlist(3);return (false);
}
function optlist(n){
slTop(0);
var num = 	new Date().getTime();
this._download1 = function(st){if(st==id_list_play){song_list(st,formatFloat((song_qumu_id+1)/50, 0));}else{song_list(st,1);}};
this._download2 = function(st,URL){
if(!$song_data[st]){$data_Url[st]='';}
if(st>0 && $data_Url[st]!=URL){$waitbehind('获取歌曲数据 请稍候...');$download(URL);eval("$data_Url[st]=URL");}else{this._download1(st);}
};

this.download_data = function(st,URL){if(st==1){if(st!=id_list_play){this._download2(st,URL);}else{this._download1(st);}}else{this._download2(st,URL);}};
document.getElementById('song_list').innerHTML='';
if(document.getElementById(id_list+'_list'))document.getElementById(id_list+'_list').className="";
document.getElementById(n+'_list').className="a";
if(n!=id_list_play){if(document.getElementById(id_list_play+'_list'))document.getElementById(id_list_play+'_list').className="b";}
eval("id_list=n");
if(n==0){song_list(0,1);
}else if(n==1){
var url="dd";
}else if(n==2){
var url = "/user/UserBoxMini.aspx?Action=iflogin&"+num;
}else if(n==3){
var key = document.getElementById('key').value;
var bofang = document.getElementById('bofang').value;
if (key == "" || key == "输入关键字进行搜索") {document.getElementById('song_list').innerHTML='<p class="el"><span style="color: #FF0000">请输入关键字 ！</span></p>';return (false);}
var url = "/p/getser.aspx?key="+escape(key)+"&page="+currentPage;
}else if(n==4){var url = "/p/top.aspx?n=4"; 
}else if(n==5){var url = "/p/top.aspx?n=5";
}else if(n==14){var url = "/p/top.aspx?n=14";
}else if(n==15){var url = "/p/top.aspx?n=15";
}else if(n==8){var url = "/p/top.aspx?n=8";
}else if(n==9){var url = "/p/top.aspx?n=9";
}else if(n==10){var url = "/p/top.aspx?n=10";
}else if(n==11){var url = "/p/top.aspx?n=11";
}else if(n==12){var url = "/p/top.aspx?n=12";
}else if(n==13){var url = "/p/top.aspx?n=13";
}else if(n==16){var url = "/p/top.aspx?n=16";
}else if(n==7){var url = "/p/top.aspx?n=7";

}
var x_list = 'onMouseOut="this.className=\'bu ok\'" onMouseOver="this.className=\'bu ok1\'"'
var c_list = '<input type="button" class="bu ok" value="全，反选" onclick="clk(\'reverse\',\'song_list\');" '+x_list+'/>';
c_list += '<input type="button" class="bu ok" ';
if(n==0){c_list += 'value="删除播放" title="将选择删除" onclick="clk(\'playdel\',\'song_list\');';
}else{
	if(n==1){
		c_list += 'value="删除所选" title="删除选中的歌曲" onclick="clk(\'delsel\',\'song_list\');';
	}else{
		c_list += 'value="加入列表" title="将选择的歌曲加入“临时列表”" onclick="clk(\'playadd\',\'song_list\');';
	}
}
c_list += '"'+x_list+'/>';
if(n==0){c_list += '<input type="button" class="bu ok" value="批量收藏" title="快速批量收藏歌曲" onclick="clk(\'plsc\',\'song_list\');"'+x_list+'/>';}
if(n==1){c_list += '<input type="button" class="bu ok" value="清空所有" title="清理所有历史播放记录" onclick="delcok();"'+x_list+'/>';}
if(n==2){c_list += '<input type="button" class="bu ok" value="删除收藏" title="删除我收藏的歌曲" onclick="clk(\'delfav\',\'song_list\');"'+x_list+'/>';}
if(n>2)c_list += '<input type="button" class="bu ok" value="连续播放" onclick="clk(\'play\',\'song_list\');" '+x_list+'/>';
document.getElementById('control_list').innerHTML=c_list;
if(url=="dd"){

	var str=document.cookie;
	var num_start=str.indexOf("l_music");
	if(num_start!=-1){
		var num_end=str.indexOf("l_end");
		if(num_end>num_start){
			var str_list=str.substring(num_start,num_end).replace(/l_music=/ig,"");
			var arr_list=str_list.split(",");
			if(arr_list.length>0){
				for(i=0;i<arr_list.length;i++){
					var str_ti=arr_list[i];
					if(str_ti!=undefined||str_ti!="undefined"||str_ti!=null||str_ti!=""){
						var url=_url+"p/top.aspx?n=1&musicid="+str_ti;
						this.download_data(n,url);
					}
				}
			}			
		}else{
			$song_data[1]='';
		}
	}else{
		$song_data[1]='';
	}
}else{
	this.download_data(n,url);
}
return (false);
}
function PlayerUtils(){
var p = 0;
var song_id;
var song_u = new Array();
var rnd_id=0;
var song_u_1;
var total=0;
var lrctimea=8888888;
var Stat_drag=0;
var Stat_Time=0;
var Stat_inn='-1';
var Stat_num='';
var utils_s=0;
var stnum = 1190351137140;
var stnumk = 0;
var ding1=0;
var cai1=0;


this.showPlayingTime=function(seconds){
var minute=parseInt(seconds/60);
var second=parseInt(seconds-minute*60);
if(minute<10){minute='0'+minute;}if(second<10){second='0'+second;}
return minute+':'+second;
};

this.MouseOver = function(c,d){c.style.backgroundColor="#FFF5CA";};
this.MouseOut = function(c,d){c.style.backgroundColor="";};
this.showDelIcon = function(c,d){c.getElementsByTagName("li")[2].style.display="block";};
this.hideDelIcon = function(c,d){c.getElementsByTagName("li")[2].style.display="none";};
this.func_ad3 = function(t){document.getElementById('ad3').innerHTML='<iframe MARGINWIDTH="0" MARGINHEIGHT="0" FRAMEBORDER="0" SCROLLING="no" src="" width="300" height="257"></iframe>'};
this.DelPlayer = function(d){
d += '/';var x = d.split('/');
var c = $song_data[0];
for(var i = 0;i < x.length-1;i++){
c=c.replace($song_data[0].split('||')[parseInt(x[i])]+'||','');
if(p>=parseInt(x[i])){p=p-1;}
}
$song_data[0]=c;
total=c.split('||').length-1;
song_list(0,id_list_fy);
};
this.DelPlayer_cok = function(d){
d += '/';var x = d.split('/');
var c = $song_data[1];
for(var i = 0;i < x.length-1;i++){
c=c.replace($song_data[1].split('||')[parseInt(x[i])]+'||','');
if(p>=parseInt(x[i])){p=p-1;}
}
$song_data[1]=c;
total=c.split('||').length-1;
song_list(1,id_list_fy);
};
this.DelPlayer_fav = function(d){
d += '/';var x = d.split('/');
var c = $song_data[2];
for(var i = 0;i < x.length-1;i++){
c=c.replace($song_data[2].split('||')[parseInt(x[i])]+'||','');
if(p>=parseInt(x[i])){p=p-1;}
}
$song_data[2]=c;
total=c.split('||').length-1;
song_list(2,id_list_fy);

};
this.$AddPlayer =function(cli){
if (cli) {
if (total==1 && id_list_play==0){document.getElementById('Playleixin').value=0;}
var dc= $song_data[0];
if($song_data[0].indexOf(cli)==-1)$song_data[0]= dc + cli;
total=$song_data[0].split('||').length-1;
if (id_list==0){optlist(0);}
}
};
this.AddPlayer = function(id){
if (id) {JKSite.Cookie.set("jk_addplay","","/");
id="@0/"+id+"/0@";var song_data = $song_data[0].split('||');
for(var i = 0; i < song_data.length; i++){id=id.replace('/'+song_data[i].split('|')[0]+'/','/'); }
id=id.replace('/0@','').replace('@0/','').replace('@0','');
if (id) {var idss=id.split("/");
for(var is=0;is<idss.length;is++){$download(_url+"p/top.aspx?n=batall&musicid="+idss[is]);}}}
};
this.$AddPlayer_cok =function(cli){
if (cli) {
var dc= $song_data[1];
if($song_data[1].indexOf(cli)==-1)$song_data[1]= cli+dc;
}
};
this._Stat_go =function(){Stat_drag=0;Stat_Time=0;Stat_num = new Date().getTime();if(Stat_inn=='-1'){Stat_inn=0;pu.Stat_go();}Stat_inn=0;};
this.Stat_go =function(){
if(90==Stat_inn && Stat_drag==0){
var num = new Date().getTime();
}
};
this._Next = function(t){p += t;
if(p>(total-1)){p = 0;}else if(p<0){p = (total-1);}
this.utils(id_list_play,p,0);

};
this.PlayNext = function(t){buffering=0;stoped=0;linking=0;this._Next(t);};
this.utils = function(t,r,s){
clearTimeout(playlrcid);
time=0;
playlrcid = setTimeout("pu.PlayLrc()", 200);
if(fast){return(false);}

if(t!=id_list){document.getElementById(t+'_list').className="b";}
if(t!=id_list_play){document.getElementById(id_list_play+'_list').className="";}

if($song_data[t]){

var song_data = $song_data[t].split('||');
total=song_data.length-1;
song_u = song_data[r].split('|');
var num = 	new Date().getTime();
var url=song_u[4].replace("//","/");
wmaaddr=DzUrl+url.toLowerCase().replace(".wma",".mp3");

$("#jquery_jplayer_1").jPlayer("setMedia", {
			mp3: wmaaddr
		}).jPlayer("play");
if((num-stnum)>3000){stnumk=0;}else{stnumk++;}
stnum=num;
song_u_1=song_u[1];
document.getElementById('play_title').innerHTML='歌曲：'+song_u[1]+' 歌手：<a href="/singer/'+song_u[2]+'.htm" target="_blank">'+song_u[3]+'</a>';

Singer=song_u[3];MusicName=song_u[1];

document.title = song_u[1] +' '+song_u[3]+' - 歌曲MP3试听';


p = r;
utils_s = s;
this._Stat_go();
this.changeBg(r,t,song_id,song_u[0]);
this.listBg(t,id_list,id_list_play);
this.downloadlrc(song_u[0]);
this.downdingcai(song_u[0]);

cokstr=song_u[0];
write_cookie(document.cookie);//this.Playerhistory(song_u[0]);
song_id=song_u[0];
eval("song_qumu_id=r");eval("song_play_id=song_id");
eval("id_list_play=t");
eval("song_gs_id="+song_u[2]);
if(t==id_list){
var gy=formatFloat((r+1)/maxperpage, 0);

//myPlaylist.play(r);
}
}
};
this.getgsmusic=function(gsid,gsname){
epen2("/singer/"+gsid+".htm");
};
this.changeBg = function(r,t,song_id,song_u) {
if(t==id_list){
var gy=formatFloat((r+1)/maxperpage, 0);
if(gy==1){xx=(r-0);}else{xx=r-(maxperpage*(gy-1));}
if(gy==id_list_fy){slTop((xx-5)*22);}
if(gy!=formatFloat((song_qumu_id+1)/maxperpage, 0)){song_list(t,gy);}
try {document.getElementById('song_'+song_id+'_p').className="";} catch (e) {}
try {document.getElementById('song_'+song_u+'_p').className="a";} catch (e) {}
}
};
this.listBg = function(t,a,b) {
if(t!=a){document.getElementById(t+'_list').className="b";}
if(t!=b){if(document.getElementById(id_list_play+'_list'))document.getElementById(id_list_play+'_list').className="";}};
this.Playerhistory = function(id){
var flag = id+',';
var history= ','+JKSite.Cookie.get("Playerhistory")+',';history = history.replace(','+flag,",");history = flag + history;var history_data = history.split(',');if(history_data.length){
var historyc="";var n=0;
for(var i = 0;i < history_data.length;i++){if(IsNum(history_data[i])&&50>n){historyc += history_data[i]+',';n++;}}
historyc = historyc.substring(0,historyc.length-1);
JKSite.Cookie.set("Playerhistory",historyc,"/play");
}
};
this.led = function (s1,s2,s3,s4,s5,s6,s7){document.getElementById("LR1").innerHTML=s1;document.getElementById("LR2").innerHTML=s2;document.getElementById("LR3").innerHTML=s3;document.getElementById("LR4").innerHTML=s4;document.getElementById("LR5").innerHTML=s5;document.getElementById("LR6").innerHTML=s6;document.getElementById("LR7").innerHTML=s7;};
this.ledColor = function (l){
	for(var i = 1; i < 8; i++){
		if (i<l){
			document.getElementById("LR"+i).className="gray";
		}else{
			document.getElementById("LR"+i).className="";
		}
	}
	document.getElementById("LR"+l).className="red";
};
this.downdingcai = function(t){
	//var s1url="/s11/"+t+".js";
	//$download(s1url);
}
this.downloadlrc = function(t) {
var tfolder="";
var fdata = t/10000+1;
fdata=fdata.toString();
tfolder=fdata;
if(fdata.indexOf(".")!=-1){
	tfolder=fdata.split(".")[0];
}
if(!$song_Lrc[t]){this.led('','','','正在载入歌词...','','','');this.ledColor(4);$download(_url+'lrc/'+tfolder+'/'+t+'.js');}lrctimea=8888888;};
this.doSp = function (oT){	if(oT>1){document.getElementById("Exobud").controls.currentPosition=oT;}};
this.lrci = function (xi,i){if(_l[i]){document.getElementById(xi).innerHTML = '<a style="CURSOR: pointer" onclick="pu.doSp(\''+(_t[i]/1000)+'\')" >'+_l[i]+'</a>';}else{document.getElementById(xi).innerHTML = '';}};
this.PlayLrc = function (){
var nolrc=false;
if($song_Lrc[song_id]){
try {var curTime = parseInt(time*1000)+500;} catch (e) {var curTime = 0;}
if(Stat_drag==1|| curTime-1000>Stat_Time || Stat_Time>curTime){Stat_drag=1;}else{Stat_drag=0;}
Stat_Time=curTime;
if($song_Lrc[song_id]==0){
if(8888888 == lrctimea){this.led('','<span style="color: #FF9900">歌手：'+song_u[3]+'</span>','<span style="color: #FF9900">歌曲：'+song_u[1]+'</span>','没找到相关歌词','','','');}
lrctimea=0;nolrc=false;
}else if($song_Lrc[song_id].indexOf("文本歌词[/]")!=-1){
lrctimea=0;nolrc=true;
document.getElementById("lyric").style.display="none";document.getElementById("txtword").style.display="block";
document.getElementById("txtword").innerHTML=$song_Lrc[song_id].split("[/]")[1].replace('　','');
if($song_Lrc[song_id].indexOf("暂时找不到这首歌曲的歌词")!=-1){
	document.getElementById("txtword").style.overflowY="hidden";
}else{
	document.getElementById("txtword").style.overflowY="";
}

}else if($song_Lrc[song_id].length >0){
nolrc=false;document.getElementById("lyric").style.display="block";document.getElementById("txtword").style.display="none";
if(8888888 == lrctimea){
var arr = $song_Lrc[song_id].split('[/]');
var timeH='0,0,0,0,'+arr[0]+'8888888';
var TxtH='[n][n]支持YYMP3，就把YYMP3推荐给三个QQ好友[n]'+arr[1]+'[n]YYMP3音乐网 - www.yymp3.com';
_t = timeH.split(",");_l = TxtH.split('[n]');}
for(var i = 0; i < _t.length; i++){var ILine=0;if(_t[i] < curTime  &&  curTime < _t[i+1] || 8888888 == lrctimea){
if(lrctimea!=i){
if (i<4){
						if (_t.length<7){
							ILine=_t.length;
						}else{
							ILine=7;
						}
						for(var j = 0; j < ILine; j++){
							this.lrci("LR"+(j+1),j);

						}

						this.ledColor(i+1);
					}else{
						this.lrci("LR1",i-3);this.lrci("LR2",i-2);this.lrci("LR3",i-1);this.lrci("LR4",i);this.lrci("LR5",i+1);this.lrci("LR6",i+2);this.lrci("LR7",i+3);

						this.ledColor("3");
					}
}
lrctimea=i;
}
}
}else{if(8888888 == lrctimea){this.led('','','','载入歌词失败！','','','');this.ledColor("4");lrctimea=0;nolrc=false;}}
}
if(nolrc){clearTimeout(playlrcid);}else{playlrcid = setTimeout("pu.PlayLrc()", 200);}
};

}
function Media_wma(){
var txt="";
var s1="<div style=\"margin:0;position:relative;\">";

s1+="<div class=\"PlayState\"><span id=\"PlayTimeTxt\">00:00/00:00</span><span id=\"PlayStateTxt\">-</span></div>";
s1+='<object id="Exobud" width="100%" height="44" ';
if(isIE){s1 +=" classid=\"clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6\"";}else{s1 +=" type=\"application/x-ms-wmp\"";}
s1+='>';
s1+='<param name="AutoStart" value="1" />';
s1+='<param name="PlayCount" value="1" />';
s1+='<param name="EnableContextMenu" value="1" />';
s1+='<param name="Volume" value="100" />';
s1+='<param name="url" value="">';
s1+='<embed src="" name="MediaPlayer" type="video/x-ms-wmv" width="100%" height="64" autostart="1" showcontrols="1" allowscan="1" playcount="1" enablecontextmenu="0"></embed>';
s1+='</object>';


s1 +="</div>";
document.writeln(s1);
}
//####################################################
function epen(URL,W,H){var Ws=screen.availWidth/2;var Hs=screen.availHeight/2;window.open(URL,"showwordjk","scrollbars=yes,width="+W+",height="+H+",top="+(Hs-(H/1.5))+",left="+(Ws-(W/2))+",");}
function epen2(URL){window.open(URL)}
function UserCollect(obj){ajaxFav(obj);}
function showword(obj) {
	var wordmulu="";
	var mudata = obj/10000;
	mudata=mudata.toString();
	wordmulu=mudata;
	if(mudata.indexOf(".")!=-1){
		wordmulu=mudata.split(".")[0];
	}

	epen2("/Songword/"+wordmulu+"/"+obj+".htm");}
function getTags(parentobj, tag){if (parentobj == null){return new Array();}else if (typeof parentobj.getElementsByTagName != 'undefined'){return parentobj.getElementsByTagName(tag);}else if (parentobj.all && parentobj.all.tags){return parentobj.all.tags(tag);}else{return new Array();}}
function clk(type,id){
var url = "";
var urlcok = "",urlfav="";
var urli=0;
var object = getTags(document.getElementById(id),"input");
if(object.length > 133){objectlength=133;
}else{
objectlength=object.length;
}for(var i=0;i<object.length;i++){
if(type=="all"){
if(objectlength >i ){object[i].checked = true;}else{object[i].checked = false;}
}else if(type=="reverse"){
if(object[i].checked){object[i].checked = false;}else{object[i].checked = true;}
}else if(type=="delsel"){
if(type=="delsel"){var url_value = object[i].value.split('||')[1];var url_value_cok0 = object[i].value.split('||')[0].split("|")[0];var url_value_cok1 = object[i].value.split('||')[0].split("|")[1];var url_value_cok2 = object[i].value.split('||')[0].split("|")[2];var url_value_cok3 = object[i].value.split('||')[0].split("|")[3];var url_value_cok4 = object[i].value.split('||')[0].split("|")[4];}
if(object[i].checked){url += url_value + "/";urli++;urlcok += url_value_cok0+",";}
}else if(type=="delfav"){//收藏删除
if(type=="delfav"){var url_value = object[i].value.split('||')[1];var url_value_fav0 = object[i].value.split('||')[0].split("|")[0];}else{var url_value = object[i].value.split('|')[0];}
if(object[i].checked){url += url_value + "/";urli++;urlfav += url_value_fav0+"/";}
}else{
if(type=="playdel"){var url_value = object[i].value.split('||')[1];}else{var url_value = object[i].value.split('|')[0];}
if(url_value>-1 && object[i].checked){url += url_value + "/";urli++;}
}
}
url = url.substring(0,url.length-1);
if(type=="play"){
if(url.length==0){alert("请选择歌曲!");
}else if(urli > 80){alert("连续播放不能超过80首!");
}else{if(url.indexOf("/")!=-1){window.open("/p/?d="+ReplaceAll(url,"/",","),"_self");}else{window.open("/play/"+url+".htm","_self");}}
}
if(type=="playadd"){
if(url.length==0){alert("请选择添加歌曲!");
}else{
var ifplay=JKSite.Cookie.get("jk_ifplay");
if(ifplay=="1"){
JKSite.Cookie.set("jk_addplay",url,"/");
alert("已经添加到“临时列表”！");
}else{if(url.indexOf("/")!=-1){window.open("/p/?d="+ReplaceAll(url,"/",","),"_self");}else{window.open("/play/"+url+".htm","_self");}}
}
}
if(type=="playdel"){if(url.length==0){alert("请选择删除歌曲!");}else{pu.DelPlayer(url);}}
if(type=="delsel"){if(url.length==0){alert("请选择删除歌曲!");}else{pu.DelPlayer_cok(url);urlcok = urlcok.substring(0,urlcok.length-1);del_list(urlcok);}}
if(type=="delfav"){if(url.length==0){alert("请选择删除歌曲!");}else{if(confirm("真的要删除您收藏的歌曲吗？")){pu.DelPlayer_fav(url);delmyfav(urlfav);}}}//收藏删除
if(type=="plsc"){if(url.length==0){alert("请选择歌曲!");}else{if(confirm("真的要批量收藏所选歌曲吗？")){plsc(url);}}}//批量收藏
}
JKSite.Cookie.set("jk_ifplay","1","/");
(function(){
        (function(el,cb){
            if (el.addEventListener){
                el.addEventListener('unload', cb, false);
            }else if (el.attachEvent){
                el.attachEvent('onunload', cb);
            }
        })(window,function(){
            if (window.sidebar) {
				JKSite.Cookie.set("jk_ifplay","0","/");
            } else if (window.external) {
				JKSite.Cookie.set("jk_ifplay","0","/");
            } else if (window.opera && window.print) {
            return true;
          }
        });
}
)();
//正则表达式替换
function replaceUrl(str,s1,s2)
{   
var r, re; // 声明变量。   
re = new RegExp(s1,"g"); // 创建正则表达式对象。   
r = str.replace(re,s2); // 在字符串 s 中查找匹配。   
return(r);    
}
function GetO(){
	var ajax=false; 
	try { 
		ajax = new ActiveXObject("Msxml2.XMLHTTP"); 
	} catch (e) { 
		try { 
			ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
		} catch (E) { 
			ajax = false; 
		} 
	}
	if (!ajax && typeof XMLHttpRequest!='undefined') { 
		ajax = new XMLHttpRequest(); 
	} 
	return ajax;
}
function reloadpage(){
	//var expires = new Date();
	//expires.setFullYear(expires.getFullYear()+1);
	//document.cookie="ss=99;path=/;expires=" + expires.toGMTString();
	//showdivcode33();
}
function showdivcode33(){
	var ss=jkGetCookie("ss");
	var r=Math.ceil(Math.random()*maxr);
	if(ss==null||ss.length>=3){
		jkSetCookie("ss",r);
		var ss=jkGetCookie("ss");
	}
	if((ss-maxr)>0){
		jkSetCookie("ss",r);
		var ss=jkGetCookie("ss");
	}
	r=ss;
	if(r==null)r=Math.ceil(Math.random()*maxr);
	
	var DzUrl = sArr[r];//sArr[r]+lastModifiedp(vir)+"/";
	document.getElementById("Exobud").URL = DzUrl+wmaaddr;//+"?"+AuthCode;
}

//删除我的收藏
function delmyfav(favstr){	
	var ajax = GetO();
	var url="/user/del2.aspx?act=delmusic&musicid="+favstr+"&"+Math.random();
	
	ajax.open("Get",url, true);
	ajax.onreadystatechange=function(){
		if (ajax.readyState == 4 && ajax.status == 200) {}
	}
	ajax.send(null)
}
//收藏歌曲
function ajaxFav(favurl){
	login_name = GetCookie("Diy","UserName");
	
	if(login_name!=null){$download("/user/box2.aspx?act=add&i="+favurl+"&"+Math.random());}else{User_landing('<span style="color: #009900">你尚未登录！<br />如果你不是会员 <a onclick="Reg()">请点击注册</a></span>');}	
}
//批量收藏
function plsc(_scurl){
	login_name = GetCookie("Diy","UserName");
	if(login_name!=null){$download("/user/box2.aspx?act=add&i="+_scurl+"&"+Math.random());}else{User_landing('<span style="color: #009900">你尚未登录！<br />如果你不是会员 <a onclick="Reg()">请点击注册</a></span>');}	
}


//判断是否清空过
var yy=JKSite.Cookie.get("yy");
if(yy==undefined||yy=="undefined"||yy==null||yy==""){
	var nextyear=new Date();
	nextyear.setFullYear(nextyear.getFullYear()-10);
	var str_time=nextyear.toGMTString();
	document.cookie="l_music=l_end;expires="+str_time+";path=/";
	JKSite.Cookie.set("yy","1","/");
}
document.onkeydown=function(){
	if(event.keyCode=='39'||event.keyCode=='40'||event.keyCode=='50'){
		pu.PlayNext(1);
	}else if(event.keyCode=='37'||event.keyCode=='38'||event.keyCode=='49'){
		pu.PlayNext(-1);
	}
}
function ReplaceAll(str, sptr, sptr1)
{
while (str.indexOf(sptr) >= 0)
{
   str = str.replace(sptr, sptr1);
}
return str;
}




// ---------------------'
//			'
// 下拉选择开始		'
//			'
//----------------------'




jQuery.fn.extend({
	selectbox: function(options) {
		return this.each(function() {
			new jQuery.SelectBox(this, options);
		});
	}
});


/* pawel maziarz: work around for ie logging */
if (!window.console) {
	var console = {
		log: function(msg) { 
	 }
	}
}

jQuery.SelectBox = function(selectobj, options) {
	
	var opt = options || {};
	opt.inputClass = opt.inputClass || "selectbox";
	opt.containerClass = opt.containerClass || "selectbox-wrapper";
	opt.hoverClass = opt.hoverClass || "current";
	opt.currentClass = opt.selectedClass || "selected"
	opt.debug = opt.debug || false;
	
	var elm_id = selectobj.id;
	var active = 0;
	var inFocus = false;
	var hasfocus = 0;
	//jquery object for select element
	var $select = $(selectobj);
	// jquery container object
	var $container = setupContainer(opt);
	//jquery input object 
	var $input = setupInput(opt);
	// hide select and append newly created elements
	$select.hide().before($input).before($container);
	
	
	init();
	
	$input
	.click(function(){
    if (!inFocus) {
		  $container.toggle();
		}
	})
	.focus(function(){
	   if ($container.not(':visible')) {
	       inFocus = true;
	       $container.show();
	   }
	})
	.keydown(function(event) {	   
		switch(event.keyCode) {
			case 38: // up
				event.preventDefault();
				moveSelect(-1);
				break;
			case 40: // down
				event.preventDefault();
				moveSelect(1);
				break;
			//case 9:  // tab 
			case 13: // return
				event.preventDefault(); // seems not working in mac !
				$('li.'+opt.hoverClass).trigger('click');
				break;
			case 27: //escape
			  hideMe();
			  break;
		}
	})
	.blur(function() {
		if ($container.is(':visible') && hasfocus > 0 ) {
			if(opt.debug) console.log('container visible and has focus')
		} else {
		  // Workaround for ie scroll - thanks to Bernd Matzner
		  if($.browser.msie || $.browser.safari){ // check for safari too - workaround for webkit
        if(document.activeElement.getAttribute('id').indexOf('_container')==-1){
          hideMe();
        } else {
          $input.focus();
        }
      } else {
        hideMe();
      }
		}
	});


	function hideMe() { 
		hasfocus = 0;
		$container.hide(); 
	}
	
	function init() {
		$container.append(getSelectOptions($input.attr('id'))).hide();
		var width = $input.css('width');

    }
	
	function setupContainer(options) {
		var container = document.createElement("div");
		$container = $(container);
		$container.attr('id', elm_id+'_container');
		$container.addClass(options.containerClass);
		
		return $container;
	}
	
	function setupInput(options) {
		var input = document.createElement("input");
		var $input = $(input);
		$input.attr("id", elm_id+"_input");
		$input.attr("type", "text");
		$input.addClass(options.inputClass);
		$input.attr("autocomplete", "off");
		$input.attr("readonly", "readonly");
		$input.attr("tabIndex", $select.attr("tabindex")); // "I" capital is important for ie
		
		return $input;	
	}
	
	function moveSelect(step) {
		var lis = $("li", $container);
		if (!lis || lis.length == 0) return false;
		active += step;
    //loop through list
		if (active < 0) {
			active = lis.size();
		} else if (active > lis.size()) {
			active = 0;
		}
    scroll(lis, active);
		lis.removeClass(opt.hoverClass);

		$(lis[active]).addClass(opt.hoverClass);
	}
	
	function scroll(list, active) {
      var el = $(list[active]).get(0);
      var list = $container.get(0);
      
      if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight) {
        list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight;      
      } else if(el.offsetTop < list.scrollTop) {
        list.scrollTop = el.offsetTop;
      }
	}
	
	function setCurrent() {	
		var li = $("li."+opt.currentClass, $container).get(0);
		var ar = (''+li.id).split('_');
		var el = ar[ar.length-1];
		$select.val(el);
		$input.val($(li).html());
		return true;
	}
	
	// select value
	function getCurrentSelected() {
		return $select.val();
	}
	
	// input value
	function getCurrentValue() {
		return $input.val();
	}
	
	function getSelectOptions(parentid) {
		var select_options = new Array();
		var ul = document.createElement('ul');
		$select.children('option').each(function() {
			var li = document.createElement('li');
			li.setAttribute('id', parentid + '_' + $(this).val());
			li.innerHTML = $(this).html();
			if ($(this).is(':selected')) {
				$input.val($(this).html());
				$(li).addClass(opt.currentClass);
			}
			ul.appendChild(li);
			$(li)
			.mouseover(function(event) {
				hasfocus = 1;
				if (opt.debug) console.log('over on : '+this.id);
				jQuery(event.target, $container).addClass(opt.hoverClass);
			})
			.mouseout(function(event) {
				hasfocus = -1;
				if (opt.debug) console.log('out on : '+this.id);
				jQuery(event.target, $container).removeClass(opt.hoverClass);
			})
			.click(function(event) {
			  var fl = $('li.'+opt.hoverClass, $container).get(0);
				if (opt.debug) console.log('click on :'+this.id);
				$('#' + elm_id + '_container' + ' li.'+opt.currentClass).removeClass(opt.currentClass); 
				$(this).addClass(opt.currentClass);
				setCurrent();
				//$select.change();
				$select.get(0).blur();
				hideMe();
			});
		});
		return ul;
	}
	
	
	
};
$(document).ready(function() {
	if ($("#serselect")[0]){
		$("#serselect").selectbox();
	}else if ($("#Playleixin")[0]){
		$("#Playleixin").selectbox();
	}
});
//下拉选择完成

//----------------------------------------------------显示注册页面
function Reg(){
   log='<iframe src="/User/" width=246 height=245 frameborder=0 scrolling=no></iframe>';
   document.getElementById('song_list').innerHTML= log;
/*   sLeft=screen.width/2-130;
sTop=screen.height/2-300;
if( document.body.scrollWidth < screen.width)
  sLeft=document.body.scrollWidth/2-130;
showDiv1(log,sLeft,sTop);*/
 //  showDiv(log, 206, 245);
}
var MiniSite = new Object();
MiniSite.Browser = {
	ie: /msie/.test(window.navigator.userAgent.toLowerCase()),
	moz: /gecko/.test(window.navigator.userAgent.toLowerCase()),
	opera: /opera/.test(window.navigator.userAgent.toLowerCase())
};
MiniSite.Weather={
 print:function(conainter){

 if(MiniSite.Browser.ie)
 {
     var syl=window.navigator.systemLanguage
     var usl=window.navigator.userLanguage
    if( syl=="zh-cn"&& usl=="zh-cn")
          var _city_ = conainter +"_1";  
    else 
         var _city_ = conainter +"_2";  
 }
 else if(MiniSite.Browser.moz)
 {
    if(/zh-cn/.test(window.navigator.userAgent.toLowerCase()))
	   var _city_ = conainter +"_1";  
    else 
         var _city_ = conainter +"_2";  
 }
 else
 {
     var syl=window.navigator.systemLanguage
     var usl=window.navigator.userLanguage
    if( syl=="zh-cn"&& usl=="zh-cn" )
          var _city_ = conainter +"_1";  
    else 
         var _city_ = conainter +"_2";  
 }
   return _city_;
}
}

function nav2(){
	document.write(' ');

}
function left1(){
	document.write('<p>默认播放</p>');
	document.write('<ul>');
	document.write('<li class="a" id="0_list" onClick="optlist(0);">临时列表</li>');
	document.write('<li id="1_list" onClick="optlist(1);">历史播放</li>');
	document.write('<li id="2_list" onClick="optlist(2);">我的收藏</li>');
	document.write('<li id="3_list" onClick="optlist(3);">搜索结果</li>');
	document.write('</ul>');
	document.write('<dl></dl>');
	document.write('<p>推荐列表</p>');
	document.write('<ul>');
	document.write('<li id="4_list" onClick="optlist(4);">新歌推荐</li>');
	document.write('<li id="5_list" onClick="optlist(5);">热门歌曲</li>');



	document.write('<li id="11_list" onClick="optlist(11);">好听的歌</li>');
	document.write('<li id="12_list" onClick="optlist(12);">校园歌曲</li>');
	document.write('<li id="13_list" onClick="optlist(13);">精选歌曲</li>');
	document.write('<li id="16_list" onClick="optlist(16);">影视歌曲</li>');


	document.write('<li id="14_list" onClick="optlist(14);">欧美热门</li>');
	document.write('<li id="15_list" onClick="optlist(15);">日韩精选</li>');
	document.write('');
	document.write('</ul>');
}