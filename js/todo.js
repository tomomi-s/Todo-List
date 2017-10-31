$(document).ready(function() {
    $(".fa-plus").on("click", function(){
	$("#input").slideToggle();
	});

	$("input").keypress(function(event){
		// var newTodos = [newList];
		if(event.which === 13){
			var newTodo = $("input").val();
			var newList = '<li class="list"><span class="trashIcon"><i class="fa fa-trash" aria-hidden="true"></i></span><div class="todo">' + newTodo + '</div></li>';
			$("#lists").append(newList);
			$('input').val('');
		}

		$("#lists li:odd").addClass('todo-odd');
		$("#lists li:even").addClass('todo-even');
	});

	// $(document).on("mouseenter", ".list", function(){
	// 	// $(".trashIcon", this).show();
	// 	$(".trashIcon", this).addClass("showTrashIcon");
	// 	// $(".trashIcon", this).animate({ left: '0' }, 500); 
	// });

	// $(document).on("mouseleave", ".list", function(){
	// 	$(".trashIcon", this).removeClass("showTrashIcon");
	// 	// $(".trashIcon", this).animate({ left: '-32px' }, 500); 
	// 	// $(".trashIcon", this).hide();
	// });

	$(document).on("click", ".trashIcon", function(){
		$(this).parent().remove();
		$("#lists li:odd").removeClass('todo-even').addClass('todo-odd');
		$("#lists li:even").removeClass('todo-odd').addClass('todo-even');
	});

	$(document).on("click", ".todo", function(){
		$(this).toggleClass("textBorder");
	});

});