function pairElement(str) {
  //our cache for base pairs
  var basePairs = {A: "T", C: "G", G: "C", T: "A"};
  
  //our output cache
  var output = [];
  
  //split our string to array
  str = str.split("");
  
  var steps = str.length; //small optimisation
  
  for (var i in str) {
    for (var j in basePairs) {
      if (str[i] === j) {
        //console.log(basePairs[j]);
        output.push([str[i], basePairs[j]]);
      }
    }
  }
  
  //console.log(output);
  
  return output;
}

pairElement("GCG");
