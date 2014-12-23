$(document).ready(function(){

	// clicked the post button
	$('#feedback .btn').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).appendTo('.posts');
		$('.status-box').val('');
		$('.counter').text('144');
		$('#feedback .btn').addClass('disabled'); 
  	});

	// started typing in the status box
	$('.status-box').keyup(function() {
		var postLength = $(this).val().length;
		var charactersLeft = 144 - postLength;
		$('.counter').text(charactersLeft);

		if(charactersLeft < 0 || charactersLeft == 144) {
			$('#feedback .btn').addClass('disabled'); 
		} else {
			$('#feedback .btn').removeClass('disabled');
		}
	});

	$('#freedback .btn').addClass('disabled');

});