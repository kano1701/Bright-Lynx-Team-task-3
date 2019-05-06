var arr = [];

function randomColor()
{
	arr = [];
	
	for(var i=1; i<=16; i++)
	{
		generatorColor();
	}
	
	for(var j=0; j<16; j++)
	{
		arr[j] = colorant(arr[j]);
	}

	return arr;
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
	{
		arr.push(color);
	}
}

function colorant(color)
{
	switch(color)
	{
		case 1:
			color = 'Lime';
			break;
		case 2:
			color =  'Cyan';
			break;
		case 3:
			color =  'Red';
			break;
		case 4:
			color =  'DeepPink';
			break;
		case 5:
			color =  'OrangeRed';
			break;
		case 6:
			color =  'Gold';
			break;
		case 7:
			color =  'Chocolate';
			break;
		case 8:
			color =  'MediumBlue';
			break;
	}
	return color;
}