//Flag
flag = true;

//The todo list
var list = [];

//Process the input

while(flag === true){
	
	//Take input
	option = prompt("What do you want to do with your todo list?");

	if(option === "new")
		list.push(prompt("Enter your Todo"));

	else if(option === "list")
		listTodos();

	else if(option === "del")
		deleteTodo();

	else if(option === "quit")
		flag = false;

	else
		console.log("Invalid Input!");

}

console.log("OK. YOU QUIT THE APP!");

function listTodos(){
	console.log("**********");
	
	//I didn't watch the code along and thought forEach() can take only one place holder nd cus I'm Kewl AF
	/*
		list.forEach(function(data){
		console.log(list.indexOf(data)+" : "+ data);
	});*/
	
	//Better and more A E S T H E I C
	list.forEach(function(data, i){
		console.log(i +" : "+ data);
	});
	console.log("**********");
}

function deleteTodo(){
	var i = prompt("Enter the index of the Todo to be removed");
		list.splice(i,1);
}