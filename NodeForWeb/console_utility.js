console.log('This is a log message'); // Output: This is a log message
console.info('This is an info message'); // Output: This is an info message
console.error('This is an error message'); // Output: This is an error message
console.warn('This is a warning message'); // Output: This is a warning message

const util = require('util');
const fs = require('fs');

const obj = {
  name: 'John',
  age: 30
};

console.log(util.inspect(obj));

const readFile = util.promisify(fs.readFile);

readFile('example.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch

