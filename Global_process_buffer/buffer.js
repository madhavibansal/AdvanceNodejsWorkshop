const buffer = Buffer.from("Hello world")
console.log(buffer);

//Converting a Buffer to a string
const string = buffer.toString();
console.log(string);

//Copying a Buffer
const buffer2 = Buffer.from(buffer)
console.log(buffer2);

//Comparing Buffers
const buffer3 = Buffer.from('Hello, world')
console.log(buffer.equals(buffer2));
console.log(buffer.equals(buffer3));