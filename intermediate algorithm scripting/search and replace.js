function myReplace(str, before, after) {
  if (/[A-Z]/.test(before[0])) {
    after = after[0].toUpperCase() + after.substring(1);
  }
  //console.log(str.replace(before, after));
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
