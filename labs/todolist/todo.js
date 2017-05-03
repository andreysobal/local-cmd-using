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
				var taskName = $("#task").val();
				if (taskName === "") {
					return false;
				}
				var taskHTML = '<li><span class="done">%</span>';
				taskHTML += '<span class="delete">x</span>';
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
		}
	});
}); // end ready