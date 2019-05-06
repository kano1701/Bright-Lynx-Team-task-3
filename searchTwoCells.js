var found = [];
var prePoint = 'White';
var countPoint = 0;

function pairSearch(id, arrColor){
	console.log("pairSearch");
	console.log("arrColor[id] "+arrColor[id]);

	if(countPoint % 2 == 0 || countPoint == 0){
		console.log("countPoint % 2 == 0 || countPoint == 0");
		prePoint = arrColor[id];
		point = document.getElementById(id);
		point.style.background = prePoint;
		countPoint++;
	}
	else if(countPoint % 2 != 0){
		console.log("countPoint % 2 != 0");
		if(prePoint == arrColor[id]){
			console.log("prePoint == arrColor[id]");
			point = document.getElementById(id);
			point.style.background = prePoint;
			found.push(id);
			countPoint++;
		}
		else if(prePoint != arrColor[id]){
			console.log("prePoint != arrColor[id]");
			countPoint == 0;
			for(var i=0;i<found.length;i++){
				point = document.getElementById(found[i]);
				point.style.background = 'white';
			}
		}	
	}
}