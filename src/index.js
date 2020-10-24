module.exports = function towelSort (matrix) {
  var rez = [];
  if (matrix != undefined) {
  	for (let i = 0; i < matrix.length; i++) {
    	if (i % 2 !== 0) matrix[i] = matrix[i].reverse();
    	for (let j = 0; j < matrix[i].length; j++) {
      	rez.push(matrix[i][j]);
    }
    }
  }
  return rez;
}
