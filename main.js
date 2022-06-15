let $board = document.querySelector("#board");

let $a1 = document.querySelector("#board :nth-child(1)");
let $a2 = document.querySelector("#board :nth-child(2)");
let $a3 = document.querySelector("#board :nth-child(3)");

let $b1 = document.querySelector("#board :nth-child(4)");
let $b2 = document.querySelector("#board :nth-child(5)");
let $b3 = document.querySelector("#board :nth-child(6)");

let $c1 = document.querySelector("#board :nth-child(7)");
let $c2 = document.querySelector("#board :nth-child(8)");
let $c3 = document.querySelector("#board :nth-child(9)");

let $winMess = document.querySelector("#winningMessage");

console.log($a1);
console.log($c1);

let turn;
let joueurCroix = "";
let joueurRond = "";

//reset le jeu et enlève les classes du board et des divs
const init = () => {
  $board.classList.remove("x");
  $board.classList.remove("circle");
  Math.round(Math.random()) === 1 ? (turn = true) : (turn = false);
  turn ? $board.classList.add("circle") : $board.classList.add("x");
};

init();

//permet de switch entre la croix et le rond
const toggleTurn = () => {
  turn ? (turn = false) : (turn = true);
  if (turn) {
    $board.classList.add("circle");
    $board.classList.remove("x");
    return "x";
  } else {
    $board.classList.add("x");
    $board.classList.remove("circle");
    return "circle";
  }
};

/*const winCondition = () => {
  //-----------------ROWS----------------
  //ROW a victory X
  if ($a1.classList.contains("x") && $a2.classList.contains("x") && $a3.classList.contains("x")) {
    alert("victoire des croix");
  }
  //ROW a victory circle
  else if ($a1.classList.contains("circle") && $a2.classList.contains("circle") && $a3.classList.contains("circle")) {
    alert("victoire des cercle");
  }

  //ROW b victory X
  else if ($b1.classList.contains("x") && $b2.classList.contains("x") && $b3.classList.contains("x")) {
    alert("victoire des croix");
  }
  //ROW b victory circle
  else if ($b1.classList.contains("circle") && $b2.classList.contains("circle") && $b3.classList.contains("circle")) {
    alert("victoire des cercle");
  }

  //ROW c victory X
  else if ($c1.classList.contains("x") && $c2.classList.contains("x") && $c3.classList.contains("x")) {
    alert("victoire des croix");
  }
  //ROW c victory circle
  else if ($c1.classList.contains("circle") && $c2.classList.contains("circle") && $c3.classList.contains("circle")) {
    alert("victoire des cercles");
  }

  //-----------------COLUMNS----------------
  //COL 1 Victory
  else if ($a1.classList.contains("x") && $b1.classList.contains("x") && $c2.classList.contains("x")) {
    alert("victoire des croix");
  } else if ($a1.classList.contains("circle") && $b1.classList.contains("circle") && $c2.classList.contains("circle")) {
    alert("victoire des cercles");
  }
  //COL 2 Victory
  else if ($a2.classList.contains("x") && $b2.classList.contains("x") && $c2.classList.contains("x")) {
    alert("victoire des croix");
  } else if ($a2.classList.contains("circle") && $b2.classList.contains("circle") && $c2.classList.contains("circle")) {
    alert("victoire des cercles");
  }
  //COL 3 Victory
  else if ($a3.classList.contains("x") && $b3.classList.contains("x") && $c3.classList.contains("x")) {
    alert("victoire des croix");
  } else if ($a3.classList.contains("circle") && $b3.classList.contains("circle") && $c3.classList.contains("circle")) {
    alert("victoire des cercles");
  }

  //DIAG1 Top L to Bot - R Victory
  else if ($a1.classList.contains("x") && $b2.classList.contains("x") && $c3.classList.contains("x")) {
    alert("victoire des croix");
  } else if ($a1.classList.contains("circle") && $b2.classList.contains("circle") && $c3.classList.contains("circle")) {
    alert("victoire des cercles");
  }
  //DIAG2 Bot L to Top R Victory
  else if ($c1.classList.contains("x") && $b2.classList.contains("x") && $a3.classList.contains("x")) {
    alert("victoire des croix");
  } else if ($c1.classList.contains("circle") && $b2.classList.contains("circle") && $a3.classList.contains("circle")) {
    alert("victoire des cercles");
  }
  //draw condition
  else if ($a1.classList.length > 1 && $a2.classList.length > 1 && $a3.classList.length > 1 && $b1.classList.length > 1 && $b2.classList.length > 1 && $b3.classList.length > 1 && $c1.classList.length > 1 && $c2.classList.length > 1 && $c3.classList.length > 1) {
    $winMess.;
  }
};*/

//listen $board pour plasser les classes sur les divs enfant
$board.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("x") || e.target.classList.contains("circle")) {
    return;
  }
  e.target.classList.add(toggleTurn());
  winCondition();
});
