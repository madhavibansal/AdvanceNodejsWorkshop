const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('first listener');
});

myEmitter.on('event', () => {
  console.log('second listener');
});

myEmitter.emit('event');
