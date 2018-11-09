var oddArray = [];
var aElement;
var getOddnumbers = function(array, callBack){
	if(array.length > 0){
		aElement = array[array.length - 1];
		if(aElement % 2 != 0){
			oddArray.push(aElement);
		}
		array.pop()
		getOddnumbers(array, callBack);
	}else{
		callBack(oddArray);
	}
}

var callBack = function(oddArray) {
	console.log(oddArray);	
}

getOddnumbers(JSON.parse(process.argv[2]), callBack);