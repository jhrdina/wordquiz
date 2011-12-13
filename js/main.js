$(document).ready(function(){
	
	// Main menu
	$("div#menu a").click(function(){
		$("div#menu a").css("background-image","none");
		$(this).css("background-image","url(img/menu-button.png)");
	});
	
	// Open dialog
	$('#open_dialog').dialog({
		autoOpen: false,
		width: 429,
		buttons: {
			"Otevřít": function() { 
				$(this).dialog("close"); 
			}, 
			"Zrušit": function() { 
				$(this).dialog("close"); 
			} 
		}
	});
	
	// Open dialog button
	$('#open_dialog_button').click(function(){
		$('#open_dialog').dialog('open');
		return false;
	});
	
	// Save dialog
	$('#save_dialog').dialog({
		autoOpen: false,
		width: 429,
		buttons: {
			"Hotovo": function() { 
				$(this).dialog("close"); 
			}, 
			"Zrušit": function() { 
				$(this).dialog("close"); 
			} 
		}
	});
	
	// Save dialog button
	$('#save_dialog_button').click(function(){
		$('#save_dialog').dialog('open');
		return false;
	});
});
