function pyramid(n) {
  // your code here
  let result = new Array(n);
  result.fill("");
  
  result = result.map(function(value,index){
    let returnArr = new Array(index+1);
    return returnArr.fill(1);
  })

  return result;
}
