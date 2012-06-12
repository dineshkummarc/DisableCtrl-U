var isnn,isie
if(navigator.appName=='Microsoft Internet Explorer') //check the browser
{  isie=true }

if(navigator.appName=='Netscape')
{  isnn=true }

function key(k)   
{
	if(isie) {
		if(event.keyCode==17 || event.keyCode==18 || event.keyCode==93) {
			return false;
		 } 
	}

	if(isnn){
		return false; }
}

if (document.layers) window.captureEvents(Event.KEYPRESS);  
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (document.layers) window.captureEvents(Event.MOUSEUP);
document.onkeydown=key;  
document.onmousedown=right;
document.onmouseup=right;
window.document.layers=right;