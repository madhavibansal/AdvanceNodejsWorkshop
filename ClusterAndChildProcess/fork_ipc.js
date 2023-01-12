const { fork } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const child = fork('./child.js');

child.on('message', message => {
  console.log(`Received message from child: ${message}`);
});

rl.question('Enter a message to send to the child: ', message => {
  child.send(message);
  rl.close();
});
