var playId="";

function lbsongwma(form){
var newurl="";
var doc=form;
var k=0
	for (var i=0;i<doc.checked.length;i++)
	{
		var e = form.elements[i];
		if (e.name == 'checked')
		{
			if (e.checked==false)
			{
			}
			else
			{
				newurl=newurl+e.value+","; //+"_"+u;
				k=k+1;
			}
		}
	}
	
	if(newurl==""){
	alert('请您选择后再播放');
	}else{
	     if(k>100){
	         alert('您只能连播100首歌')
	     }else{
		window.open("/P/?d="+newurl,"p","");
	     }
        }

	return false;
}
function DelBox(form){
var newurl="";
var doc=form;
var k=0
	for (var i=0;i<doc.checked.length;i++)
	{
		var e = form.elements[i];
		if (e.name == 'checked')
		{
			if (e.checked==false)
			{
			}
			else
			{
				newurl=newurl+e.value+","; //+"_"+u;
				k=k+1;
			}
		}
	}
	
	if(newurl==""){
	alert('请您选择后再删除');
	
	}else{
		window.location.href="del.aspx?BoxType=0&id="+newurl;
	}
}

function DelAblum(form){
var newurl="";
var doc=form;
var k=0
	for (var i=0;i<doc.checked.length;i++)
	{
		var e = form.elements[i];
		if (e.name == 'checked')
		{
			if (e.checked==false)
			{
			}
			else
			{
				newurl=newurl+e.value+","; //+"_"+u;
				k=k+1;
			}
		}
	}
	
	if(newurl==""){
	alert('请您选择后再删除');
	
	}else{
		window.location.href="del.aspx?BoxType=1&id="+newurl;
	}
}


function ck(id){
var newurl="";
var doc="form";
var e = form.elements[id-1];
if (e.checked==false)
{
	e.checked=true;
}
else
{
	e.checked=false;
}
	return false;
}
function ckt(formn,id){
var newurl="";
var doc=formn;
var e = doc.elements[id-1];
if (e.checked==false)
{
	e.checked=true;
}
else
{
	e.checked=false;
}
	return false;
}
//跨表单点播歌曲 调用onclick="Selected(this.value,this)"

function Selected(Id,CanId)
{
       if(CanId.checked==true)
          playId = playId+Id+",";
       else
          playId = playId.replace(Id+",",'');
}
function PlayAll()
{
   var ArrPlayId=[];
   ArrPlayId=playId.split(",");
   if (ArrPlayId.length>50){
      alert('您只能连播50首歌！');}
   else if(ArrPlayId.length<2){
      alert('请选择您要播放的歌曲！');}
   else{
      window.open("/P/?d="+playId,"p","");}
}
function CheckOthers(form)
{
	for (var i=0;i<form.elements.length;i++)
	{
		var e = form.elements[i];
		if (e.name == 'checked')
		{
			if (e.checked==false)
			{
				e.checked = true;// form.chkall.checked;
				playId = playId+e.value+",";
			}
			else
			{
				e.checked = false;
				playId = playId.replace(e.value+",",'');
			}
		}
	}
	
}

function CheckAll(form)
{
	for (var i=0;i<form.elements.length;i++)
	{
		var e = form.elements[i];
		
		if (e.name == 'checked')
		{
		   if(playId.indexOf(","+e.value+",")==-1)
		       playId = playId+e.value+",";
			e.checked = true// form.chkall.checked;
		}
	}
	
}
function Player(url)
{

  window.open("/Play/"+url+".htm","yymp3","");
}

