const data =setTimeout(function() {
    console.log("Hello,World")
},100) //print hello world after 1 second
if(!data){
    console.error(error);
    process.exit(1)
}
process.on('exit',function(){
    console.log('About to exit')
})