const fs = require('fs');
const myWritable = fs.createWriteStream('output.txt');
const myReadable = fs.createReadStream('example.txt');

myReadable.pipe(myWritable);
