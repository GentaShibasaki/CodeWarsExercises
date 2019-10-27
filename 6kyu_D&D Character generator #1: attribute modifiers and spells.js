function charAttribute(score){
  //your code here
  let modifier = defineModifier(score);
  
  let maximumSpellLevel = defineMaximumSpellLevel(score);
  
  let extraSpellsLength = modifier > 9? 9 : modifier > 0 ? modifier : 0;

  let extraSpells = defineExtraSpells([...Array(extraSpellsLength)],modifier-1);
  
  return {modifier: modifier,
          maximumSpellLevel: maximumSpellLevel,
          extraSpells: extraSpells};
}

function defineModifier(score){
  return score === 0? 0 : Math.floor((score - 10) / 2);
}

function defineMaximumSpellLevel(score){
  return score < 10 ? -1 : score < 20 ? score - 10 : 9 ;
}

function defineExtraSpells(arr,modifierTmp){
  return arr.map((item,index)=> Math.floor((modifierTmp-index)/4 + 1)); 
}
