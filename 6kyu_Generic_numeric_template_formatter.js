function numericFormatter(template,numberFormat){
  //your code here

  if(typeof numberFormat === "undefined"){
    let digit = 0;
  
    return template.split(``)
    .map(item => item.match(/[A-z]/)? digit = (digit+1)%10: item)
    .join(``);
    
  }else{
    let numberFormatArray = numberFormat.split(``);
    let arrayPlace = -1;
    
    return template.split(``)
    .map(function(item){
      if(item.match(/[A-z]/)){
        arrayPlace = (arrayPlace+1)%numberFormatArray.length;
        return numberFormatArray[arrayPlace];
      }else{
        return item;
      }
    }).join(``);
  }
}
