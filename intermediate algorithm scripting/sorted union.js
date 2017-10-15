function uniteUnique(arr) {
  arr = Array.from(arguments);
  var output = [];
  
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (output.indexOf(arr[i][j]) === -1) {
        output.push(arr[i][j]);
      }
    }
  }
  
  //console.log(output);
  return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
