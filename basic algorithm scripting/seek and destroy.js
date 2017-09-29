function destroyer(arr) {
  // Remove all the values
  var args = [].slice.call(arguments);
  
  return arr.filter(function (a) {
    return args.indexOf(a) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
