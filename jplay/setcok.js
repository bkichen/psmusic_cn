// 删除歌曲列表功能
function del_list(str_l){
	//if(confirm("您确认要删除吗?")){
		var str=document.cookie;		
		var numStar=str.indexOf("l_music");
		if(numStar!=-1){
			var numEnd=str.indexOf("l_end");
			if(numEnd>numStar){				
				//设置时间
				var nextyear=new Date();
				nextyear.setFullYear(nextyear.getFullYear()+1);
				var str_time=nextyear.toGMTString();
				var strCoki=str.substring(numStar,numEnd).replace(/l_music=/ig,"");
				if(str_l.indexOf(",")!=-1){
					var str_ls = str_l.split(",");
					for(var ix=0;ix<str_ls.length;ix++){
						strCoki=strCoki.replace(str_ls[ix],"");
						strCoki=strCoki+",";
						strCoki=strCoki.replace(str_ls[ix],"");
						strCoki=strCoki.replace(",,",",");
					}
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
					strCoki=strCoki.replace(",,",",");
				}else{
					strCoki=strCoki.replace(str_l,"");
					strCoki=strCoki+",";
					strCoki=strCoki.replace(str_l,"");
					strCoki=strCoki.replace(",,","");
				}
				document.cookie="l_music="+strCoki+"l_end;version="+document.lastModified+";expires="+str_time+";path=/";
				
			}
		}
	//}
}
//清空所有播放歌曲记录Cookie
function delcok(){
	if(confirm("确定要清空历史试听记录吗？\r\r如果您的历史记录不正常，建议全部清空！")){
		//设置时间
		var nextyear=new Date();
		nextyear.setFullYear(nextyear.getFullYear()-10);
		var str_time=nextyear.toGMTString();
		document.cookie="l_music=l_end;expires="+str_time+";path=/";
		optlist(1);
	}
}
//记录cookie
function write_cookie(str){
	var num_start=str.indexOf("l_music");
	var nextyear=new Date();
	nextyear.setFullYear(nextyear.getFullYear()+1);
	var str_time=nextyear.toGMTString();
	var coknums=17*3;
	if(num_start==-1){
		document.cookie="l_music="+cokstr+"l_end;version="+document.lastModified+";expires="+str_time+";path=/";
	}else{
		if(str.indexOf(""+cokstr+"")==-1){
			var num_end=str.indexOf("l_end");
			if(num_end>num_start){
				var str_list=str.substring(num_start,num_end).replace(/l_music=/ig,"");
				var arr_list=str_list.split(",");
				if(arr_list.length<coknums){
					document.cookie="l_music="+cokstr+","+str_list+"l_end;version="+document.lastModified+";expires="+str_time+";path=/";
				}else{
					var arr_new=new Array();
					for(j=0;j<arr_list.length;j++){
						if(j==0){
							arr_new[j]=""+cokstr+"";
						}else{
							arr_new[j]=arr_list[j-1];
						}
					}

					document.cookie="l_music="+arr_new+"l_end;version="+document.lastModified+";expires="+str_time+";path=/";
				}
			}else{
				return("参数错误!");
			}
		}
	}
}
function GetCookie(sMainName, sSubName)
{
	var sCookieName = sMainName + "=";
	var sSubCookieName = (sSubName) ? sSubName + "=" : null;
	var sCookie;
	var sWholeCookie = document.cookie;
	
	var nValueBegin = sWholeCookie.indexOf(sCookieName);
	if(nValueBegin != -1)
	{
		var nValueEnd = sWholeCookie.indexOf(";", nValueBegin);
		if (nValueEnd == -1)
			nValueEnd = sWholeCookie.length;

		var sValue = sWholeCookie.substring(nValueBegin + sCookieName.length, nValueEnd);//获得Cookie值
		if(sSubCookieName)
		{
			var nSubValueBegin = sValue.indexOf(sSubCookieName);
			if(nSubValueBegin != -1)
			{
				var nSubValueEnd = sValue.indexOf("&", nSubValueBegin);
				if(nSubValueEnd == -1)
					nSubValueEnd = sValue.length;
				var sSubValue = sValue.substring(nSubValueBegin + sSubCookieName.length, nSubValueEnd);//获得指定的子键值
				return sSubValue;
			}
		}
		if(!sSubCookieName)
			return sValue;
	}
	return null;
}
function jkSetCookie(sName,sValue)
{ 
	var expires=new Date();
	expires.setFullYear(expires.getFullYear()+1);
	document.cookie=sName + "=" + escape(sValue) + ";path=/;expires=" + 
expires.toGMTString();
}
// 获取指定名称的cookie值 
function jkGetCookie(name)
{ 
var result=null; 
var myCookie=document.cookie + ";"; 
var searchName=name + "="; 
var startOfCookie=myCookie.indexOf(searchName);
var endOfCookie; 
if (startOfCookie != -1) 
{ 
startOfCookie += searchName.length; 
endOfCookie=myCookie.indexOf(";",startOfCookie); 
result=unescape(myCookie.substring(startOfCookie, endOfCookie)); 
} 
return result; 
}
////
