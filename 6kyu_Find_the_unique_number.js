function findUniq(arr) {
  // do magic
  arr.sort((a, b) => a-b);
  
  return (arr[0] !== arr[1] ? arr[0] : arr[arr.length-1]);
  
}
