function numericals(s){
  let obj = {};

  for(let i = 0; i < s.length; i++){
    obj[s[i]] = 0;
  }
  

  return s.split('').map(function(item){
    this[item] = this[item] + 1;
    return this[item];
  }, obj)
  .join(``);
  
}
