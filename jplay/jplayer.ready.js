try{var firstplay="http://ting6.yymp3.net:82/"+$song_data[0].split("|")[4].toLowerCase().replace(".wma",".mp3");}catch(e){var firstplay='';}
//var cokv=JKSite.Cookie.get("jpvolume");
var sol="html, flash";
try{
	if (navigator.appName.indexOf("Microsoft")==-1){
		sol="flash, html";
	}
}catch (e){}
//if(cokv==""||cokv==null||cokv==undefined||cokv=="NaN")cokv=80;
//<![CDATA[
$(document).ready(function(){

/*
 myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#p3"
	}, [
		{
			
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
*/
	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				mp3:firstplay //mp3的播放地址
			}).jPlayer("play");
		},
		timeupdate: function(event) {
				if(event.jPlayer.status.currentTime==0){
					time = "";
				}else {
					time = event.jPlayer.status.currentTime;
				}
				
			},

			repeat: function(event) {
			  if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
				  $(this).jPlayer("play");
				});
			  } else {
				$(this).unbind(".jPlayerRepeat");
			  }
			},
ended: function(){
			pu.PlayNext(1);
		},
		swfPath: "/jplay/js",  		//存放jplayer.swf的决定路径
		solution:"html, flash", //支持的页面
		supplied: firstplay.substring(firstplay.length-3,firstplay.length),		//支持的音频的格式
		wmode: "window"		  
		
	});
	$("#lrc_content").hide();
});
//]]>

/*
$(document).ready(function(){
	$("#c6Player").jPlayer({
		ready:function (event){
			//eval("$(this).jPlayer(\"setMedia\",{"+firstplay.substring(firstplay.length-3,firstplay.length)+":firstplay}).jPlayer(\"play\");")
			$(this).jPlayer("setMedia",{mp3:1.mp3}).jPlayer("play");
		},
		supplied: "m4a,mp3",
		solution:sol,
		swfPath: "js",
		wmode: "window",
		volume: cokv,
		ended: function(){
			pu.playnextsong();
		},
		volumechange:function(){
			var w=$(".jp-volume-bar-value").attr("style").toLowerCase();
			w=w.replace("width:","");
			w=w.replace("%","");
			w=w.replace(";","");
			w=(w/100).toString();
			w=w.substring(0,5);
			if(w>0)JKSite.Cookie.set("jpvolume",w,"/");
		}
		
	});
});*/
var pu = new PlayerUtils();optlist(0);pu.utils(0,0,3);
//pu.ssPlay();
pu.PlayLrc();
