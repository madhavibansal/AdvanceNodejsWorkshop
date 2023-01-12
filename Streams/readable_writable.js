const { Writable } = require('stream');

class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
}
const myWritable = new MyWritable();
myWritable.write('This is a writable stream');
myWritable.end();


const { Readable } = require('stream');

class MyReadable extends Readable {
  constructor(options) {
    super(options);
    this.data = ['This', 'is', 'a', 'readable', 'stream'];
  }

  _read() {
    if (this.data.length) {
      this.push(this.data.shift());
    } else {
      this.push(null);
    }
  }
}

const myReadable = new MyReadable();
myReadable.on('data', chunk => {
  console.log(chunk.toString());
});
