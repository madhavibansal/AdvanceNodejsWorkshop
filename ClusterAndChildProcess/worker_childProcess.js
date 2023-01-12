const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const url = require('url');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    res.writeHead(200);
    switch(parsedUrl.pathname) {
      case '/':
        res.end(`Worker ${cluster.worker.id} handled the request`);
        break;
      case '/hello':
        res.end(`Worker ${cluster.worker.id} says Hello!`);
        break;
      case '/submit':
        res.end(`Worker ${cluster.worker.id} handled the submission`);
        break;
      default:
        res.end(`Worker ${cluster.worker.id} says 404 Not Found`);
    }
  }).listen(8000);

  console.log(`Worker ${cluster.worker.id} started`);
}


// run http://localhost:8000 in browser and get diffrent response in different path Like- http://localhost:8000/submit , http://localhost:8000/hello
