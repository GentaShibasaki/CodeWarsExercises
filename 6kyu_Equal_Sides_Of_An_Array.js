function findEvenIndex(arr){
  //Code goes here!
  console.log(arr);
  let sumLeft = 0;
  let sumRight = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(i === 0){
      
      if(arr.length === 1) return i;
      else sumRight = arr.slice(i+1).reduce((sum, num) => sum + num);
      
      if(sumRight === 0) return i;
      
    }else if(i+1 === arr.length){
      
      sumLeft += arr[i-1];
      sumRight = 0;
      if(sumLeft === sumRight) return i;
    
    }else if(i > 0 && i+1 < arr.length){
    
      sumLeft += arr[i-1];
      sumRight = arr.slice(i+1).reduce((sum, num) => sum + num);
      if(sumLeft === sumRight) return i;
    
    }
  }
  
  return -1;
}
