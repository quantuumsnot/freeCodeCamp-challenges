function findLongestWord(str) {
  str = str.split(" ");
  var wordLength = 0;
  console.log("String was split: " + str);
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > wordLength) {
      wordLength = str[i].length;
    }
    console.log("Longest word: " + wordLength + " chars");
  }
  
  return wordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
