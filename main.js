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
  if (row < 0 || col < 0 || row >= size || col >= size) return false;
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

// function bfsChess(grid, vis, row, col) {
//  const q = [];
//  q.push([row, col]);
//  console.log(vis);
//  vis[row][col] = true;
//
//  let steps = 0;
//
//  while (q.length!==0) {
//    const cell = q[0];
//    const x = cell[0];
//    const y = cell[1];
//
//    // console.log(x);
//    // console.log(y);
//
//    // console.log( `${grid[x][y]  } `);
//
//    const move = q.shift();
//    console.log(move);
//
//    for (let i=0; i<8; i++) {
//      const adjX = x + dRow[i];
//      const adjY = y + dCol[i];
//
//      // console.log(adjX);
//      // console.log(adjY);
//      if( isValid(vis, adjX, adjY, 8)) {
//        // console.log("hey");
//        q.push([adjX, adjY]);
//        vis[adjX][adjY] = true;
//        steps++;
//      }
//    }
//  }
//  return steps;
// }
//
// const visit = visitedMatrix(8);
// const chess = chessBoard(8);
//
//
// console.log(chessBoard(8));
/// / console.log(visitedMatrix(8));
//
// console.log(bfsChess(chess, visit, 0, 0));
/// / console.log(isValid(visit, 2, 1, 8));
/// / console.log(visit);
/// / steps = bfsChess(chess, visit, 0, 0);
/// / console.log(steps);
//
// console.log(visit);

function bfsChess(grid, vis, row, col, destRow, destCol) {
  const q = [];
  q.push([[row, col]]); // Start with the initial position in the path
  vis[row][col] = true;

  while (q.length !== 0) {
    const path = q.shift();
    const [x, y] = path[path.length - 1]; // Get the current position from the end of the path
    console.log(path.length);
    if (x === destRow && y === destCol) {
      // If we've reached the destination, return the path taken
      return path;
    }

    for (let i = 0; i < 8; i++) {
      const adjX = x + dRow[i];
      const adjY = y + dCol[i];

      if (isValid(vis, adjX, adjY, 8)) {
        q.push([...path, [adjX, adjY]]); // Add the new position to the current path
        vis[adjX][adjY] = true;
      }
    }
  }
  return []; // If no path found, return an empty array
}

const size = 8; // Size of the chessboard
const start = [0, 0]; // Starting position
const destination = [7, 7]; // Destination position

const vis = visitedMatrix(size);
const shortestPath = bfsChess(chessBoard(size), vis, start[0], start[1], destination[0], destination[1]);
console.log(shortestPath);
