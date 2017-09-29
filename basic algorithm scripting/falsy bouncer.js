function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // What if I am the bouncer or the owner of the club?

  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
