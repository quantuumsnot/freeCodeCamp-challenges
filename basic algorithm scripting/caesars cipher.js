function rot13(str) { 
  // LBH QVQ VG!
  // What did you say? Yes, of course I DID IT!
  
  var temp = [];
  
  //Push all chars from str to our temp array
  for (var i = 0; i < str.length; i++) {
    temp.push(str.charCodeAt(i));
  }
  
  //Convert all chars from our temp array to ASCII codes
  for (var j = 0; j < temp.length; j++) {
    if (temp[j] >= 65 && temp[j] <= 90) { //65 is A, 90 is Z
      if (temp[j] < 78) { //78 is the middle of ... everything
        temp[j] += 13;
      } else {
        temp[j] -= 13;
      }
    }
  }
  
  //Convert all rot13-ed ASCII codes from our temp array to chars
  for (var k = 0; k < temp.length; k++) {
    temp[k] = String.fromCharCode(temp[k]);
  }

  str = temp.join(""); //use "" if you wanna chars to be joined w/o separators
  
  //console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
