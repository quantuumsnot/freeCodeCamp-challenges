function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  //performance optimization - cache arrays' lengths
  var steps1 = arr1.length;
  var steps2 = arr2.length;
  
  for (var i = 0; i < steps1; i++)  {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  
  for (var j = 0; j < steps2; j++)  {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
