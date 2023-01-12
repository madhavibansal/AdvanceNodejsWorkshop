const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log("Reading a File---------->",data);
} catch (err) {
  console.error(err);
}

const data = 'Example data to write to a file';
fs.writeFile('example.txt', data, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
  });