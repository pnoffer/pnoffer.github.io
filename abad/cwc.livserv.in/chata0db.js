var currentpageurl=window.location.href;var checkmouseonpopup=0;var minmaxstate=0;var startstopAnimation=0;var lpcwc_vc=0;var cwcUserAgent;var webRefferrer;var cwcUserBrowser;var cwcUserVersion;var cwcUserPlatform;var divTag=document.createElement("div");divTag.setAttribute('id',"livprop_chatbox");var cname="checkmouseonpopup";var cminmax="minmaxstate";var cminmaxButton="minmaxButtonstate";var cssAnimation="startstopAnimation";var cvalue=1;var exdays=1;var lid='';var alldivs=[];var allText='';var setvideopos='';var cv_cookie="lpcwc_vc";var temp_vc='';(function(){try{var myEle=document.getElementById("lp_cwc_xqzyihjdskw");if(myEle){var src=myEle.src
var lid=unescape(src).split("lid=")[1].split("&")[0];var newsrc=src;newsrc=newsrc.replace("chat.js?lid="+lid,"ajax.php?p=builders/getSettings&lid="+lid+"&currentpageurl="+currentpageurl);console.log("on-id");readTextFile(newsrc,lid)}else{var myTag=document.getElementsByTagName("script");var src=myTag[myTag.length-1].src;var lid=unescape(src).split("lid=")[1].split("&")[0];var newsrc=src;newsrc=newsrc.replace("chat.js?lid="+lid,"ajax.php?p=builders/getSettings&lid="+lid+"&currentpageurl="+currentpageurl);console.log("on-length");readTextFile(newsrc,lid)}}catch(e){console.log("cwc is inactive.")}}());function readTextFile(newsrc,lid){var rawFile=new XMLHttpRequest();rawFile.open("GET",newsrc,!0);rawFile.send(null);rawFile.onreadystatechange=function(){if(rawFile.readyState===4){if(rawFile.status===200||rawFile.status==0){if(document.getElementById('ls_theLayer')){}else{allText=rawFile.responseText;allText=JSON.parse(allText);str=JSON.stringify(allText);if(allText.status==1){if(window.location.protocol=='https:'){var siteurl=(allText.url).replace("http","https")}else{var siteurl=allText.url}
var templateurl=allText.templateurl;var icon_url=allText.icon_url;alldivs=allText.divs;if(window.innerWidth<550)allText.viewheight='';if(lid=='20237'||lid=='7980'||lid=='9527'){var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='#';link.media='all';head.appendChild(link)}else{var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href=siteurl+'css/animate.css';link.media='all';head.appendChild(link)}
if(allText.css.length>0){for(var i=0;i<allText.css.length;i++){var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href=siteurl+templateurl+allText.css[i];link.media='all';head.appendChild(link)}}
if(allText.content.length>0){divTag.innerHTML=allText.content;document.body.appendChild(divTag);if(document.getElementById('chaticon')){document.getElementById('chaticon').src=siteurl+icon_url}
var popupdiv=alldivs[0];if(allText.from_time!="NULL"){var date=new Date();var hours=date.getHours()>12?date.getHours()-12:date.getHours();var am_pm=date.getHours()>=12?"PM":"AM";hours=hours<10?"0"+hours:hours;var minutes=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();time=hours+":"+minutes+" "+am_pm;var fromTime="11/24/2014 "+allText.from_time+" "+allText.f_time;var toTime="11/24/2014 "+allText.to_time+" "+allText.t_time;var currentTime="11/24/2014 "+time;var f_Time=new Date(Date.parse(fromTime));var t_Time=new Date(Date.parse(toTime));var c_Time=new Date(Date.parse(currentTime));if(f_Time>=c_Time||t_Time<=c_Time){document.getElementById("livprop_popup1").style.opacity=0;document.getElementById("livprop_popup1").style.visibility='hidden';document.getElementById("livprop_popup1").style.display='none !important'}else{}}
var buttonImage=alldivs[4];var modelHeader=alldivs[2];var livPop=alldivs[1];if(allText.mh_pTop){document.getElementById(modelHeader).style.paddingTop=allText.mh_pTop;document.getElementById(modelHeader).style.paddingRight=allText.mh_pRight;document.getElementById(modelHeader).style.paddingBottom=allText.mh_pBottom;document.getElementById(modelHeader).style.paddingLeft=allText.mh_pLeft}
if(allText.mh_bTopRadius){document.getElementById(modelHeader).style.borderTopLeftRadius=allText.mh_bTopRadius;document.getElementById(modelHeader).style.borderTopRightRadius=allText.mh_bTopRadius;document.getElementById(livPop).style.borderRadius=allText.mh_bTopRadius}
if(allText.wp=="left"){document.getElementById(popupdiv).style.left=allText.wps;document.getElementById(popupdiv).style.bottom=allText.wbs;document.getElementById(buttonImage).style.left=allText.buttonRL;document.getElementById(buttonImage).style.marginBottom=allText.buttonMB}else{document.getElementById(popupdiv).style.right=allText.wps;document.getElementById(popupdiv).style.bottom=allText.wbs;document.getElementById(buttonImage).style.right=allText.buttonRL;document.getElementById(buttonImage).style.marginBottom=allText.buttonMB}
if(allText.cmd=='yes'){var screenSize=screen.width;if(screenSize<700){document.getElementById('chat_window').style.display='block';document.getElementById('livchat_close').innerHTML='-'}else{document.getElementById('livchat_close').innerHTML='-';document.getElementById('chat_window').style.display='none'}}
if(allText.cmm=='yes'){var screenSize=screen.width;if(screenSize<700){document.getElementById('livchat_close').innerHTML='-';document.getElementById('chat_window').style.display='none'}else{document.getElementById('chat_window').style.display='block';document.getElementById('livchat_close').innerHTML='-'}}
if(allText.cmm=='yes'&&allText.cmd=='yes'){if(window.innerWidth<700){document.getElementById('livchat_close').innerHTML='-';document.getElementById('chat_window').style.display='none'}else{document.getElementById('livchat_close').innerHTML='-';document.getElementById('chat_window').style.display='none'}}
if(allText.dmc=='yes'){var screenSize=screen.width;if(screenSize<700){var popupdiv=alldivs[0];document.getElementById(popupdiv).style.opacity=0;document.getElementById(popupdiv).style.visibility='hidden';document.getElementById(popupdiv).style.display='none !important'}}
if(allText.stop_animation=='yes'){var div=alldivs[0];document.getElementById(div).onmouseover=function(){stopAnimation()};document.getElementById(div).onmouseout=function(){startAnimation()}}
if(allText.cmc=='yes'){minmaxstate=getMinMaxCookie(cminmax);if(minmaxstate==1){document.getElementById('livchat_close').innerHTML='+';document.getElementById('chat_window').style.display='none'}}
if(allText.cmcb=='yes'){minmaxBtnstate=getMinMaxButtonCookie(cminmaxButton);if(minmaxBtnstate==1){var imagediv=alldivs[4];document.getElementById(imagediv).innerHTML="<img height='"+imgHeight+"' width='"+imgWidth+"' src='"+siteurl+allText.buttonpath+"'>";if(allText.animation!=''){setTimeout(function(){document.getElementById(imagediv).style.display='block';document.getElementById(imagediv).style.animation=allText.animation+' 3s infinite';setTimeout(function(){removeanimation()},3000)},3000)}else document.getElementById(imagediv).style.display='block';var div=alldivs[0];document.getElementById(div).style.opacity=0;document.getElementById(div).style.visibility='hidden';document.getElementById(div).style.display='none';document.getElementById(imagediv).addEventListener('click',showchat);document.getElementById('livchat_close').addEventListener('click',hidechat)}}}
if(allText.logopath!=''){document.getElementById('chaticon').style.width=allText.logoWidth;document.getElementById('chaticon').style.height=allText.logoHeight;document.getElementById('chaticon').style.marginRight=allText.logoMR;document.getElementById('chaticon').style.marginLeft=allText.logoML;document.getElementById('chaticon').style.marginTop=allText.logoMT}
if(allText.av=='yes'){if(allText.type=='Video'){var head=document.getElementsByTagName('body')[0];var script=document.createElement('script');script.type='text/javascript';script.src=siteurl+'js/html5lightbox.js';head.appendChild(script);var videodivTag=document.createElement("div");videodivTag.setAttribute('id',"livprop_videopopup");document.body.appendChild(videodivTag);var videohtml='<a href="'+siteurl+allText.playurl+'" id="livprop_video_trigger" class="html5lightbox" data-autoplayvideo="'+((allText.videoPosition=="")?"true":"false")+'" data-width="'+allText.videoWidth+'" data-height="'+allText.videoHeight+'"></a>';videodivTag.innerHTML=videohtml;if(allText.videoPosition!=''){setvideopos=setInterval(function(){if(document.getElementById('html5-lightbox-box')){clearInterval(setvideopos);setvideoPosition()}},1000)}}else if(allText.type=='Audio'){var audiodivTag=document.createElement("div");audiodivTag.setAttribute('id',"livprop_audiopopup");document.body.appendChild(audiodivTag);var audiohtml='<audio autoplay loop="loop"><source src="'+siteurl+allText.playurl+'"></audio>';audiodivTag.innerHTML=audiohtml}}
if(allText.js.length>0){var head=document.getElementsByTagName('body')[0];for(var i=0;i<allText.js.length;i++){var script=document.createElement('script');script.type='text/javascript';async:!0;var scurl=allText.js[i];if(scurl.indexOf("http://")==0||scurl.indexOf("https://")==0)script.src=scurl;else script.src=siteurl+templateurl+scurl;head.appendChild(script)}}
if(allText.headertext!=''){var textdiv=alldivs[3];document.getElementById(textdiv).innerHTML=allText.headertext}
if(allText.headertextfontsize!=''){var textdiv=alldivs[3];document.getElementById(textdiv).style.fontSize=allText.headertextfontsize+'px'}
if(allText.viewwidth!=''&&window.innerWidth>500){var popupdiv=alldivs[1];document.getElementById(popupdiv).style.width=allText.viewwidth}
if(allText.viewheight!=''){document.getElementById('ls_chatFrameDiv').style.height=allText.viewheight}
if(allText.headerbgcolor!=''){var headerdiv=alldivs[2];document.getElementById(headerdiv).style.backgroundColor='#'+allText.headerbgcolor}
if(allText.headerfontfamily!=''){var textdiv=alldivs[3];document.getElementById(textdiv).style.fontFamily=allText.headerfontfamily}
if(allText.bgcolor!=''||allText.headercolor!=''){if(allText.bgcolor!=''){var chatdiv=alldivs[1];document.getElementById(chatdiv).style.backgroundColor='#'+allText.bgcolor}
if(allText.headercolor!=''){var headdiv=alldivs[3];document.getElementById(headdiv).style.color='#'+allText.headercolor}}
if(allText.buttonpath!=''){var screenSize=screen.width;var imagediv=alldivs[4];if(allText.buttonWidth){var imgHeight=allText.buttonWidth;var imgWidth=allText.buttonHeight}
if(allText.headercolor==''||allText.headercolor=='null'){allText.headercolor="FFFFFF"}
document.getElementById(imagediv).innerHTML="<img height='"+imgHeight+"' width='"+imgWidth+"' src='"+siteurl+allText.buttonpath+"'>";if(screenSize>700&&allText.button_on_mobile=='yes'){var div=alldivs[0];document.getElementById(div).style.opacity=1;document.getElementById(div).style.visibility='visible';document.getElementById(div).style.display='block';document.getElementById(imagediv).addEventListener('click',showchat);document.getElementById('livchat_close').addEventListener('click',hidechat);document.getElementById('livchat_close').innerHTML='<font color="'+allText.headercolor+'">X</font>'}else{if(allText.animation!=''){setTimeout(function(){document.getElementById(imagediv).style.display='block';document.getElementById(imagediv).style.animation=allText.animation+' 3s infinite';setTimeout(function(){removeanimation()},3000)},3000)}else document.getElementById(imagediv).style.display='block';var div=alldivs[0];document.getElementById(div).style.opacity=0;document.getElementById(div).style.visibility='hidden';document.getElementById(div).style.display='none';document.getElementById(imagediv).addEventListener('click',showchat);document.getElementById('livchat_close').addEventListener('click',hidechat);document.getElementById('livchat_close').innerHTML='<font color="'+allText.headercolor+'">X</font>'}}else{if(allText.headercolor==''||allText.headercolor=='null'){allText.headercolor="FFFFFF"}
if(document.getElementById('chat_window').style.display=='none'){setTimeout(function(){var div=alldivs[0];document.getElementById(div).style.visibility='visible';document.getElementById(div).style.display='block';document.getElementById('livchat_close').innerHTML='<font color="'+allText.headercolor+'">+</font>';document.getElementById('livchat_close').addEventListener('click',minmaxchat);if(allText.av=='yes'){if(allText.type=='Video'){if(allText.videoPosition!='')setvideoPosition()}}},3000)}else{setTimeout(function(){var div=alldivs[0];document.getElementById(div).style.visibility='visible';document.getElementById(div).style.display='block';document.getElementById('livchat_close').innerHTML='<font color="'+allText.headercolor+'">-</font>';document.getElementById('livchat_close').addEventListener('click',minmaxchat);if(allText.av=='yes'){if(allText.type=='Video'){if(allText.videoPosition!='')setvideoPosition()}}},3000)}}
if(allText.waitingtime!=''&&allText.alertanimation!=''&&allText.alertduration!=''){var div=alldivs[0];document.getElementById(div).addEventListener('mousemove',checkmouseonpopupfn);setTimeout(function(){checkuseractivity()},allText.waitingtime)}}}}}}}
function stopAnimation(){document.cookie="startstopAnimation=1; path=/"}
function startAnimation(){document.cookie="startstopAnimation=0; path=/"}
function ls_chatstarted(){document.cookie="checkmouseonpopup=1; path=/";removealert()}
function checkmouseonpopupfn(){removealert()}
function getStartStopAnimation(startstopAnimation){var name3=startstopAnimation+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name3)==0){return c.substring(name3.length,c.length)}}
return""}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}
return""}
function getMinMaxCookie(minmaxstate){var name1=minmaxstate+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name1)==0){return c.substring(name1.length,c.length)}}
return""}
function getMinMaxButtonCookie(minmaxButtonstate){var name2=minmaxButtonstate+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name2)==0){return c.substring(name2.length,c.length)}}
return""}
function getVisitorCookie(cv_cookie){var name3=cv_cookie+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name3)==0){return c.substring(name3.length,c.length)}}
return""}
function checkuseractivity(){startstopAnimation=getStartStopAnimation(cssAnimation);checkmouseonpopup=getCookie(cname);if(checkmouseonpopup==0&&startstopAnimation==0){var div=alldivs[0];if(allText.buttonpath!=''){if(document.getElementById(div).style.display=='block')document.getElementById(div).style.animation=allText.alertanimation+' 3s infinite';else{var imagediv=alldivs[4];if(allText.animation!='')document.getElementById(imagediv).style.animation=allText.animation+' 3s infinite';else document.getElementById(imagediv).style.animation=allText.alertanimation+' 3s infinite'}}else if(startstopAnimation==1){setTimeout(function(){removealert()},allText.alertduration)}else{document.getElementById(div).style.animation=allText.alertanimation+' 3s infinite'}
setTimeout(function(){removealert()},allText.alertduration)}else setTimeout(function(){checkuseractivity()},allText.waitingtime)}
function removealert(){var div=alldivs[0];if(allText.buttonpath!=''){if(document.getElementById(div).style.display=='block')document.getElementById(div).style.animation='';else{var imagediv=alldivs[4];if(allText.animation!='')document.getElementById(imagediv).style.animation='';else document.getElementById(imagediv).style.animation=''}}else{document.getElementById(div).style.animation=''}
if(checkmouseonpopup==0)setTimeout(function(){checkuseractivity()},allText.waitingtime)}
function showchat(){document.cookie="minmaxButtonstate=0; path=/";var div=alldivs[0];document.getElementById(div).style.opacity=1;document.getElementById(div).style.visibility='visible';document.getElementById(div).style.display='block';document.getElementById(div).style.animation='slideInUp 3s infinite';var imagediv=alldivs[4];document.getElementById(imagediv).style.display='none'}
function hidechat(){document.cookie="minmaxButtonstate=1; path=/";var div=alldivs[0];document.getElementById(div).style.opacity=0;document.getElementById(div).style.visibility='hidden';document.getElementById(div).style.display='none';document.getElementById(div).style.animation='slideOutDown 3s infinite';var imagediv=alldivs[4];document.getElementById(imagediv).style.display='block';document.getElementById(imagediv).style.animation=allText.animation+' 3s infinite';setTimeout(function(){removeanimation()},3000)}
function minmaxchat(){if(allText.cmc=='yes'){if(minmaxstate==0){document.cookie="minmaxstate=1; path=/"}else{document.cookie="minmaxstate=0; path=/"}}
if(document.getElementById('chat_window').style.display=='none'){document.getElementById('chat_window').style.display='block';document.getElementById('livchat_close').innerHTML='<font color="'+allText.headercolor+'">-</font>'}else{document.getElementById('livchat_close').innerHTML='<font color="'+allText.headercolor+'">+</font>';document.getElementById('chat_window').style.display='none'}
if(allText.av=='yes'){if(allText.type=='Video'){if(allText.videoPosition!='')setvideoPosition()}}}
function removeanimation(){var imagediv=alldivs[4];document.getElementById(imagediv).style.animation=''}
function setvideoPosition(){if(allText.videoPosition!=''&&window.innerWidth>500){document.getElementById('html5-lightbox-box').style.margin='10px';var cssstyle='.topleft{left:0 !important; top:0 !important;}.topright{right:0 !important; top:0 !important;}.bottomleft{left:0 !important; bottom:0 !important;}.bottomright{right:0 !important; bottom:0 !important;}.center{left:35% !important; top:25% !important;}#html5box-html5-lightbox{width:'+(parseInt(allText.videoWidth)+50)+'px;height:'+(parseInt(allText.videoHeight)+30)+'px;}.abovechat{right:0 !important; bottom:'+document.getElementById('livprop_popup1').clientHeight+'px !important;}';if(document.getElementById('livprop_video_pos'))document.getElementById('livprop_video_pos').remove();var style=document.createElement('style');style.type='text/css';style.id='livprop_video_pos';if(style.styleSheet){style.styleSheet.cssText=cssstyle}else{style.appendChild(document.createTextNode(cssstyle))}
document.body.appendChild(style);var cssid=document.getElementById('html5box-html5-lightbox');cssid.style.left='';switch(allText.videoPosition){case 'topleft':cssid.className='topleft';break;case 'topright':cssid.className='topright';break;case 'bottomleft':cssid.className='bottomleft';break;case 'bottomright':cssid.className='bottomright';break;case 'center':cssid.className='center';break;case 'abovechat':cssid.className='abovechat';break}}else if(window.innerWidth<=500){document.getElementById('html5-lightbox-box').style.margin='10px';var cssstyle='.center{left:5% !important; top:20% !important;}';if(document.getElementById('livprop_video_pos'))document.getElementById('livprop_video_pos').remove();var style=document.createElement('style');style.type='text/css';style.id='livprop_video_pos';if(style.styleSheet){style.styleSheet.cssText=cssstyle}else{style.appendChild(document.createTextNode(cssstyle))}
document.body.appendChild(style);var cssid=document.getElementById('html5box-html5-lightbox');cssid.style.left='';switch('center'){case 'center':cssid.className='center';break}}}