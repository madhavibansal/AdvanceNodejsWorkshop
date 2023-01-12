function slowOperation(){
    console.log("hello world");
}

 function handleRequest() {
    console.log('Handle Request');
    slowOperation().then((result) => {
    console.log(result);
    console.log('finished handling request');
}).catch((error) => {
    console.error(error)
})
}

handleRequest()