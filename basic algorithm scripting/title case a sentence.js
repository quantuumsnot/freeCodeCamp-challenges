function titleCase(str) {
  str = str.split(" ");
  console.log("Word was split: " + str);
  
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase();
    str[i] = str[i].split("");
    console.log("Subword was split: " + str);
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("");
  }
  
  str = str.join(" ");
  console.log("Word was joined: " + str);
  return str;
}

titleCase("I'm a little tea pot");
