const url = require('url');

const parsedURL = url.parse('https://jsonplaceholder.typicode.com/posts', true);
console.log(parsedURL.pathname); 
console.log(parsedURL.query);
