

$(function() {

	bd_width = $( 'body' ).width();

    if( bd_width <= 330 )
    {
		function toggle_section( sel )
		{
		    $( sel ).children().each( function() {
				if( $(this).attr( 'class' ) !== 'title' ) {
					$(this).toggle();
				}
			});
		}

		toggle_section( '#experience div' );
		toggle_section( '#music div' );
		toggle_section( '#tickets div' );
    	toggle_section( '#vip div' );
    	toggle_section( '#adifference div' );
    	toggle_section( '#bluisgreen div' );
		
		$( '#experience div' ).click(function(){toggle_section( '#experience div' )});
		$( '#music div' ).click(function(){toggle_section( '#music div' )});
		$( '#tickets div' ).click(function(){toggle_section( '#tickets div' )});
    	$( '#vip div' ).click(function(){toggle_section( '#vip div' )});
    	$( '#adifference div' ).click(function(){toggle_section( '#adifference div' )});
    	$( '#bluisgreen div' ).click(function(){toggle_section( '#bluisgreen div' )});
 
	}
});

