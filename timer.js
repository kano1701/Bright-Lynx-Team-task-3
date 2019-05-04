var counterMin = -1;

function Min()
{
	counterMin++;
	document.getElementById("min").innerHTML = counterMin;
	setTimeout("Min()", 59000);
}

var counterSec = 0;

function Sec()
{
	if(counterSec >= 59)
		counterSec = 0;
	else
		counterSec++;
	document.getElementById("sec").innerHTML = counterSec;
	setTimeout("Sec()", 1000);
}

var counterMilliSec = 0;

function milliSec()
{	
	if(counterMilliSec > 999)
		counterMilliSec = 20;
	else
		counterMilliSec+=9;

	document.getElementById("millisec").innerHTML = counterMilliSec;
	setTimeout("milliSec()", 7);
}

function timer()
{
	Min();
	Sec();
	milliSec();
}