// JavaScript Document
$(function() {
	var $h4 = $('h4');
	$('ul').hide();
	$h4.append('<a class="show">show</a>');
	
	$h4.on('click', function() {
		$h4.next()
		.fadeIn(500)
		.children('.jQuery')
		.addClass('complete');
	$h4.find('a').fadeOut();
	});
});