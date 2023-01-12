const cache = {}
function fib(n) {
    if (n in cache) {
        return cache[n]
    }
    if(n <= 2){
        return 1
    }

    const result = fib(n-1) + fib(n-2)
    cache[n] = result
    return result
}

console.log(fib(40))