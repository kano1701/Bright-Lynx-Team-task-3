var found = [];
var prePoint = 'White';

function pairSearch(id, arrColor, countPoint){
	console.log("pairSearch");
	console.log("arrColor[id] "+arrColor[id]);
	console.log("found "+found);
	console.log("countPoint "+countPoint);

	var point = document.getElementById(id);
	point.style.background = arrColor[id];


	if(countPoint % 2 == 0 || countPoint == 0){
		console.log("countPoint % 2 == 0 || countPoint == 0");
		prePoint = arrColor[id];
		found.push(id);
		countPoint++;
	}
	else if(countPoint % 2 != 0){
		console.log("countPoint % 2 != 0");
		if(prePoint == arrColor[id]){
			console.log("prePoint == arrColor[id]");
			found.push(id);
			countPoint++;
		}
		else if(prePoint != arrColor[id]){
			console.log("prePoint != arrColor[id]");
			setTimeout(miss, 500);
		}	
	}
	return countPoint;
}

function miss(){
	countPoint = 0;
	found = [];
	for(var i=0; i<16; i++){
		point = document.getElementById(i);
		point.style.background = 'white';
	}
}