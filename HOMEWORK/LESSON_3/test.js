/* 
* Функция generateChessBoard создает строку из # в шахматном порядке. 
* @param {number} size - размер доски, стандартно number = 8
* @returns {string}
*
 */
function generateChessBoard(size) {
  var out =' ';
  for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      out += i % 2 === j % 2 ? '#' :' ';
    }
    out += "\n";
  }
  return out;
}

console.log(generateChessBoard(7));