//Prints elements of array in reverse order
function printReverse(arr){

	for(var i= arr.length-1; i >=0; i--){
		console.log(arr[i]);
	}
}


//Returns true if all elements in the array are idetical
function isUniform(arr){
	
	var first= arr[0];
	
	for(var i= 1; i < arr.length; i++){
			if(arr[i] != first)
				return false;
	}
	return true;
}

//Returns sum of all numbers in the array

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(data){
		sum=sum+data;
	});
	return sum;
}

//Returns maximum number in the array
function max(arr){
	var max=0;
	
	// Also works
	/*for(var i=0; i < arr.length-1; i++){
		if(arr[i+1] > arr[i])
			max=arr[i+1];
	}*/

	arr.forEach(function(data){
		if(data > max)
			max = data;
	});

	return max;
}