function truncateString(str, num) {
  // Clear out that junk in your trunk
  // You're god damn right! Those bodies in it must be disposed somewhere
  
  if (str.length > num) {
    if (num <= 3) {
      str = str.slice(0, num);    
    } else {
      str = str.slice(0, num - 3);    
    }
    str += "...";
  }
  
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
