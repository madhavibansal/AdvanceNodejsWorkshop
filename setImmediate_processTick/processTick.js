process.nextTick(() => {
    console.log('process.nextTick callback');
})

console.log('After process.nextTick')