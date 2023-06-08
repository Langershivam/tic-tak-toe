var currentPlayer = "X";
var cells = document.getElementsByClassName("cell");

function makeMove(cellIndex) {
  if (cells[cellIndex].innerText === "") {
    cells[cellIndex].innerText = currentPlayer;
    cells[cellIndex].style.cursor = "not-allowed";
    cells[cellIndex].style.pointerEvents = "none";
    if (checkWin()) {
      alert(currentPlayer + " wins! Now you can reset the game");
      resetBoard();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (
      cells[a].innerText !== "" &&
      cells[a].innerText === cells[b].innerText &&
      cells[a].innerText === cells[c].innerText
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
      return false;
    }
  }
  return true;
}

function resetBoard() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.cursor = "pointer";
    cells[i].style.pointerEvents = "auto";
  }
  currentPlayer = "X";
}
