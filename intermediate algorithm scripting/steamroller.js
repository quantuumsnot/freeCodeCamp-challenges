
function steamrollArray(arr) {
  // I'm a steamroller, baby
  // No, you're not
  
  //recursion
  var flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
