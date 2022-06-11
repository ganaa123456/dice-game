// toglogchiin eeljig hadgalah huwisagch , 1r toglogchiig 0 , 2r toglogchiig 1 gej temdeglene //

var activePlayer = 1;

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

var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
