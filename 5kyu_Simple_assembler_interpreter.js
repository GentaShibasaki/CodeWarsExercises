Kata


5 kyu
423
5 kyu
Simple assembler interpreter
39213193% of 588737 of 2,621ShinuToki
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (9)
Discourse (173)
Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
Show Kata Description
Show Kata Test Cases
Show Me:All SolutionsSolutions of Users I am Following
My Solutions
Sort By:
Best Practices
CleverNewestOldest
GentaShibasaki
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
Best Practices0Clever0
0ForkCompare with your solutionLink
© 2020 CodewarsAboutAPIBlogPrivacyTermsContact
