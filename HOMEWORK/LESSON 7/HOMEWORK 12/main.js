let world="ПриВЕт";
let lettersToUpperCase = [];
function  filterUpperCase(world){

  return lettersToUpperCase.filter.call(world, (item) => item === item.toUpperCase() && item !== item.toLowerCase() ? item : false);
}
console.log(filterUpperCase(world));
