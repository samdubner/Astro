import Game from "./game";

class GameView {
  constructor(ctx) {
    this.game = new Game(ctx, this);
    this.ctx = ctx;
    this.lastTime = 0;
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
    this.paused = false;
    this.gameOver = true;

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!this.gameOver) {
          this.paused = !this.paused;
          this.togglePauseScreen();
        }
      }
    });
  }

  start() {
    this.gameOver = false;
    requestAnimationFrame(this.animate);
  }

  animate(currentTime) {
    let scoreInfo = document.getElementById("score-info");
    this.gameOver
      ? (scoreInfo.style.visibility = "visible")
      : (scoreInfo.style.visibility = "hidden");
    if (!this.gameOver && !this.paused) {
      this.ctx.canvas.width = window.innerWidth;
      this.ctx.canvas.height = window.innerHeight;
      let delta = currentTime - this.lastTime;
      this.game.draw(delta);
    } else if (this.gameOver) {
      let currentScore = document.getElementById("game-over-score");
      let highscore = document.getElementById("highscore");
      let storedHighscore = localStorage.getItem("highscore");
      if (storedHighscore === null || this.game.score > storedHighscore) {
        localStorage.setItem("highscore", this.game.score);
        storedHighscore = this.game.score;
      }
      currentScore.innerHTML = `Your Score: ${this.game.score}`;
      highscore.innerHTML = `Highscore: ${storedHighscore}`;
    }
    this.lastTime = currentTime;
    requestAnimationFrame(this.animate);
  }

  togglePauseScreen() {
    let pauseInfo = document.getElementById("pause-info");
    if (this.paused) {
      pauseInfo.style.visibility = "visible";
    } else {
      pauseInfo.style.visibility = "hidden";
    }
  }
}

export default GameView;
