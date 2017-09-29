function chunkArrayInGroups(arr, size) {
  // Break it up.
  // Already did it
  
  var tempArr = [];
  
  for (var i = 0; arr.length > 0;) {
    tempArr.push(arr.splice(0, size));
  }
  
  return tempArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
