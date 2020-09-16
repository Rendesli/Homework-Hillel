let word="ПриВЕт";

function  filterUpperCase(world){

  return [].filter.call(word, (item) => item === item.toUpperCase() ? item : false);
}
console.log(filterUpperCase(world));
