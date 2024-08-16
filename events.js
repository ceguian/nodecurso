/*
Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

    var fs = require('fs');
    var rs = fs.createReadStream('./demofile.txt');
    rs.on('open', function () {
    console.log('The file is open');
    }); 

Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log("¡¡Escucho un grito!!");
}

eventEmitter.on('grito', myEventHandler);

eventEmitter.emit('grito');
