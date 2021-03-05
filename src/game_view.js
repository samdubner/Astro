import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game(ctx.canvas.width, ctx.canvas.height, ctx, this);
        this.ctx = ctx;
        this.lastTime = 0;
        this.start = this.start.bind(this)
        this.animate = this.animate.bind(this)
        this.paused = false;
        this.gameOver = true;

        document.addEventListener("keydown", (e) => {
            if(e.key === "Escape") {
                if(!this.gameOver) this.paused = !this.paused
            }
        })
    }

    start() {
        this.gameOver = false;
        requestAnimationFrame(this.animate)
    }

    animate(currentTime) {
        if (!this.gameOver && !this.paused) {
            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;
            let delta = currentTime - this.lastTime
            console.log(currentTime)
            console.log(delta)
            this.game.draw(delta)
        }
        this.lastTime = currentTime;
        requestAnimationFrame(this.animate)
    }
}

export default GameView;