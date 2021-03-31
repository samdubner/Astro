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
  // let htpButton = document.getElementById("instructions");
  // let aboutButton = document.getElementById("about-game");

  startButton.addEventListener("click", (e) => {
    mainMenu.style.visibility = "hidden";
    uiOverlay.style.visibility = "visible";
    canvas.style.visibility = "visible";
    gameView.start();
  });

  document.addEventListener("keydown", (e) => {
    console.log("key was pressed");
    if(e.key === "r" && gameView.gameOver) {
      console.log("r was pressed and game is over")
      gameView = new GameView(ctx)
      gameView.start();
    }
  })
});
