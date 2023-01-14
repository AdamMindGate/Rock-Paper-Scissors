let comp_points = 0;
let p_points = 0;
let btn = document.getElementsByClassName("btn");
let computer = document.getElementById("computer");
let player = document.getElementById("player");
let score = document.getElementById("score");
let result = document.getElementById("result");
/*----------------------------------------------------------------*/
let comp_move;
function computer_play() {
  //everytime the functions is called, it will generate new random number
  comp_move = Math.floor(Math.random() * 3 + 1);
  // the random number determine the next move for the computer
  if (comp_move === 1) {
    computer.setAttribute("src", "Media/Rock.png");
  } else if (comp_move === 2) {
    computer.setAttribute("src", "Media/Paper.png");
  } else {
    computer.setAttribute("src", "Media/Scissors.png");
  }
  // returns the computer move & console log for testing
  return computer, comp_move, console.log(comp_move);
}
/*----------------------------------------------------------------*/

// determining the player move each time he clicks on a button
btn[0].onclick = function () {
  player.setAttribute("src", "Media/Rock.png");
  // runs the computer move after each click
  computer_play();
  // determine the winner
  if (comp_move === 2) {
    result.innerHTML = "Computer Won";
    // console.log("you lost");
    comp_points += 1;
  } else if (comp_move !== 1) {
    console.log("you won");
    result.innerHTML = "Player Won";
    p_points += 1;
  } else {
    result.innerHTML = "Draw";
    console.log("draw");
  }
  // update the score
  score.innerHTML = `${p_points} - ${comp_points}`;
};

btn[1].onclick = function () {
  player.setAttribute("src", "Media/Paper.png");
  computer_play();
  // determine the winner
  if (comp_move === 3) {
    result.innerHTML = "Computer Won";
    // console.log("you lost");
    comp_points += 1;
  } else if (comp_move !== 2) {
    result.innerHTML = "Player Won";
    // console.log("you won");
    p_points += 1;
  } else {
    result.innerHTML = "Draw";
  }
  // update the score
  score.innerHTML = `${p_points} - ${comp_points}`;
};

btn[2].onclick = function () {
  player.setAttribute("src", "Media/Scissors.png");
  computer_play();
  // determine the winner
  if (comp_move === 1) {
    result.innerHTML = "Computer Won";
    // console.log("you lost");
    comp_points += 1;
  } else if (comp_move !== 3) {
    console.log("you won");
    result.innerHTML = "Player Won";
    p_points += 1;
  } else {
    result.innerHTML = "Draw";
  }
  // update the score
  score.innerHTML = `${p_points} - ${comp_points}`;
};
