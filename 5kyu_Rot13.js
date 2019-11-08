function rot13(message){
  //your code here
  let result = message.split(``)
  .map(function(item){
  
    if(item.toUpperCase().charCodeAt() <= 77 && item.toUpperCase().charCodeAt() >= 65){
  
      return String.fromCharCode(item.charCodeAt()+13)
    
    }else if(item.toUpperCase().charCodeAt() <= 122 && item.toUpperCase().charCodeAt() >= 78){
    
      return String.fromCharCode(item.charCodeAt()-13)
    
    }
    
    return item;
    
  })
  .join(``);
  
  return result.length === message.length ? result : message;
  
}
