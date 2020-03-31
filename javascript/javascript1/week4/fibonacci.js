function fibonacci(n){
    let result = [0, 1];
    for (let i = 2; i < n + 1; i++){
      result.push(result[i - 2] + result[i -1])
    }
   return result[n]
  }
  console.log(fibonacci(4));