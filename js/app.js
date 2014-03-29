$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      1100,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});
  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

	$(document).keydown(function(event){
		if ( event.which == 88 ) {
			nyanSample();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.main-rain').css( "background-image", "url('http://www.gifs.net/Animation11/Nature/Rainbows/Rainbow_2.gif')" );
		}
	});

	$(document).keyup(function(event){
		if ( event.which == 88 ) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			// $('.main-rain').css( "background-image", "none" );
		}
	});

function nyanSample () {
	$('#nyan-sample')[0].volume = 0.2;
	$('#nyan-sample')[0].play();
}
