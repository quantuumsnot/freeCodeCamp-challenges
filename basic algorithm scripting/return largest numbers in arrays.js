function largestOfFour(arr) {
  // You can do this!
  // I also can drink all night and start coding at 8 AM
  var largest = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    arr[i] = largest;
    
    //reset var largest for the next loop step or the comparison will be against 
    //the largest number from the previous array group instead of the current one
    largest = 0;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
