window.addEventListener("load", start);

function start() {
  console.log(start);
  getUserSelection();
}

function getUserSelection() {
  console.log(getUserSelection);

  document.querySelector(".rock").addEventListener("click", playerChoice);
  document.querySelector(".paper").addEventListener("click", playerChoice);
  document.querySelector(".scissors").addEventListener("click", playerChoice);
}

function playerChoice() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  myRandom = Math.floor(Math.random() * 3 + 1);
  console.log(myRandom);

  //Make them shake
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  //show player choice
  if (this.classList.contains("rock")) {
    document.querySelector("#player1").addEventListener("animationend", function () {
      document.querySelector("#player1").classList.remove("shake");
      document.querySelector("#player1").classList.remove("paper");
      document.querySelector("#player1").classList.remove("scissors");
      document.querySelector("#player1").classList.remove("rock");
      document.querySelector("#player1").classList.add("rock");
    });
  } else if (this.classList.contains("paper")) {
    document.querySelector("#player1").addEventListener("animationend", function () {
      document.querySelector("#player1").classList.remove("shake");
      document.querySelector("#player1").classList.remove("paper");
      document.querySelector("#player1").classList.remove("scissors");
      document.querySelector("#player1").classList.remove("rock");
      document.querySelector("#player1").classList.add("paper");
    });
  } else if (this.classList.contains("scissors")) {
    document.querySelector("#player1").addEventListener("animationend", function () {
      document.querySelector("#player1").classList.remove("shake");
      document.querySelector("#player1").classList.remove("paper");
      document.querySelector("#player1").classList.remove("scissors");
      document.querySelector("#player1").classList.remove("rock");
      document.querySelector("#player1").classList.add("scissors");
    });
  }

  computerChoice(myRandom);
}

function computerChoice(myRandom) {
  //show computer choice
  if (myRandom == "1") {
    document.querySelector("#player2").addEventListener("animationend", function () {
      document.querySelector("#player2").classList.remove("shake");
      document.querySelector("#player2").classList.remove("paper");
      document.querySelector("#player2").classList.remove("scissors");
      document.querySelector("#player2").classList.remove("rock");
      document.querySelector("#player2").classList.add("rock");
    });
  } else if (myRandom == "2") {
    document.querySelector("#player2").addEventListener("animationend", function () {
      document.querySelector("#player2").classList.remove("shake");
      document.querySelector("#player2").classList.remove("paper");
      document.querySelector("#player2").classList.remove("scissors");
      document.querySelector("#player2").classList.remove("rock");
      document.querySelector("#player2").classList.add("paper");
    });
  } else if (myRandom == "3") {
    document.querySelector("#player2").addEventListener("animationend", function () {
      document.querySelector("#player2").classList.remove("shake");
      document.querySelector("#player2").classList.remove("paper");
      document.querySelector("#player2").classList.remove("scissors");
      document.querySelector("#player2").classList.remove("rock");
      document.querySelector("#player2").classList.add("scissors");
    });
  }
  determineWinner();
}

function determineWinner() {
  if (document.getElementById("player1").classList.contains("rock") && document.getElementById("player2").classList.contains("rock")) {
    showDraw();
  } else if (document.getElementById("player1").classList.contains("rock") && document.getElementById("player2").classList.contains("paper")) {
    showLost();
  } else if (document.getElementById("player1").classList.contains("rock") && document.getElementById("player2").classList.contains("scissors")) {
    showWin();
  } else if (document.getElementById("player1").classList.contains("paper") && document.getElementById("player2").classList.contains("rock")) {
    showWin();
  } else if (document.getElementById("player1").classList.contains("paper") && document.getElementById("player2").classList.contains("paper")) {
    showDraw();
  } else if (document.getElementById("player1").classList.contains("paper") && document.getElementById("player2").classList.contains("scissors")) {
    showLost();
  } else if (document.getElementById("player1").classList.contains("scissors") && document.getElementById("player2").classList.contains("rock")) {
    showLost();
  } else if (document.getElementById("player1").classList.contains("scissors") && document.getElementById("player2").classList.contains("paper")) {
    showWin();
  } else if (document.getElementById("player1").classList.contains("scissors") && document.getElementById("player2").classList.contains("scissors")) {
    showDraw();
  }
}

function showWin() {
  console.log("show win");
  document.querySelector("#win").classList.remove("hidden");
}

function showLost() {
  console.log("show lost");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("show draw");
  document.querySelector("#draw").classList.remove("hidden");
}
