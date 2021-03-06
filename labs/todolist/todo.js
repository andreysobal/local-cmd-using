$(document).ready(function(e) {
	
	$("#add-todo").button({
		icons:{
			primary:"ui-icon-circle-plus"
		}
	}).click(function(){
		$("#new-todo").dialog("open");
	});
	
	$("#new-todo").dialog({
		modal:true,
		autoOpen:false,
		buttons:{
			"Add" : function(){
				var taskName = $("#newtask").val();
				if (taskName === "") {
					return false;
				}
				var taskHTML = '<li><span class="done">%</span>';
				taskHTML += '<span class="delete">x</span>';
				taskHTML += '<span class="fix">e</span>';
				taskHTML += '<span class="task"></span></li>';
				var $newTask = $(taskHTML);
				$newTask.find('.task').text(taskName);
				$newTask.hide();
				$("#todo-list").prepend($newTask);
				$newTask.show('clip', 250).effect('highlight', 1000);
				$(this).dialog("close");
			},
			"Cancel" : function(){
				$(this).dialog("close");
			}
		},
		close: function (){
			$("#new-todo input").val("");
		}
	});
	
	$("#todo-list").on('click', '.fix', function(){
		var $taskItem = $(this).parent("li");
		$taskItem.addClass("fixing");
		$("#fix-todo").dialog("open");
	});
	
	$("#fix-todo").dialog({
		modal:true,
		autoOpen:false,
		open:function (){
			var addText = $(".fixing .task").text();
			$("#fix-todo input").val(addText);
		},
		buttons:{
			"Correct" : function(){
				var taskName = $("#fixtask").val();
				if (taskName === "") {
					return false;
				}
				var $newTask = $(".fixing");
				$newTask.find('.task').text(taskName);
				$newTask.hide();
				$("#todo-list").prepend($newTask);
				$newTask.show('clip', 250).effect('highlight', 1000);
				$(this).dialog("close");
				$newTask.removeClass("fixing");
			},
			"Cancel" : function(){
				$(this).dialog("close");
				$(".fixing").removeClass("fixing");
			}
		},
		close: function (){
			$("#fix-todo input").val("");
		}
	});
	
	$("#todo-list").on('click', '.done', function(){
		var $taskItem = $(this).parent("li");
		$taskItem.slideUp(250, function(){
			var $this = $(this);
			$this.detach();
			$("#completed-list").prepend($this);
			$this.slideDown();
		});
	});
	
	$(".sortlist").sortable({
		connectWith:'.sortlist',
		cursor: 'pointer',
		placeholder: 'ui-state-highlight',
		cancel: '.delete, .done'
	});
	
	$(".sortlist").on('click', '.delete', function(){
		$(this).parent("li").effect('puff', function(){
			$(this).remove();
		});
	});
}); // end ready