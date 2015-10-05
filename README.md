Read ALCE
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Reads the entire contents of an [ALCE](https://github.com/walmartlabs/ALCE) file.


## Installation

``` bash
$ npm install utils-fs-read-alce
```


## Usage

``` javascript
var read = require( 'utils-fs-read-alce' );
```

#### read( path, [ options,] clbk )

Reads the entire contents of an [ALCE](https://github.com/walmartlabs/ALCE) file.

``` javascript
read( '/path/to/data.alce', onData );

function onData( error, data ) {
	if ( error ) {
		console.error( error );
	} else {
		console.log( data );
	}
}
```

The `function` accepts the same options as [`fs.readFile()`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback), but `encoding` is always set to `utf8`. In addition, the `function` supports [`ALCE#parse`](https://github.com/kgryte/utils-alce-parse) options.

``` javascript
read( '/path/to/data.alce', {'meta':false}, onData );

function onData( error, data ) {
	if ( error ) {
		console.error( error );
	} else {
		console.log( data );
	}
}
```


#### read.sync( path[, options] )

Synchronously reads the contents of an entire [ALCE](https://github.com/walmartlabs/ALCE) file.

``` javascript
var out = read.sync( '/path/to/data.alce' );
if ( out instanceof Error ) {
	throw out;
}
console.log( out );
```

The `function` accepts the same options as [`fs.readFileSync()`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options) and supports [`ALCE#parse`](https://github.com/kgryte/utils-alce-parse) options.



## Examples

``` javascript
var path = require( 'path' ),
	read = require( 'utils-fs-read-alce' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-fs-read-alce.svg
[npm-url]: https://npmjs.org/package/utils-fs-read-alce

[travis-image]: http://img.shields.io/travis/kgryte/utils-fs-read-alce/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-fs-read-alce

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-fs-read-alce/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-fs-read-alce?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-fs-read-alce.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-fs-read-alce

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-fs-read-alce.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-fs-read-alce

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-fs-read-alce.svg
[github-issues-url]: https://github.com/kgryte/utils-fs-read-alce/issues
