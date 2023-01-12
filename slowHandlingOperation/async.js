function slowOperation(){
    console.log("hello world");
}

async function handleRequest(request) {
    console.log('Handle Request');
    const result = await slowOperation()
    console.log(result);
    console.log('finished handling request');
}

handleRequest()