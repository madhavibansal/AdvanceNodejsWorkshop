const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', (arg1, arg2) => {
  console.log(`an event occurred! with arguments ${arg1} and ${arg2}`);
});

myEmitter.emit('event', 'arg1', 'arg2');
