/*




*/
let btn = document.getElementsByClassName("btn");

let player = document.getElementById("player");
btn[0].onclick = function () {
  player.setAttribute("src", "Media/Rock.png");
};

btn[1].onclick = function () {
  player.setAttribute("src", "Media/Paper.png");
};

btn[2].onclick = function () {
  player.setAttribute("src", "Media/Scissors.png");
};

/* /\/\/\ /\/\/\ /\/\/\ /\/\/\ /\/\/\ /\/\/\ /\/\/\  /\/\/\ /\/\/\ /\/\/\*/