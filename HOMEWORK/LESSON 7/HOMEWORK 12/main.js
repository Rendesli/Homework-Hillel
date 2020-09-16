let word="ПриВЕт";
function  filterUpperCase(word){
  return [].filter.call(word, (item) => item === item.toUpperCase());
}
console.log(filterUpperCase(word));
