const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
  console.error(`An error occurred: ${err.message}`);
});

myEmitter.emit('error', new Error('example error'));
