function $(id){return document.getElementById(id);}
var currPage = 1;
var currClass = 0;
var curShow;
function ch(){
 	document.search.keyword.style.backgroundImage = "";
}

function PlayWindow(ListenURL){
 	window.open(ListenURL, "MusicWindow", "scrollbars=yes,width=800,height=470");
 	return false;
}
function SwitchCDt(ClassID,number,lirliver)
{
	for(i=0;i<number;i++)
	{
	$(lirliver + i + "CDC").style.display="none";
	if((lirliver=="music" && i==2) || (lirliver=="flash" && i==2) || (lirliver=="mtv" && i==2))
		$(lirliver + i + "cd").className="more";
	else
		$(lirliver + i + "cd").className="BlkBlackTabOff";
	}
	if((lirliver=="music" && i==2)  || (lirliver=="flash" && i==2) || (lirliver=="mtv" && i==2))
 		$(lirliver + ClassID + "cd").className="on_line more";
	else
		$(lirliver + ClassID + "cd").className="on_line";
	$(lirliver + ClassID + "CDC").style.display="";
        if((i=0) || (i=1))
	    $(lirliver + 0 + "cd").className="newAlbum";
		$(lirliver + ClassID + "CDC").style.display="";
	currClass=ClassID;
	currPage = 1;
}
function SwitchCD(ClassID,number,lirliver)
{
	tPopWait=0;//停留tWait豪秒后显示提示。
	var ClassID=ClassID;
	var number=number;
	var lirliver=lirliver;
	curShow=setTimeout("SwitchCDt('"+ClassID+"',"+number+",'"+lirliver+"')",tPopWait);
}

function clearTimeouttb()
{
	clearTimeout(curShow); 
}