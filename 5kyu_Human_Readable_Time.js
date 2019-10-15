function humanReadable(seconds) {
  // TODO
  let hh = Math.floor(seconds/3600);
  let mm = Math.floor((seconds%3600)/60);
  let ss = seconds%60; 
  
  return result = ["","",""].map(function(item,index){
    if(index === 0){
      if(hh < 10) return "0" + hh;
      else return hh;
    }
    if(index === 1){
      if(mm < 10) return "0" + mm;
      else return mm
    }
    if(index === 2){
      if(ss < 10) return "0" + ss;
      else return ss;
    }
  }).join(":");
}
