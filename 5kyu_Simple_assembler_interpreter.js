function simple_assembler(program) {
  /* return a dictionary with the registers */
  
  function caliculation(instruction){
    let tmp = instruction.split(' ');
    switch(instruction){
      case (instruction.match(/^mov/) || {}).input:
        isNaN(+tmp[2])
        ? result[tmp[1]] = result[tmp[2]]
        : result[tmp[1]] = +tmp[2];
        break;
      case (instruction.match(/^inc/)|| {}).input:
        result[tmp[1]]++;
        break;
      case (instruction.match(/^dec/)|| {}).input:
        result[tmp[1]]--;
        break;
    }
  }
  
  const result = {};
  
  for(let i = 0, length = program.length; i < length; i++){
    if(!program[i].includes("jnz")){
      caliculation(program[i]);
    }
    if(program[i].includes("jnz")){
      let tmp = program[i].split(' ');
      if(result[tmp[1]] !== 0){
        i = i + (+tmp[2] -1);
      }
    }
  }
  
  return result;
}
