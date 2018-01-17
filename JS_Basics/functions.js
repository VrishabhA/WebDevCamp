//To check if a number is even

function isEven(a){
	return num % 2 === 0;
}

//To find the factorial of a number

function factorial(b){
	var answer = b;
	
	//If input is 0
	if(answer === 0) 
		return 1;
	
	//if input is negative
	if(answer < 0)
		return "No negative input please!";
	
	//If input is greater than zero
	for(var i = 1; i < b; i++)
		answer = answer * i;
		
	return answer;
}

//To convert kebab input to Snake output

function kebabToSnake(c){
	var snake = c.replace(/-/g, "_");

	return snake;
}