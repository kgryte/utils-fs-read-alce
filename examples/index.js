'use strict';

var path = require( 'path' ),
	read = require( './../lib' );


var file = path.join( __dirname, 'config.alce' );

// Sync:
var data = read.sync( file, 'utf8' );
// returns <object>

console.log( data instanceof Error );
// returns false

data = read.sync( 'beepboop', {
	'encoding': 'utf8'
});
// returns <error>

console.log( data instanceof Error );
// returns true


// Async:
read( file, onRead );
read( 'beepboop', onRead );

function onRead( error, config ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'ALCE file does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( 'Port: %s.', config.server.port );
	}
}



