console.log("jsok");
//functions
function bomb(bombs, totalCell) {
  while (bombs.length < 16) {
    const randomNumber = Math.floor(Math.random() * totalCell) + 1;
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }
}
//fase 0
const board = document.querySelector(".board");
const button = document.querySelector("button");
const scored = document.getElementById("score");
let bombs = [];
let score = "";
let row = 10;
let cols = 10;
let totalCell = row * cols;
bomb(bombs, totalCell);
let safeCell = totalCell - bombs.length;
console.table(bombs);
button.addEventListener("click", function () {
  board.classList.remove("d-none");
  for (i = 0; i < totalCell; i++) {
    board.innerHTML += `<div class="cell"> ${[i + 1]}</div>`;
  }
  let cells = document.querySelectorAll(".cell");
  for (i = 0; i < totalCell; i++) {
    const cell = cells[i];
    cell.addEventListener("click", function () {
      //fase 1
      if (bombs.includes(parseInt(cell.innerText))) {
        cell.classList.add("bomb");
        console.log("la partita è terminata");
        return;
      }
      if (score === safeCell) {
        console.log("hai vinto!");
        return;
      }
      if (cell.classList.contains("active")) {
        return;
      } else {
        cell.classList.add("active");
        console.log(cell.innerText);
        score++;
        scored.innerText = score;
      }
      //fase3
    });
  }
});
console.log(safeCell);
