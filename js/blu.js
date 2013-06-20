

$(function() {

	bd_width = $( 'body' ).width();

    if( bd_width <= 330 )
    {
		function toggle_section( sel )
		{
		    $( sel + ' div' ).children().each( function() {
				if( $(this).attr( 'class' ) !== 'title' ) {
					$(this).toggle();
				}
			});
			if( $( sel ).hasClass('fld') || $( sel ).hasClass('ufld') ) {
			    $( sel ).toggleClass( 'fld' );
			    $( sel ).toggleClass( 'ufld' );
   			}
			else
			    $( sel ).addClass('fld' );
		}

		toggle_section( '#experience' );
		toggle_section( '#music' );
		toggle_section( '#tickets' );
    	toggle_section( '#vip' );
    	toggle_section( '#adifference' );
    	toggle_section( '#bluisgreen' );
		
		$( '#experience' ).click(function(){toggle_section( '#experience' )});
		$( '#music' ).click(function(){toggle_section( '#music' )});
		$( '#tickets' ).click(function(){toggle_section( '#tickets' )});
    	$( '#vip' ).click(function(){toggle_section( '#vip ' )});
    	$( '#adifference' ).click(function(){toggle_section( '#adifference' )});
    	$( '#bluisgreen' ).click(function(){toggle_section( '#bluisgreen' )});
 
	}
});

$(function () {

      $("#slider").responsiveSlides({
        maxwidth: 800,
        speed: 800
      });

    });