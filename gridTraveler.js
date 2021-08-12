// Say that your are a traveler on a 2D grid.
// You begin in the top-left corner and your goal is to travel to the bottom-right corner
//  .You may only move down or right

// In how many ways can you travel to the goal on a grid with dimensions m*n?

// write a function `gridTraveler(m,n)` that calculate this.

// recursive call

// const gridTraveler = (m, n) => {
//   if (n === 1 && m === 1) return 1;
//   if (n === 0 || m === 0) return 0;
//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };

// Dyanmin call

const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (n === 1 && m === 1) return 1;
  if (n === 0 || m === 0) return 0;
  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
};

console.log(gridTraveler(5, 6));
console.log(gridTraveler(10, 6));
console.log(gridTraveler(200, 200));
