function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // Also it's a fine line between trying to code some 
  // non-frontend-developer things in JavaScript and pretend you're ok
  
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
