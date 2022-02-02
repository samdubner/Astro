import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("astro-canvas");
  let ctx = canvas.getContext("2d");

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  let gameView = new GameView(ctx);

  let mainMenu = document.getElementById("main-menu");
  let uiOverlay = document.getElementById("ui-container");

  let startButton = document.getElementById("start-game");

  let volumeButton = document.getElementById("volume-button");
  let audioPlayer = document.getElementById("background-audio");

  startButton.addEventListener("click", (e) => {
    mainMenu.style.visibility = "hidden";
    uiOverlay.style.visibility = "visible";
    canvas.style.visibility = "visible";
    gameView.start();
  });

  volumeButton.addEventListener("click", (e) => {
    audioPlayer.volume = 0.2;

    if (audioPlayer.muted) {
      volumeButton.classList.remove("fa-volume-mute");
      volumeButton.classList.add("fa-volume-up");
      audioPlayer.muted = false;
    } else {
      volumeButton.classList.remove("fa-volume-up");
      volumeButton.classList.add("fa-volume-mute");
      audioPlayer.muted = true;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "r" && gameView.gameOver) {
      gameView = new GameView(ctx);
      gameView.start();
    }
  });
});
