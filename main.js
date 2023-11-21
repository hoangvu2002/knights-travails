function chessBoard(size) {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < size; i++) {
    const chessBoardRow = [];
    for (let j = 0; j < size; j++) {
        chessBoardRow.push(i*8 + j + 1);
    }
    arr.push(chessBoardRow);
  };
  return arr;
}

// direction vectors
const dRow = [+2,+2,+1,-1,-2,-2,+1,-1];
const dCol = [-1,+1,+2,+2,-1,+1,-2,-2];

console.log(chessBoard(8));