const $board = document.querySelector("#board");

const $cells = document.querySelectorAll(".cell");
const $a1 = document.querySelector("#board :nth-child(1)");
const $a2 = document.querySelector("#board :nth-child(2)");
const $a3 = document.querySelector("#board :nth-child(3)");

const $b1 = document.querySelector("#board :nth-child(4)");
const $b2 = document.querySelector("#board :nth-child(5)");
const $b3 = document.querySelector("#board :nth-child(6)");

const $c1 = document.querySelector("#board :nth-child(7)");
const $c2 = document.querySelector("#board :nth-child(8)");
const $c3 = document.querySelector("#board :nth-child(9)");

const $winMess = document.querySelector("#winningMessage");
const $winMessText = document.querySelector("#winningMessageText");
const $form = document.querySelector("#formAddPlayer");
const $playerInput = $form.querySelector("#playerInput");
const $nextPlayerBtn = $form.querySelector("#nextPlayerBtn");

let $turnMsg = document.querySelector(".turn-info");

let turn;
let joueurCroix = "";
let joueurRond = "";

//permet de switch entre la croix et le rond
const toggleTurn = () => {
  turn ? (turn = false) : (turn = true);
  if (turn) {
    $board.classList.add("circle");
    $board.classList.remove("x");
    joueurRond !== "o" ? ($turnMsg.innerHTML = `<p>It's <strong>${joueurRond}</strong>'s turn to place a circle (o)</p>`) : ($turnMsg.innerHTML = `<p>It's <strong>CIRCLE (o)</strong>'s turn</p>`);
    return "x";
  } else {
    $board.classList.add("x");
    $board.classList.remove("circle");
    joueurCroix !== "x" ? ($turnMsg.innerHTML = `<p>It's <strong>${joueurCroix}</strong>'s turn to place a cross (x)</p>`) : ($turnMsg.innerHTML = `<p>It's <strong>CROSS (X)</strong>'s turn</p>`);
    return "circle";
  }
};

//player form
const playerForm = () => {
  $form.classList.add("show");
  $nextPlayerBtn.innerHTML = "Add player X";
  $form.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "anonymousBtn") {
      joueurCroix = "x";
      joueurRond = "o";
      $form.classList.remove("show");
      toggleTurn();
      return;
    }
    if (e.target.id === "nextPlayerBtn" && joueurCroix === "" && $playerInput.value !== "") {
      joueurCroix = $playerInput.value;
      $nextPlayerBtn.innerHTML = "Add Player O";
      $playerInput.value = "";
    }
    if (e.target.id === "nextPlayerBtn" && joueurCroix !== "" && $playerInput.value !== "") {
      joueurRond = $playerInput.value;
      $form.classList.remove("show");
      $playerInput.value = "";
      return;
    }
    toggleTurn();
  });
};

//reset le jeu et enlève les classes du board et des divs
const init = () => {
  //reset classes
  $winMess.classList.remove("show");

  $board.classList.remove("x");
  $board.classList.remove("circle");

  $cells.forEach((cell) => {
    cell.classList.remove("x");
    cell.classList.remove("circle");
  });

  Math.round(Math.random()) === 1 ? (turn = true) : (turn = false);
  turn ? $board.classList.add("circle") : $board.classList.add("x");
};

const winCondition = () => {
  //-----------------ROWS----------------
  //ROW a victory X
  if ($a1.classList.contains("x") && $a2.classList.contains("x") && $a3.classList.contains("x")) {
    win(joueurCroix);
  }
  //ROW a victory circle
  else if ($a1.classList.contains("circle") && $a2.classList.contains("circle") && $a3.classList.contains("circle")) {
    win(joueurRond);
  }

  //ROW b victory X
  else if ($b1.classList.contains("x") && $b2.classList.contains("x") && $b3.classList.contains("x")) {
    win(joueurCroix);
  }
  //ROW b victory circle
  else if ($b1.classList.contains("circle") && $b2.classList.contains("circle") && $b3.classList.contains("circle")) {
    win(joueurRond);
  }

  //ROW c victory X
  else if ($c1.classList.contains("x") && $c2.classList.contains("x") && $c3.classList.contains("x")) {
    win(joueurCroix);
  }
  //ROW c victory circle
  else if ($c1.classList.contains("circle") && $c2.classList.contains("circle") && $c3.classList.contains("circle")) {
    win(joueurRond);
  }

  //-----------------COLUMNS----------------
  //COL 1 Victory
  else if ($a1.classList.contains("x") && $b1.classList.contains("x") && $c1.classList.contains("x")) {
    win(joueurCroix);
  } else if ($a1.classList.contains("circle") && $b1.classList.contains("circle") && $c1.classList.contains("circle")) {
    win(joueurRond);
  }
  //COL 2 Victory
  else if ($a2.classList.contains("x") && $b2.classList.contains("x") && $c2.classList.contains("x")) {
    win(joueurCroix);
  } else if ($a2.classList.contains("circle") && $b2.classList.contains("circle") && $c2.classList.contains("circle")) {
    win(joueurRond);
  }
  //COL 3 Victory
  else if ($a3.classList.contains("x") && $b3.classList.contains("x") && $c3.classList.contains("x")) {
    win(joueurCroix);
  } else if ($a3.classList.contains("circle") && $b3.classList.contains("circle") && $c3.classList.contains("circle")) {
    win(joueurRond);
  }

  //DIAG1 Top L to Bot - R Victory
  else if ($a1.classList.contains("x") && $b2.classList.contains("x") && $c3.classList.contains("x")) {
    win(joueurCroix);
  } else if ($a1.classList.contains("circle") && $b2.classList.contains("circle") && $c3.classList.contains("circle")) {
    win(joueurRond);
  }
  //DIAG2 Bot L to Top R Victory
  else if ($c1.classList.contains("x") && $b2.classList.contains("x") && $a3.classList.contains("x")) {
    win(joueurCroix);
  } else if ($c1.classList.contains("circle") && $b2.classList.contains("circle") && $a3.classList.contains("circle")) {
    win(joueurRond);
  }
  //draw condition
  else if ($a1.classList.length > 1 && $a2.classList.length > 1 && $a3.classList.length > 1 && $b1.classList.length > 1 && $b2.classList.length > 1 && $b3.classList.length > 1 && $c1.classList.length > 1 && $c2.classList.length > 1 && $c3.classList.length > 1) {
    $winMess.classList.add("show");
    $winMessText.innerHTML = "<h2>It's a draw !</h2>";
  }
};

const win = (gagnant) => {
  $winMess.classList.add("show");
  $winMessText.innerHTML = `<h2>${gagnant} won ! Well done  !</h2>`;
};

//listen $board pour plasser les classes sur les divs enfant
$board.addEventListener("click", (e) => {
  if (e.target.classList.contains("x") || e.target.classList.contains("circle")) {
    return;
  }
  if (e.target.classList.contains("cell")) {
    e.target.classList.add(toggleTurn());
    winCondition();
  }
});

document.querySelector("#restartButton").addEventListener("click", (e) => {
  init();
});
document.querySelector("#changePlayers").addEventListener("click", (e) => {
  joueurRond = "";
  joueurCroix = "";
  playerForm();
  init();
});

playerForm();
init();
