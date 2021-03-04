import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game(ctx.canvas.width, ctx.canvas.height, ctx);
        this.ctx = ctx;
        this.lastTime = 0;
        this.start = this.start.bind(this)
        this.animate = this.animate.bind(this)
    }

    start() {
        requestAnimationFrame(this.animate)
    }

    animate(currentTime) {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        let delta = currentTime - this.lastTime
        this.game.draw(delta)
        this.lastTime = currentTime
        requestAnimationFrame(this.animate)
    }
}

export default GameView;