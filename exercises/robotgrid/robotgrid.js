export const robotGrid = (grid, width, height, x = 0, y = 0, path = []) => {
  if (grid[x][y] < 0) return 0;
  if (x === grid[0].length - 1 && y === grid.length - 1) return path;
  if (lookAhead(grid, x, y)) {
    path.push()
    navigateGrid(grid, widht, height, x, y, path);
  }
}

const lookAhead = (grid, x, y) => {
  return (grid[x][y + 1] > -1 && grid[x + 1][y]);
}
