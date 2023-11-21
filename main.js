function chessBoard(size) {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < size; i++) {
    const chessBoardRow = [];
    for (let j = 0; j < size; j++) {
      chessBoardRow.push(i * 8 + j + 1);
    }
    arr.push(chessBoardRow);
  }
  return arr;
}

// direction vectors
const dRow = [+2, +2, +1, -1, -2, -2, +1, -1];
const dCol = [-1, +1, +2, +2, -1, +1, -2, -2];

function isValid(vis, row, col, size) {
  if (row < 0 || col < 0 || row >= size || col <= size) return false;
  if (vis[row][col]) return false;
  return true;
}

function visitedMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    const visRow = [];
    for (let j = 0; j < size; j++) {
      visRow.push(false);
    }
    arr.push(visRow);
  }
  return arr;
}

console.log(chessBoard(8));
console.log(visitedMatrix(8));
