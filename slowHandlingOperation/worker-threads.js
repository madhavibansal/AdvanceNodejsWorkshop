const {Worker} = require('worker_threads')
function handleRequest(request) {
    console.log('Handling Request');
    const worker = new Worker('./slow-operation-worker.js')
    console.log(worker);
    worker.on('message',(result) => {
        console.log(result);
        console.log('finished handling request');
    })
    worker.postMessage(request)
}

handleRequest("hello")