function decode(r) {
    // your code
    let stringPlaceNumberArray = r.slice(r.search(/[a-z]/g)).split(``).map(item => item.charCodeAt()-97);
    let number = (0 + +r.slice(0,r.search(/[a-z]/g)))%26;
    
    if(number % 2 === 0 || number === 13) return "Impossible to decode";
  
    return stringPlaceNumberArray.map(function(placeNumber){
      for(let i = 1; i < 27; i++){
        if(placeNumber === ((number * i) % 26)) return i === 26 ? "a" : Math.abs(i+10).toString(36);
      }
    }).join("");
    
}
