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
    animation(computer, comp_move);
    return comp_move;
}

function animation(player, move) {
    if (move === 1) {
        player.setAttribute("src", "Media/Rock.png");
    } else if (move === 2) {
        player.setAttribute("src", "Media/Paper.png");
    } else {
        player.setAttribute("src", "Media/Scissors.png");
    }
}

function winner(player_move, comp_move) {
    if (comp_move == player_move) {
        result.innerHTML = "Draw";
    } else if (player_move == 2 && comp_move == 1) {
        result.innerHTML = "Player Won";
        p_points++;
    } else if (player_move == 1 && comp_move == 3) {
        result.innerHTML = "Player Won";
        p_points++;
    } else if (player_move == 3 && comp_move == 2) {
        result.innerHTML = "Player Won";
        p_points++;
    } else if (player_move == 2 && comp_move == 1) {
        result.innerHTML = "Player Won";
        p_points++;
    } else {
        result.innerHTML = "Computer Won";
        comp_points++;
    }
}
// -------------------
btn[0].onclick = function () {
    let player_move = 1;
    animation(player, player_move);
    winner(player_move, computer_play());
    score.innerHTML = `${p_points} - ${comp_points}`;
};

btn[1].onclick = function () {
    let player_move = 2;
    animation(player, player_move);
    winner(player_move, computer_play());
    score.innerHTML = `${p_points} - ${comp_points}`;
};

btn[2].onclick = function () {
    let player_move = 3;
    animation(player, player_move);
    winner(player_move, computer_play());
    score.innerHTML = `${p_points} - ${comp_points}`;
};
