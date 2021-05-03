document.domain="yymp3.com";
function getCookieN(begin,name) {
  var search,offset,end,end1,cookies1,scookies;
  var scookies = document.cookie;
 if(!scookies || scookies == "") return "";
  search = begin + "=";
  offset = scookies.indexOf(search);
  cookies1=scookies.substring(offset, scookies.length);
  end1 = cookies1.indexOf(";") ;
  if (end1 == -1) end1 = cookies1.length;
  cookies =cookies1.substring(0, end1);
 if(!cookies || cookies == "") return "";
  search = name + "=";
  offset = cookies.indexOf(search);
  if (offset != -1) {
    offset += search.length ;
    end = cookies.indexOf("&", offset) ;
    if (end == -1) end = cookies.length;
    return unescape(cookies.substring(offset, end));
  } else return "";
}
var log;
var curShowt;
function CloseDiv(){
   var my_tips=$("mytips");
   var lgbox=$("lgbox2");
   my_tips.style.display="none";
   lgbox.style.display="none";
}
function UserLogin(){
   log='<iframe src="/User/UserLogin.aspx" width=282 height=160 frameborder=0 scrolling=no></iframe>';
   showDiv(log, 206, 245);
}

function Reg(){
   log='<iframe src="/User/" width=282 height=245 frameborder=0 scrolling=no></iframe>';
   showDiv(log, 206, 245);
}
function GetPass(){
   log='<iframe src="/User/GetPass.aspx" width=250 height=150 frameborder=0 scrolling=no></iframe>';
   showDiv(log, 150, 250);
}

function showlogin(tips,flag){
var my_tips=$("mytips");
var lgbox=$("lgbox2");
if(flag){
    my_tips.style.display="";
	lgbox.innerHTML=tips;
}
else 
{
   my_tips.style.display="none";
   lgbox.style.display="none";
}
}

function out_s(){
	xmlnames="/User/login.asp?act=out"
	var sxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	sxmlhttp.open("GET",xmlnames,false);
	sxmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	sxmlhttp.onreadystatechange=manges;
	sxmlhttp.send();
	function manges(){
	if(sxmlhttp.readyState==4){
		var infos=sxmlhttp.getResponseHeader("info");
		alert(infos);
		}
	}
}
function Slg()
{
	tPopWait=1000;//停留tWait豪秒后显示提示。
	curShowt=setTimeout("sin()",tPopWait);
}
function clearshowlogin()
{
	clearTimeout(curShowt); 
}
function sin(id){
   log='<iframe src="/User/Box.aspx?Id='+id+'" width=250 height=150 frameborder=0 scrolling=no></iframe>';
   showDiv(log, 150, 250);
}
function Ablum(id){
   log='<iframe src="/User/Ablum.aspx?Id='+id+'" width=250 height=150 frameborder=0 scrolling=no></iframe>';
   showDiv(log, 150, 250);
}
//********************************************显示登陆位置
function showDiv(log, leftw, toph){
  var my_tips=$("mytips");
  var lgbox=$("lgbox2");
  my_tips.style.display="";
  lgbox.style.display="";
  lgbox.innerHTML=log;
  lgbox.style.left=screen.width/2-leftw +"px";
  lgbox.style.top=screen.height/2-toph + document.documentElement.scrollTop +"px";
  my_tips.style.left=0;
  my_tips.style.top=0;
  my_tips.style.width=document.body.scrollWidth+"px";
  my_tips.style.height=document.body.scrollHeight +"px";
  if( document.body.scrollHeight < screen.height)
     my_tips.style.height = screen.height - 200 +"px";
  else
     my_tips.style.height=document.body.scrollHeight +"px";
}
//********************************************显示收藏位置
function showDiv1(log, leftw, toph){
  var my_tips=$("mytips");
  var lgbox=$("lgbox2");
  my_tips.style.display="";
  lgbox.style.display="";
  lgbox.innerHTML=log;
  lgbox.style.left=leftw +"px";
  lgbox.style.top=toph +"px";
  my_tips.style.left=0;
  my_tips.style.top=0;
  my_tips.style.width=document.body.scrollWidth+"px";
  my_tips.style.height=document.body.scrollHeight +"px";
  if( document.body.scrollHeight < screen.height)
     my_tips.style.height = screen.height+"px";
  else
     my_tips.style.height=document.body.scrollHeight +"px";
}
function Ran()
{
  window.open("/P/","p","");
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
    if( syl=="zh-cn"&& usl=="zh-cn" )
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
