function smallestCommons(arr) {
  if (arr[0] > arr[1]) { arr = [arr[1], arr[0]]; }
  var mul = arr[1];
  
  for (var i = arr[1]; i >= arr[0]; i--) {
    if (mul % i !== 0) {
      mul += arr[1]; 
      i = arr[1];
    }
  }

  //console.log(mul);
  return mul;
}

smallestCommons([1,5]);
