

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
		
		$( '#experience div' ).click(function(){toggle_section( '#experience div' )});
		$( '#music div' ).click(function(){toggle_section( '#music div' )});
		$( '#tickets div' ).click(function(){toggle_section( '#tickets div' )});
 
	}
});

