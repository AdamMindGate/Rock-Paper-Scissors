// variables for tracking computer points and player points
let comp_points = 0,
    p_points = 0;

// references to HTML elements
let btn = document.getElementsByClassName("btn");
let computer = document.getElementById("computer");
let player = document.getElementById("player");
let score = document.getElementById("score");
let result = document.getElementById("result");

// computes the computer behaviour
function computer_play() {
    let comp_move = Math.floor(Math.random() * 3 + 1);
    animation(computer, comp_move);
    return comp_move;
}

// animate player's choice by changing the image source based on the move.
function animation(player, move) {
    if (move === 1) {
        player.setAttribute("src", "Media/Rock.png");
    } else if (move === 2) {
        player.setAttribute("src", "Media/Paper.png");
    } else {
        player.setAttribute("src", "Media/Scissors.png");
    }
}

// calculates the winner
function winner(player_move, comp_move) {
    if (comp_move == player_move) {
        result.innerHTML = "Draw";
    } else if (
        (player_move == 2 && comp_move == 1) ||
        (player_move == 1 && comp_move == 3) ||
        (player_move == 3 && comp_move == 2) ||
        (player_move == 2 && comp_move == 1)
    ) {
        result.innerHTML = "Player Won";
        p_points++;
    } else {
        result.innerHTML = "Computer Won";
        comp_points++;
    }
    score.innerHTML = `${p_points} - ${comp_points}`;
}

// event handler for when the player selects "Rock" choice
btn[0].onclick = function () {
    let player_move = 1;
    animation(player, player_move);
    winner(player_move, computer_play());
};

// event handler for when the player selects "Paper" choice
btn[1].onclick = function () {
    let player_move = 2;
    animation(player, player_move);
    winner(player_move, computer_play());
};

// event handler for when the player selects "Scissors" choice
btn[2].onclick = function () {
    let player_move = 3;
    animation(player, player_move);
    winner(player_move, computer_play());
};
