//Print all numbers between -10 and 19

console.log("Print all numbers between -10 and 19");

var i=-10;

while(i <= 19){
	console.log(i);
	i ++;
}

//Print all even numbers between 10 and 40

console.log("Print all even numbers between 10 and 40");

var j=10;

while(j <= 40){
	console.log(j);
	j = j + 2;
}

//Print all odd numbers between 300 and 333

console.log("Print all odd numbers between 300 and 333");

var k=301;

while(k <= 333){
	console.log(k);
	k = k + 2;
}

//Print all numbers divisible by 5 and 3 between 5 and 50

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

var a=5;

while(a <= 50){
	if(a % 5 === 0 && a % 3 ===0){
		console.log(a);
	}
	a++;
}