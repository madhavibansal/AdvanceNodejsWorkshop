const { Transform } = require('stream');
const fs = require('fs');


//convert output.txt data into uppercase 

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const myReadable = fs.createReadStream('example.txt');
const myTransform = new MyTransform();
const myWritable = fs.createWriteStream('output.txt');

myReadable.pipe(myTransform).pipe(myWritable);
