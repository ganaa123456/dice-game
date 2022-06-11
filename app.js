// toglogchiin eeljig hadgalah huwisagch , 1r toglogchiig 0 , 2r toglogchiig 1 gej temdeglene //

var activePlayer = 0;

// toglogchdiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//toglogchiin eeljindee tsugluulj bga onoog hadgalah huwisagch

var roundScore = 0;

//shoonii ali talaaraa buusniig hadgalah huwisagch 1-6

var diceNumber = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;

// Program ehlehed beltgeh

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";

//Shoog shidehed zurag oorchlogddog bolgow

var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 sanamsargui too gargaj awah

  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //shoonii zurgiig gargaj irle

  diceDom.style.display = "block";

  //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne

  diceDom.src = "dice-" + diceNumber + ".png";

  // Toglogchiin current onoog nemegduuldeg bolgono

  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});
