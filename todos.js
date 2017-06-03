// check off to-dolist by clicking
$("ul").on("click","li",function  () {
//id statement to toggle it between strike through and the normal one
$(this).toggleClass("completed");
});

// Click on X to delete the todo 
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(450,function()
	{
		$(this).remove();
	})
	event.stopPropagation() ;
});


//input for the todo

$("input[type='text'").keypress(function(event)

{
	if(event.which === 13)
	{
		// Grabbong Newtodo
		var TodoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-scissors' aria-hidden='true'></i></span>"+TodoText +"</li>");
	}


	
});
