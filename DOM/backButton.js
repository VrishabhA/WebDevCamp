var btn = document.querySelector("button");

var isColoured= false;

btn.addEventListener("click", function(){
	if(isColoured)
		document.body.style.background = "none";
	else
		document.body.style.background = "green";

	isColoured = !isColoured;
})

//Could be a lot shorter using CSS but I wanted to play with JS