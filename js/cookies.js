function $(id){return document.getElementById(id);}
//访问过的
function setCookie(name, value) { 
var setTime = 1000;
var MusicCookie;
	if (setTime)
	{
		var date = new Date();
		date.setTime(date.getTime()+(setTime*60*60*24));
		var expires = "; expires="+date.toGMTString();
	}
	else 
		var expires = "";
MusicCookie=escape(getCookie(name));
var playCopy;
playCopy=value.split("|")
if( MusicCookie)
{
	if( MusicCookie.indexOf(escape(playCopy[0]+"|"+playCopy[1]))==-1)
	{
		document.cookie = "[" + name + "]=@@" + escape(value) +escape(getCookie(name))+expires+";path=/;domain=yymp3.com";
		
	}
}
else
{	
	document.cookie = "[" + name + "]=@@" + escape(value)+"@@" +expires+";path=/;domain=yymp3.com";		
}
}

//连播
function setCookies(name, value) { 
var setTime = 1000;
var MusicCookie;
	if (setTime)
	{
		var date = new Date();
		date.setTime(date.getTime()+(setTime*60*60*24));
		var expires = "; expires="+date.toGMTString();
	}
	else 
		var expires = "";
MusicCookie=getCookies(name);
if( MusicCookie && MusicCookie !="undefined")
{
	document.cookie = "[" + name + "]="+getCookies(name) + escape(value) +expires+";path=/;domain=yymp3.com";
}
else	
	document.cookie = "[" + name + "]=$$" + escape(value) +expires+";path=/;domain=yymp3.com";
}

//读取已经访问过的歌曲专辑设置新的数据 
function getCookie(Name) { 
var search = "[" + Name + "]=" ;
var MusicList="";
var ArrMusicList;
var i;
if (document.cookie.length > 0) { 
offset = document.cookie.indexOf(search) 
if (offset != -1) { 
	offset += search.length ;
	end = document.cookie.indexOf(";", offset) ;
	if (end == -1) 
		end = document.cookie.length ;
	MusicList = unescape(document.cookie.substring(offset, end)) ;
	ArrMusicList=MusicList.split("@@");
	if (ArrMusicList.length>10 )//修改参数
	{
		MusicList=ArrMusicList[1];
		for(i=2;i<10;i++)//修改参数
			MusicList=MusicList+"@@"+ArrMusicList[i];
	}
	return MusicList;
	} 
} 
}
//***********************获取Cookies值
function getCookies(Name) { 
var search = "[" + Name + "]=" ;
var MusicList="";
var ArrMusicList;
var i;
if (document.cookie.length > 0) { 
offset = document.cookie.indexOf(search) 
if (offset != -1) { 
	offset += search.length ;
	end = document.cookie.indexOf(";", offset) ;
	if (end == -1) 
		end = document.cookie.length ;
	return unescape(document.cookie.substring(offset, end)) ;

	} 
} 
}

//***************************获取已经访问过的歌曲专辑*********************
function getMulicList(Name) { 
var search = "[" + Name + "]=" ;
var MusicList;
var ArrMusicList;
var i;
var MusicListH=""
if (document.cookie.length > 0) { 
offset = document.cookie.indexOf(search) 
if (offset != -1) { 
	offset += search.length ;
	end = document.cookie.indexOf(";", offset) ;
	if (end == -1) 
		end = document.cookie.length ;
	MusicList = unescape(document.cookie.substring(offset, end)) 
	ArrMusicList=MusicList.split("@@");
	for(i=1;i<ArrMusicList.length-1;i++)
	{
		if (Name =="LookSongList")
			MusicListH=MusicListH+"<li><input type=checkbox value='"+ArrMusicList[i].split("|")[0]+"' name=checked><a href=/Play/"+ArrMusicList[i].split("|")[1]+"/"+ArrMusicList[i].split("|")[0]+".htm  onclick=\"Player('"+ArrMusicList[i].split("|")[1]+"/"+ArrMusicList[i].split("|")[0]+"');return false;\">"+ArrMusicList[i].split("|")[2].substring(0,25)+"</a></li>";
		else
			MusicListH=MusicListH+"<li><a href=/Album/"+ArrMusicList[i].split("|")[0]+".htm >"+ArrMusicList[i].split("|")[2].substring(0,15)+"</a></li>";
	}
	} 
	document.getElementById(Name).innerHTML=MusicListH;

} 
}
//删除cookie值 
function chk(name){ 
var setTime = 1000;
if (setTime)
{
	var date = new Date();
	date.setTime(date.getTime()-(setTime*60*60*24));
	var expires = "; expires="+date.toGMTString();
}
else 
	var expires = "";
if(getCookies(name)) 
{	document.cookie = "["+ name +"]="+expires+";path=/;domain=yymp3.com";
	document.cookie = "[playOrder]=1;path=/;domain=yymp3.com";
	document.cookie = "[playNumber]=8;path=/;domain=yymp3.com";
	document.cookie = "[playAuto]=0;path=/;domain=yymp3.com";
}
}