function add(a, b) {
//   return (Number(a) + Number(b))//.toString(); // Fix me!
  
  b = b.split(``).reverse();
  a = a.split(``).reverse();
  
  if(a.length < b.length){
  
    a = a.map(function(item, index){
      if((+b[index] + +item).toString().length === 2){        
        typeof b[index+1] !== "undefined" ?  b[index+1] = (+b[index+1] +1).toString() : b.push((1).toString());
        return (+b[index] + +item).toString().slice(1,2);  
      }else{
        return (+b[index] + +item).toString();  
      }      
    });
    
    return b
    .map(function(item, index, b){
      if(typeof a[index] !== "undefined"){
        return a[index];
      }else{
        if(item === "0"){
          return "";
        }else{
          if(item.length === 2){
            b[index+1] = (+b[index+1] +1).toString();
            return isNaN(b[index+1]) ? item : item.slice(1,2);
          }else{
            return item;
          }
        }
      }
    })
    .reverse()
    .join(``);
    
  }
  
  if(a.length >= b.length){
  
    b = b.map(function(item, index){
      if((+a[index] + +item).toString().length === 2){
        typeof a[index+1] !== "undefined" ?  a[index+1] = (+a[index+1] +1).toString() : a.push((1).toString());
        return (+a[index] + +item).toString().slice(1,2);  
      }else{
        return (+a[index] + +item).toString();  
      }      
    });
    
    return a
    .map(function(item, index, a){
      if(typeof b[index] !== "undefined"){
        return b[index];
      }else{
        if(item === "0"){
          return "";
        }else{
          if(item.length === 2){
            a[index+1] = (+a[index+1] +1).toString();
            return isNaN(a[index+1]) ? item : item.slice(1,2);
          }else{
            return item;
          }
        }
      }
    })
    .reverse()
    .join(``);
        
  }
  
}
