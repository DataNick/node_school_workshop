var fs = require( 'fs' );

var text = fs.readFileSync('helloworld.txt', 'utf-8');
console.log(text);

// <Buffer 43 68 65 63 6b 69 6e 67 20 74 68 65 20 66 69 6c 65 73 79 73 74 65 6d 20 6f 70 65 72 61 74 69 6f 6e 20 69 6e 20 6e 6f 64 65 6a 73> representation of the file
//Buffer object in client and server side; buffer and streams; utf-8 is how to interpret the file
//reading from the filesystem - gulp and grunt do this
//can't do this on client-side
//manipulate and change files

