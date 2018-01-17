//Get age and convert to integer
var age = Number(prompt("Age please"));

//Check if age is negative
if(age < 0){
	console.log("Incorrect age");
}

//Check if age is 21
else if(age === 21){
	console.log("Happy 21st! birthday!");
}

//Check if age is odd
// Y tho
if(age % 2 != 0){
	console.log("your age is odd!");
}

//Check if the age is a perfect square
//Nice to know
if(Number.isInteger(Math.sqrt(age)) && age > 0){
	console.log("perfect square!");
}