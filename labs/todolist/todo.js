$(document).ready(function(e) {
	$("#add-todo").button({
		icons:{
			primary:"ui-icon-circle-plus"
		}
	});
	$("#new-todo").dialog();
}); // end ready