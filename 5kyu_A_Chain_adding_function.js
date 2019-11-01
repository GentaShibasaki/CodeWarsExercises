function add(n){
  // Let the currying begin!  
  let next = function(n2){
    return add(n+n2); //if a function is called in succession, do recursion 
  };
  
  //change "next" into a primitive value
  next.valueOf = function(){
    return n;
  }

  //if this function isn't called in succession, "next" will be a number of "n"
  //if this function is called in succession, "next" do recursion(on line 4)
  return next;
}

//add(1) => 1
//add(1)(2) =>3
//addTwo = add(2); => 2 , and if you call "addTwo" as a function, this valuable works as a function
//addTwo(4) => 6 , "addTwo" is a primitive value, if you write a function invocation("()"),
//            this valuable works as a function 
