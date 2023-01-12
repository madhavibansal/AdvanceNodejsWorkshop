function slowOperation(){
    console.log("hello world");
}

async function handleRequest(request,callback) {
    console.log('Handle Request');
    slowOperation((error,result) => {
    if(error) {
        callback(error)
    }
    else{
        console.log(result);
    console.log('finished handling request');
    callback(null,result)
    }
    })
}

handleRequest()