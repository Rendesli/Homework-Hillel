let world="ПриВЕт";

function  filterUpperCase(world){

  return [].filter.call(world, (item) => item === item.toUpperCase() ? item : false);
}
console.log(filterUpperCase(world));
