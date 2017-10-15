function convertHTML(str) {
  // &colon;&rpar;
  var entities = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"};
  
  str = str.split("");
  
  for (i = 0; i < str.length; i++) {
    for (var k in entities) {
      if (str[i] === k) {
        str[i] = entities[k];
      }
    }
  }
  
  //console.log(str.join(""));
  return str.join("");
}

convertHTML("Dolce & Gabbana");
