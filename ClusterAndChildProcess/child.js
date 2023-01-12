process.on('message', message => {
    console.log(`Received message from parent: ${message}`);
  
    process.send('Hello parent!');
  });
  