function sumAll(arr) {
  //swap directly into the array
  if (arr[0] > arr[1]) {
    arr = [arr[1], arr[0]];
  }
  
  //cache final sum here
  var result = 0;
  
  //loop for each number in our range, starting from the smallest (we already set arr[0] to be the smallest)
  for (var i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }

  return result;
}

sumAll([1, 4]);
