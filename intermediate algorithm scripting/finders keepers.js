function findElement(arr, func) {
  var num = 0;
  var len = arr.length;
  
  for (i = 0; i < len; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    } else num = undefined;
  }
  
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
