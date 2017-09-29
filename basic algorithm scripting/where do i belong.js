function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // Whatever, I'm already at Ibiza
  
  arr = arr.sort();
  
  // classical comparison with a temp swap variable
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  
  for (var j = 0; j < arr.length; j++){
    if (num <= arr[j]) {
      return arr.indexOf(arr[j]);
    }
  }
  
  return arr.length;
}

getIndexToIns([40, 60], 50);
