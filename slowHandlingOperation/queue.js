const Queue = require('bull')
function slowOperation(){
    console.log("hello world");
}
const queue = new Queue('slow-operation-worker')
function handleRequest(request) {
    console.log('Handling Request');
    queue.add(request)
}
queue.process((job) => {
    return slowOperation(job.data)
})

handleRequest("hii")