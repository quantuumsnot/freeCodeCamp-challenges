function mutation(arr) {
  // lowerCase both array elements so the comparison is easier
  var target = arr[0].toLowerCase();
  var test = arr[1].toLowerCase();
  
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) {
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "hey"]);
