( function( $, undefined ) {

$.mobile.ns = "nstest-";

test( "Radio groups are correctly identified", function() {
	var groups = {
		"#radio1": "#radio1",
		"#radio2": "#radio2,#radio3,#radio6",
		"#radio3": "#radio2,#radio3,#radio6",
		"#radio6": "#radio2,#radio3,#radio6",
		"#radio4": "#radio4,#radio7",
		"#radio7": "#radio4,#radio7",
		"#radio5": "#radio5",
		"#radio8": "#radio8"
	};

	$.each( groups, function( index, value ) {
		var result,
			radio = $( index ),
			group = $( value );

		result = $.mobile.checkboxradio.prototype._getInputSet.call({
			element: radio,
			inputtype: "radio",
			document: $( document )
		});
		deepEqual( group.length, result.length,
			index + ": length of group is correct" );
		group.each( function() {
			deepEqual( result.filter( this ).length, 1,
				index + ": " + $( this ).attr( "id" ) +
					" is correctly present in the result" );
		});
	});
});

})( jQuery );
