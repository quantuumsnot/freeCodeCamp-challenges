function palindrome(str) {
  // Good luck!
  // Well, thank you!
  str = str.replace(/\W+|_+/gi, "");
  console.log("Special chars and underscore were removed: " + str);
  str = str.replace(/\s+/gi, "");
  console.log("Whitespace chars were removed: " + str);
  str = str.toLowerCase();
  console.log("Converted to lower case: " + str);
  var orig = str;
  str = str.split("").reverse().join("");
  console.log("Chars were reversed and joined: " + str);
  if (orig === str) {
    return true;
  } else return false;
}

palindrome("not a palindrome");
