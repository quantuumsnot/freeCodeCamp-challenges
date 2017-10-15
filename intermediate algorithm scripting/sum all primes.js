function sumPrimes(num) {
  var primes = [];
  var isPrime;
  var sum = 0;
  
  for (i = 2; i <= num; i++) {
    isPrime = true;
    for (j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        isPrime = false;
      }
    }

    if (isPrime === true) {
      //primes.push(i);
      //or
      sum += i;
    }
  }
  
  //sum = primes.reduce(function(a, b) { return a + b; });

  return sum;
}

sumPrimes(10);
