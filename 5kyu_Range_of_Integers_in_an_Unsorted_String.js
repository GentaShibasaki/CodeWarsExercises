function mysteryRange(s,n){
  let sArray = [];
  
  if(s.length<10){
  
    return s.split(``)
    .sort((a,b)=> a-b)
    .filter((element,index)=> index === 0 || index === s.length-1)
    .map(element => +element);
  
  }
  
  if(n*2 === s.length){
  
    if(s.length <= 180){
      for(let i = 0; i < s.length; i += 2){
        sArray.push(s.slice(i,i+2));
      }
      
      return sArray
      .sort((a,b)=> a-b)
      .filter((element,index)=> index === 0 || index === sArray.length-1)
      .map(element => +element);    
    
    }else if(s.length >180){
      
      sArray.push(100 + Math.floor((s.length-180)/4)-1);
      sArray.unshift(sArray[0]-n+1);
      return sArray;
    
    }    
  
  }
  
  if(n > 90 && s.length > 180){
    if(s.length-180 <= (n-90)*3 && s.length-180 > (n-90)){
      sArray.push(99+Math.floor(((s.length-180)-(n-90))/2));  
      sArray.unshift(sArray[0]-n+1);
      return sArray;
    } 
  }


    sArray.push(+`9`.repeat(s.length/n)+(s.length%n));
    sArray.unshift(sArray[0]-n+1);      
    return sArray;
}
