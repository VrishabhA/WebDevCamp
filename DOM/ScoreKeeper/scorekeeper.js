//Variables
var p1Button= document.getElementById("pOne"); 
var p2Button= document.getElementById("pTwo");
var reset = document.getElementById("reset");
var p1= document.querySelector("#p1Display");
var p2= document.querySelector("#p2Display");
var h2= document.querySelector("h2");
var max = 5;
var changeMax = document.querySelector("input");
var maxDisplay = document.querySelector("h2 span");
var gameOver = false;
var p1Score = 0;
var p2Score = 0;

//Text Box
changeMax.addEventListener("change", function(){
	maxDisplay.textContent = changeMax.value;
	max = Number(changeMax.value);
	clean();
});


//Buttons

//Player 1 Button
p1Button.addEventListener("click", function(){
		p1Score++;
		if(!gameOver)
			p1.textContent = p1Score;
		if(p1Score === max){
			p1.style.color = "green";
			gameOver= true;
		}
});

//Player 2 Button
p2Button.addEventListener("click", function(){
		p2Score++;
		if(!gameOver)
			p2.textContent = p2Score;
		if(p2Score === max){
			p2.style.color = "green";
			gameOver= true;
		}
});

//Reset
reset.addEventListener("click", function(){
	clean();
});

function clean(){
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1.textContent = p2.textContent = 0;
	p2.style.color = p1.style.color = "black";
}