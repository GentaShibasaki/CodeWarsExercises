var number = function(busStops){
  return busStops
  .map(function(item){
    return item[0] - item[1];
  })
  .reduce((sum, num) => sum + num)
  
}
