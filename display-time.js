// This Script file cannot be placed in head section, 
// because it requires that #currentTime exist before it. 
// So make sure that you place this script file below button element.
// Also, the Date() function inside displayTime function has to be new or it won't work.

// DC: 6/10/2018; LU: 6/10/2018

var myTime = setInterval(displayTime, 1000);

function displayTime() {
	dt = new Date();
	str = dt.toLocaleTimeString();
	document.getElementById("currentTime").innerHTML=str;	
}

function stopTimer() {
    clearInterval(myTime);
}
