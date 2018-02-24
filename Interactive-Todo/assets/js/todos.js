//Checking off specific todos
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//Deleting todos
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Recording the text box
		var todoText = $(this).val();
		//Clears the text box
		$(this).val("");
		//Adding the new todo
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+ todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
})