function translatePigLatin(str) {
  //our vowels' dictionary
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var ay = "ay";
  
  if (vowels.indexOf(str[0]) > -1) {
    str += "w" + ay;
  } else {
    for (var i = 0; i < str.length; i++) {
      var consonants = 0;
      if (vowels.indexOf(str[i]) === -1) {
        consonants++;
      } else {
        str = str.substring(i) + str.substring(i, consonants) + ay;
        break;
      }
    }
  }
  
  //console.log(str);
  return str;
}

translatePigLatin("consonant");
