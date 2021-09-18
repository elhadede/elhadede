$(document).ready(function(){
	$(".dropdown").click(function() {
		var menu = $(this).get(0).style;
		console.log(menu.getPropertyValue('--cshow'));
		if(menu.getPropertyValue('--cshow') != "block"){
			menu.setProperty("--cshow", "block");
		}else{
			menu.setProperty("--cshow", "none");
		}
	});
});
