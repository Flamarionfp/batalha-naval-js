import { letters } from "./constants";

const board: Array<string[]> = [[]];

const BOARD_SIZE = 11;

function initBoard() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = "~";
    }
  }
}

function _createBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

function _createTextContent(content: string) {
  const textContentElement = document.createElement("span");
  textContentElement.textContent = content;

  return textContentElement;
}

function drawBoard() {
  const boardElement = document.querySelector("#board");

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const box = _createBox();

      if (i === 0 && j > 0) {
        const numberElement = _createTextContent(String(j));
        box.appendChild(numberElement);
      }

      if (j === 0 && i > 0) {
        const letterElement = _createTextContent(letters[i - 1]);
        box.appendChild(letterElement);
      }

      if (boardElement) {
        boardElement.appendChild(box);
      }
    }
  }
}

function main() {
  initBoard();
  drawBoard();
  console.log(board);
}

main();
