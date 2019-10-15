function digital_root(n) {
  // ...
  let result = n.toString(10).split(``).reduce((sum, num) => sum + eval(num) , 0);
  
  return (result < 10 ? result : digital_root(result));
}
