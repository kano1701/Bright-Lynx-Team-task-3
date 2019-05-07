var counterMin = -1;

function Min(status){
	if(status == "start"){
		counterMin++;
		document.getElementById("min").innerHTML = counterMin;
		setTimeout("Min()", 59000);
	}
	else if(status == "stop")
		return document.getElementById("min");
}

var counterSec = 0;

function Sec(status){
	if(status == "start"){
		if(counterSec >= 59)
			counterSec = 0;
		else
			counterSec++;
		document.getElementById("sec").innerHTML = counterSec;
		setTimeout("Sec()", 1000);
	}
	else if(status == "stop")
		return document.getElementById("sec");
}

var counterMilliSec = 0;

function MilliSec(status){
	if(status == "start"){
		if(counterMilliSec > 999)
			counterMilliSec = 20;
		else
			counterMilliSec+=9;
		document.getElementById("millisec").innerHTML = counterMilliSec;
		setTimeout("MilliSec()", 7);
	}
	else if(status == "stop")
		return document.getElementById("millisec");
}

function timer(status){	
	if(status == "start"){
		Min(status);
		Sec(status);
		MilliSec(status);
	}
	else if(status == "stop"){
		var min = Min(status);
		var sec = Sec(status);
		var msec = MilliSec(status);
		return min+":"+sec+":"+msec;
	}
}