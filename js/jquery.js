// JavaScript Document
$(function() {
	var $h4 = $('h4');
	$('ul').hide();
	$h4.append('<button class="show">Show</button>');
	
	$h4.on('click', function() {
		$h4.next()
		.fadeIn(500)
		.children('.jQuery')
		.addClass('complete');
	$h4.find('a').fadeOut();
	});
});