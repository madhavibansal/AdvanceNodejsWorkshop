const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', res => {
  res.setEncoding('utf8');
  let body = '';
  res.on('data', data => {
    body += data;
  });
  res.on('end', () => {
    console.log(JSON.parse(body));
  });
});