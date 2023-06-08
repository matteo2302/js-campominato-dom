console.log("jsok");
//fase 0
const board = document.querySelector(".board");
const button = document.querySelector("button");
const scored = document.getElementById("score");
let score = "";
let row = 10;
let cols = 10;
let totalCell = row * cols;
button.addEventListener("click", function () {
  board.classList.remove("d-none");
  for (i = 0; i < totalCell; i++) {
    board.innerHTML += `<div class="cell"> ${[i + 1]}</div>`;
  }
  let cells = document.querySelectorAll(".cell");
  for (i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener("click", function () {
      if (cell.classList.contains("active")) {
        return;
      } else {
        cell.classList.add("active");
        console.log(cell.innerText);
        score++;
        console.log(score);
      }
    });
  }
  //fase 1
});
