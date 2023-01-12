const { Readable, Writable } = require('stream');

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

class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
}

const myReadable = new MyReadable();
const myWritable = new MyWritable();
myReadable.pipe(myWritable);
