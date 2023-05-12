import { letters } from "./constants";

type Direction = "horizontal" | "vertical";

const board: Array<string[]> = [[]];
const BOARD_SIZE = 11;
const SHIPPING_LENGTH = 5;
const EMPTY_IDENTIFIER = "~";
const SHIP_IDENTIFIER = "S";
// const FIRE_IDENTIFIER = "X"; // use later

function _createBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

function initBoard() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = EMPTY_IDENTIFIER;
    }
  }
}

function drawBoard() {
  const boardElement = document.querySelector("#board");

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const box = _createBox();

      if (i === 0 && j > 0) {
        box.textContent = String(j);
      } else if (j === 0 && i > 0) {
        box.textContent = letters[i - 1];
      } else if (i !== 0 && j !== 0) {
        box.textContent = board[i][j];
      } else {
        box.innerHTML = "";
      }

      if (boardElement) {
        boardElement.appendChild(box);
      }
    }
  }
}

function buildShip(
  startsAtColumn: number,
  startsAtRow: number,
  direction: Direction,
  shipLength: number
) {
  for (let i = startsAtColumn; i < shipLength + startsAtColumn; i++) {
    if (direction === "horizontal") {
      board[startsAtRow][i] = SHIP_IDENTIFIER;
    } else {
      board[i][startsAtColumn] = SHIP_IDENTIFIER;
    }
  }
}

function main() {
  initBoard();
  const startsAtColumn = 2; // user must inform
  const startsAtRow = 4; // user must inform
  const direction: Direction = "horizontal"; // user must inform
  buildShip(startsAtColumn, startsAtRow, direction, SHIPPING_LENGTH);
  drawBoard();
  console.log(board);
}

main();
