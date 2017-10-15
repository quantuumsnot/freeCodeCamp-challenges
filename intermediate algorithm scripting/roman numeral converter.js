function convertToRoman(num) {
  //lets cache Roman numerals
  var numCache = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  var result = "";
  
  for(var i in numCache) {
    while(num >= numCache[i]) {
      result += i;
      num -= numCache[i];
    }
  }

  return result;
}

convertToRoman(36);
