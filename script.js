var arr = [];

function randomColor()
{
	arr = [];
	
	for(var i=1; i<=16; i++)
	{
		generatorColor();
	}
	alert(arr);
}

function randomInteger(min, max) 
{
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function generatorColor()
{	
	var color = randomInteger(1,8);
	var count = 0;
	for(var j=0; j<arr.length; j++)
		if(arr[j]==color)
			count++;
	if(count==2)
		generatorColor();
	else
		arr.push(color);
}