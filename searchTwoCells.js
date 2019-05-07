var found = [];
var prePoint = 'White';

function pairSearch(id, arrColor, countPoint){
	console.log("arrColor[id] "+arrColor[id]);
	console.log("found "+found);
	console.log("countPoint "+countPoint);

	if(countPoint % 2 == 0 || countPoint == 0){
		prePoint = arrColor[id];
		found.push(id);
		countPoint++;
	}
	else if(countPoint % 2 != 0){
		if(prePoint == arrColor[id]){
			found.push(id);
			countPoint++;
		}
		else if(prePoint != arrColor[id]){
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