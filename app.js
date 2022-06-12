// toglogchiin eeljig hadgalah huwisagch , 1r toglogchiig 0 , 2r toglogchiig 1 gej temdeglene //
var isNewGame;
var activePlayer;

// toglogchdiin tsugluulsan onoog hadgalah huwisagch

var scores;

//toglogchiin eeljindee tsugluulj bga onoog hadgalah huwisagch

var roundScore;

//shoonii ali talaaraa buusniig hadgalah huwisagch 1-6

var diceNumber = Math.floor(Math.random() * 6) + 1;

var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  isNewGame = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".dice").style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//Shoog shidehed zurag oorchlogddog bolgow

document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 sanamsargui too gargaj awah
  if (isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //shoonii zurgiig gargaj irle

    diceDom.style.display = "block";

    //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne

    diceDom.src = "dice-" + diceNumber + ".png";

    // Toglogchiin current onoog nemegduuldeg bolgono

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      SwitchToNextPlayer();
      diceDom.style.display = "none";
    }
  }
});

// hold button tohiruulah

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    roundScore = 0;
    if (scores[activePlayer] >= 10) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      SwitchToNextPlayer();
    }
  }
});
function SwitchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", initGame);
