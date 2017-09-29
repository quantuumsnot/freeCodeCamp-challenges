function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // "Well, at least we tried"
  // -- a random guy failed in life
  
  return str.substr(-target.length, target.length) === target;
}

confirmEnding("Bastian", "n");
