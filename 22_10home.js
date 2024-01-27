function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
  
    let fibPrev = 0;
    let fibCurr = 1;
  
    for (let i = 2; i <= n; i++) {
        const temp = fibCurr;
        fibCurr = fibPrev + fibCurr;
        fibPrev = temp;
    }
  
    return fibCurr;
  }
  
  console.log(fibonacci(0));
  console.log(fibonacci(1));
  console.log(fibonacci(2)); 
  console.log(fibonacci(3));
  console.log(fibonacci(4)); 
  console.log(fibonacci(10));
  console.log(fibonacci(16)); 
