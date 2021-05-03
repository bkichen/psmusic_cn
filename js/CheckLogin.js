// JScript 文件
   
function getCookie(begin,name) {
  var search,offset,end,end1,cookies1,scookies;
  var scookies = document.cookie;
 if(!scookies || scookies == "") return "";
  search = begin + "=";
  //scookies = decodeURIComponent(scookies);
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
    return cookies.substring(offset, end);
  } else return "";
}

var username=getCookie("Diy","UserName");
var UserId=getCookie("Diy","UserId");
var Password=getCookie("Diy","Password");
var SessionLoginHtml="<div class=\"showLogin\">你好，欢迎来到YYMP3音乐网 <a href='/User/MyBox.aspx' target=_blank><b>我的音乐收藏</b></a> <a href=\"javascript:CheckExit();\" target=_self>退出登陆</a>" + document.getElementById("ad_txt").innerHTML + "</div>";
var Oldzu_boxHtml=document.getElementById("zu_box").innerHTML;
if(username!="" && Password !="" && UserId !="" ) 
{ 
   SessionLoginHtml="<div class=\"showLogin\">你好，<span>" + decodeURIComponent(username) + "</span>欢迎来到YYMP3音乐网 <a href='/User/MyBox.aspx' target=_blank><b>我的音乐收藏</b></a> <a href=\"javascript:CheckExit();\" target=_self>退出登陆</a>" + document.getElementById("ad_txt").innerHTML + "</div>";
  // document.getElementById("zu_box").innerHTML="<iframe name=\"talklist\" src=\"/User/login.aspx\" height=30 scrolling=\"no\" frameborder=\"0\" width=\"100%\" marginheight=\"0\" border=\"0\"></iframe>";
   document.getElementById("zu_box").innerHTML=SessionLoginHtml;
}

function CheckLogin(){
	if(document.getElementById("UserName").value==""||document.getElementById("PassWord").value==""){
	alert('您的用户名不能为空');
	return false;
	}
	xmlnames="/User/Check_Login.aspx?UserName="+escape(document.getElementById("UserName").value)+"&PassWord="+escape(document.getElementById("PassWord").value);
	//document.write (xmlnames);
    var OldLoginHtml=document.getElementById("ad_txt").innerHTML;
	document.getElementById("ad_txt").innerHTML="登陆中......";
	
	var sxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	sxmlhttp.open("GET",xmlnames,true);
	sxmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	sxmlhttp.onreadystatechange=manges;
	sxmlhttp.send()
	function manges(){
		if(sxmlhttp.readyState==4){
				var infos=sxmlhttp.getResponseHeader("info");
				if(infos=="ok"){
					document.getElementById("zu_box").innerHTML=SessionLoginHtml;//"<iframe name=\"talklist\" src=\"/User/login.aspx\" height=30 scrolling=\"no\" frameborder=\"0\" width=\"100%\" marginheight=\"0\" border=\"0\"></iframe>";
				}else{
					if (infos!="UserNameAndPassWordError"){
					document.getElementById("ad_txt").innerHTML=OldLoginHtml;
					alert(infos);
					}else{
					document.getElementById("ad_txt").innerHTML=OldLoginHtml;
						if (confirm('你的用户名密码出错？')){
							Reg();
						}
					}
				}
			}
		}
}

function CheckExit(){
	xmlnames="/User/exit.aspx";
	document.getElementById("zu_box").innerHTML=document.getElementById("zu_box").innerHTML+"退出登陆中......";
	var sxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	sxmlhttp.open("GET",xmlnames,true);
	sxmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	sxmlhttp.onreadystatechange=manges;
	sxmlhttp.send()
	function manges(){
		if(sxmlhttp.readyState==4){
					if(sxmlhttp.status == 200){
					      document.getElementById("zu_box").innerHTML=Oldzu_boxHtml;
					}else{
					      alert("错误"+sxmlhttp.status);
					}
			}
		}
}