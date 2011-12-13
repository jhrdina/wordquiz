$(document).ready(function(){
	editor();
	
	// Main menu
	$("div#menu a").click(function(){
		switch($(this).attr("id"))
		{
		case "editor-button":
			editor();
			break;
		case "cards-button":
			cards();
			break;
		case "qanda-button":
			qanda();
			break;
		}
	});
});

function init_dialogs() {
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
}
function clear_page() {
	//alert("Mažu");
	//$(".ui-dialog").empty();
	$(".ui-dialog").remove();
	$("#open_dialog,#save_dialog").remove();
	$("div#page").empty();
}
function editor() {
	clear_page();
	$("div#menu a").css("background-image","none");
	$("#editor-button").css("background-image","url(img/menu-button.png)");
	//alert("Otevírám");
	$("div#page").css("background-image","url(img/toolbar-bg.png)");
	$("div#page").load('editor.inc.html', function(){
	
		//alert("inicializuju");
		init_dialogs();
	});
	//setTimeout(init_dialogs, 50);
}

function cards() {
	clear_page();
	$("div#menu a").css("background-image","none");
	$("#cards-button").css("background-image","url(img/menu-button.png)");
	
	$("div#page").css("background-image","none");
	$("div#page").load('cards.inc.html');
}

function qanda() {
	clear_page();
	$("div#menu a").css("background-image","none");
	$("#qanda-button").css("background-image","url(img/menu-button.png)");
	$("div#page").css("background-image","none");
	$("div#page").load('qanda.inc.html');
}
