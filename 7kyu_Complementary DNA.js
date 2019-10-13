function DNAStrand(dna){
  //your code here
  return dna.split(``).map(function(item){
    if(item === "A") return item = "T";
    if(item === "T") return item = "A";
    if(item === "G") return item = "C";
    if(item === "C") return item = "G";
    return item;
  }).join(``);
}