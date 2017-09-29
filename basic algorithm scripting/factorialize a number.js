function factorialize(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result = result * i;
  }
  num = result;
  return num;
}

factorialize(5);