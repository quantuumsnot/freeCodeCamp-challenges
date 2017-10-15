function dropElements(arr, func) {
  // Drop them elements.
  var len = arr.length;
  
  for (i = 0; i < len; i++) {
    if (func(arr[0])) { break; }
    else { arr.shift(); }
  }

  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
