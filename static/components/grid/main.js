let document;
let globalDom;
let component;
let canvas;
let ctx;
let gridSize = 16;

export const handler = (options) => {
  document = options.shadowDom;
  globalDom = document;
  component = options.component;
  canvas = document.getElementById("canvas");
  canvas.width = Number(component.getAttribute("size"));
  canvas.height = Number(component.getAttribute("size"));
  ctx = canvas.getContext("2d");
};

export const displayGrid = (grid) => {
  drawGrid(prepareGridMatrix(grid));
};

export const drawGrid = (gridMatrix) => {
  let squareSize = canvas.width / gridSize;
  for (let x in gridMatrix[0]) {
    for (let y in gridMatrix) {
      let colorValue = 255 * (gridMatrix[x][y] / 20);
      ctx.fillStyle = `rgb(${colorValue},${colorValue},${colorValue})`;
      ctx.fillRect(
        squareSize * y,
        squareSize * x,
        squareSize - 0.01 * squareSize,
        squareSize - 0.01 * squareSize
      );
    }
  }
};

export const prepareGridMatrix = (grid) => {
  let relevantLines = grid.split("\n").splice(0, gridSize);
  for (let i in relevantLines) {
    let line = relevantLines[i].split("");
    let newLine = [];
    let awaitClosingBracket;
    for (let t of line) {
      if (awaitClosingBracket) {
        if (t != ")") newLine[newLine.length - 1] += t;
        else {
          awaitClosingBracket = false;
          newLine[newLine.length - 1] = Number(newLine[newLine.length - 1]);
        }
        continue;
      }
      if (t != "(") newLine.push(Number(t));
      else {
        newLine.push("");
        awaitClosingBracket = true;
      }
    }

    relevantLines[i] = newLine;
  }

  return relevantLines;
};
