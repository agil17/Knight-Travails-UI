import { knightMoves } from "./functions";
import { resetRedSquares } from "./domManipulation";

function setResetBtnEvent() {
  const reset = document.querySelector("button");
  reset.addEventListener("click", resetRedSquares);
}

function printPath(path, steps) {
  const output = document.querySelector(".output-container");
  output.textContent = "";
  const squares = document.querySelectorAll(".square");
  for (let i = 1; i < path.length - 1; i++) {
    let row = path[i][0];
    let col = path[i][1];
    squares.forEach((element) => {
      if(parseInt(element.dataset.row) === row && parseInt(element.dataset.col) === col) {
        element.style.backgroundColor = "red";
        element.textContent = `${i}`;
      }
    });
  }
  output.textContent = `You made it in ${steps} steps!`
}

function formSubmit(e) {
  e.preventDefault();
  // if(e.keyCode !== 13) return;
  const startX = document.querySelector("#start-x").value;
  const startY = document.querySelector("#start-y").value;
  const targetX = document.querySelector("#target-x").value;
  const targetY = document.querySelector("#target-y").value;

  const [path, steps] = knightMoves(parseInt(startX), parseInt(startY), parseInt(targetX), parseInt(targetY));

  printPath(path, steps);


}

const addEventHandlerToForm = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", formSubmit);
};

export { addEventHandlerToForm, setResetBtnEvent };
