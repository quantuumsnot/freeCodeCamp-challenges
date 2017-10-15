function sumFibs(num) {
  //Sum All Odd Fibonacci Numbers
  var a = 0; var b = 1; var temp = 0; var fibSum = 0;
  
  do {
    temp = a;
    a = a + b;
    b = temp;
    if (a % 1 && a <= num) {
      fibSum += a;
    }
    
  } while (a <= num);

  return fibSum;
}

sumFibs(4);
