( function( $, undefined ) {

$.mobile.ns = "nstest-";

test( "Radio groups are correctly identified", function() {
	var theDocument = $( document );
		groups = {
			"#radio\\:1": "#radio\\:1",
			"#radio\\:2": "#radio\\:2,#radio\\:3,#radio\\:6",
			"#radio\\:3": "#radio\\:2,#radio\\:3,#radio\\:6",
			"#radio\\:6": "#radio\\:2,#radio\\:3,#radio\\:6",
			"#radio\\:4": "#radio\\:4,#radio\\:7",
			"#radio\\:7": "#radio\\:4,#radio\\:7",
			"#radio\\:5": "#radio\\:5",
			"#radio\\:8": "#radio\\:8"
		};

	$.each( groups, function( index, value ) {
		var result,
			radio = $( index ),
			group = $( value );

		result = $.mobile.checkboxradio.prototype._getInputSet.call({
			element: radio,
			inputtype: "radio",
			document: theDocument
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
