let comp_points = 0,
  p_points = 0;
let btn = document.getElementsByClassName("btn");
let computer = document.getElementById("computer");
let player = document.getElementById("player");
let score = document.getElementById("score");
let result = document.getElementById("result");
/*----------------------------------------------------------------*/
function computer_play() {
  let comp_move = Math.floor(Math.random() * 3 + 1);
  if (comp_move === 1) {
    computer.setAttribute("src", "Media/Rock.png");
  } else if (comp_move === 2) {
    computer.setAttribute("src", "Media/Paper.png");
  } else {
    computer.setAttribute("src", "Media/Scissors.png");
  }
  return comp_move;
}
/*----------------------------------------------------------------*/

btn[0].onclick = function () {
  player.setAttribute("src", "Media/Rock.png");

  let cpu = computer_play();
  if (cpu == 1) {
    result.innerHTML = "Draw";
  } else if (cpu == 2) {
    comp_points++;
    result.innerHTML = "Computer Won";
  } else {
    p_points++;
    result.innerHTML = "Player Won";
  }

  score.innerHTML = `${p_points} - ${comp_points}`;
};

btn[1].onclick = function () {
  player.setAttribute("src", "Media/Paper.png");

  let cpu = computer_play();
  if (cpu == 2) {
    result.innerHTML = "Draw";
  } else if (cpu == 3) {
    comp_points++;
    result.innerHTML = "Computer Won";
  } else {
    p_points++;
    result.innerHTML = "Player Won";
  }

  score.innerHTML = `${p_points} - ${comp_points}`;
};

btn[2].onclick = function () {
  player.setAttribute("src", "Media/Scissors.png");

  let cpu = computer_play();
  if (cpu == 3) {
    result.innerHTML = "Draw";
  } else if (cpu == 1) {
    comp_points++;
    result.innerHTML = "Computer Won";
  } else {
    p_points++;
    result.innerHTML = "Player Won";
  }
  score.innerHTML = `${p_points} - ${comp_points}`;
};
