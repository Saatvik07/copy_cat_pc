const num_arr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const start = document.getElementById("start_btn");
const reset = document.getElementById("reset");
const scoreboard = document.getElementById("score");
const keyboard = document.getElementById("keyboard");
const row_1 = document.getElementById("row_1");
const row_2 = document.getElementById("row_2");
const row_3 = document.getElementById("row_3");
const row_4 = document.getElementById("row_4");
const end_game = document.getElementById("end_game");
const won = document.getElementById("won");
const lost = document.getElementById("lost");
let seconds = document.getElementById("seconds");
let score_val = 0;
let key_active = 12345;
let secs = 30;
let game_begin = 0;
let reset_game = 0;
const GameOver = () => {
  row_1.style.display = "none";
  row_2.style.display = "none";
  row_3.style.display = "none";
  row_4.style.display = "none";
  end_game.style.display = "block";
  if (score_val >= 15) {
    won.style.display = "block";
  } else {
    lost.style.display = "block";
  }
};
function Decrement() {
  if (document.getElementById) {
    seconds.innerHTML = secs;
    if (secs === 0 || reset_game === 1) {
      if (reset_game != 1) GameOver();
      return;
    }
    if (secs < 10) {
      seconds.style.color = "red";
    }
    secs--;
    setTimeout("Decrement()", 1000);
  }
}
function countdown() {
  setTimeout("Decrement()", 60);
}
const resetGame = () => {
  score_val = 0;
  secs = 30;
  seconds.innerHTML = 30;
  game_begin = 0;
  reset_game = 1;
  scoreboard.innerHTML = `Score:${score_val}`;
  document.getElementById(`key_${key_active}`).style.backgroundColor = "";
  correct.style = "";
  incorrect.style = "";
  start.style.display = "";
  won.style = "";
  lost.style = "";
  row_1.style = "";
  row_2.style = "";
  row_3.style = "";
  row_4.style = "";
  end_game.style = "";
  seconds.style = "";
};
const randomKey = () => {
  const num = Math.floor(Math.random() * 36);
  return num;
};
const Idkey = (num) => {
  return "key_" + num;
};

const startGame = () => {
  start.style.display = "none";
  game_begin = 1;
  reset_game = 0;
  if (game_begin === 1) {
    countdown();
    lightUpKey();
  }
};
const lightUpKey = () => {
  key_active = randomKey();
  const a = Idkey(key_active);
  const light_up = document.getElementById(a);
  light_up.style.backgroundColor = "yellow";
  //game_begin = 1;
};
document.addEventListener("keydown", (event) => {
  const light_up = document.getElementById(`key_${key_active}`);
  if (event.key === `${num_arr[key_active]}` && game_begin === 1) {
    score_val++;
    scoreboard.innerHTML = `Score:${score_val}`;
    light_up.style.backgroundColor = "";
    correct.style = "background-color:green; box-shadow: 0 0 10px green, 0 0 40px green;color:black";
    incorrect.style = "";
    lightUpKey();
  } else if (game_begin === 1) {
    score_val--;
    scoreboard.innerHTML = `Score:${score_val}`;
    light_up.style.backgroundColor = "";
    incorrect.style = "background-color:red; box-shadow: 0 0 10px red, 0 0 40px red;color:black";
    correct.style = "";
    lightUpKey();
  }
});

start.onclick = startGame;
reset.onclick = resetGame;
//document.addEventListener("keydown", increaseScore(event, 0));
