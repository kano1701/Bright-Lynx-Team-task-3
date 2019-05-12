var counterMin = -1;

function Min(status) {
	// функция для генерации минут
	if(status == "start") {
		counterMin++;
		document.getElementById("min").innerHTML = counterMin;
		m = setTimeout("Min('start')", 59000);
	}
	else if(status == "stop")
		return counterMin;
}

var counterSec = 0;

function Sec(status) {
	// функция для генерации секунд
	if(status == "start") {
		if(counterSec >= 59)
			counterSec = 0;
		else
			counterSec++;
		document.getElementById("sec").innerHTML = counterSec;
		s = setTimeout("Sec('start')", 1000);
	}
	else if(status == "stop")
		return counterSec;
}

var counterMilliSec = 0;

function MilliSec(status) {
	// функция для генерации миллисекунд
	if(status == "start") {
		if(counterMilliSec > 999)
			counterMilliSec = 20;
		else
			counterMilliSec+=9;
		document.getElementById("millisec").innerHTML = counterMilliSec;
		ms = setTimeout("MilliSec('start')", 7);
	}
	else if(status == "stop")
		return counterMilliSec;
}

function timer(status) {
	// общая функция вызывающая посчет времени
	if(status == "start") {
		Min(status);
		Sec(status);
		MilliSec(status);
	}
	else if(status == "stop") {
		clearTimeout(s);
		clearTimeout(m);
		clearTimeout(ms);
		var min = Min(status);
		var sec = Sec(status);
		var msec = MilliSec(status);
		return min+":"+sec+":"+msec;
	}
}
