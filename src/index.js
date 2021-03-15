
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) { return [] };
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    i % 2 === 0 ? result = result.concat(matrix[i]) :result = result.concat(matrix[i].reverse());
  }
  return result;
}
