function resetRedSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((element) => {
    const row = parseInt(element.dataset.row);
    const col = parseInt(element.dataset.col);
    element.style.backgroundColor = (row + col) % 2 === 0 ? "gray" : null;
    element.textContent = "";
  });
}

function resetSquares(x, y) {
  const squares = document.querySelectorAll(".square");
  squares.forEach((element) => {
    if (
      parseInt(element.dataset.row) === parseInt(x) &&
      parseInt(element.dataset.col) === parseInt(y)
    ) {
      const row = parseInt(element.dataset.row);
      const col = parseInt(element.dataset.col);
      element.style.backgroundColor = (row + col) % 2 === 0 ? "gray" : null;
    }
  });
}

function changeSquareColorEvent() {
  const radioBtn = document.querySelector("input[name='input-square']:checked");
  if (radioBtn.value === "start") {
    const startXInput = document.querySelector("#start-x");
    const startYInput = document.querySelector("#start-y");
    if (
      startXInput.value !== this.dataset.row ||
      startYInput.value !== this.dataset.col
    ) {
      resetSquares(startXInput.value, startYInput.value);
    }
    startXInput.value = this.dataset.row;
    startYInput.value = this.dataset.col;
    this.style.backgroundColor = "blue";
  }
  if (radioBtn.value === "target") {
    const targetXInput = document.querySelector("#target-x");
    const targetYInput = document.querySelector("#target-y");
    if (
      targetXInput.value !== this.dataset.row ||
      targetYInput.value !== this.dataset.col
    ) {
      resetSquares(targetXInput.value, targetYInput.value);
    }
    targetXInput.value = this.dataset.row;
    targetYInput.value = this.dataset.col;
    this.style.backgroundColor = "green";
  }
}

const buildGameBoard = () => {
  const chessGrid = document.querySelector(".chessGrid");
  while (chessGrid.firstChild) {
    chessGrid.removeChild(chessGrid.firstChild);
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.row = `${i}`;
      square.dataset.col = `${j}`;
        (i + j) % 2 === 0 ? square.classList.add("gray") : square.classList.remove("gray");
      // (i + j) % 2 === 0 ? (square.style.backgroundColor = "gray") : null;
      square.addEventListener("click", changeSquareColorEvent);
      chessGrid.appendChild(square);
    }
  }
};

export { buildGameBoard, changeSquareColorEvent, resetRedSquares };
