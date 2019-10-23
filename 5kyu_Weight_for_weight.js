function orderWeight(strng) {
    // your code
    //declare a valuable of result
    let result = [];

    //split an original array
    let array = strng.split(` `);

    //calculate weights of each items 
    let arrayWeight = array
    .map(item => item.split(``)
    .reduce((acm, num)=> acm + +num,0));
    
    
    //find the same number of weight, and put only one value into new array
    let arrayWeightFilter = arrayWeight
    .filter((weight,index,array) => array.indexOf(weight) === index) // De-duplication
    .sort((a,b)=>a-b);
    
    //put the same weight of numbers into the result
      return arrayWeightFilter
      .map((item,index) => arrayWeight
      .map(function(weight, indexOfWeight){
        return item === weight? weight : undefined; 
      })
      .reduce(function(acc,cur,ind){
        if(typeof cur === "number") acc.push(array[ind]);
        return acc;
      },[]))
      .map(item => item.sort((a,b)=>a.localeCompare(b)))
      .reduce((a,b) => a.concat(b))
      .join(` `);
        
}
