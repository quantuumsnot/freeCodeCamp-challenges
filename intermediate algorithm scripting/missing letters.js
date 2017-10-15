//version 1, https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-missing-letters/16023/28?u=quantuumsnot
function fearNotLetter(str) {
  var len = str.length - 1;
  for (var i = 0; i < len; i++) {
    if (str.charCodeAt(i)+1 != str.charCodeAt(i+1)) {
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
}

//version 2, https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-missing-letters/16023/13?u=quantuumsnot
function fearNotLetter(str) {
  for (var i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
    if (str.indexOf(String.fromCharCode(i)) == -1) {return String.fromCharCode(i);}
  }
}

fearNotLetter("abce");
