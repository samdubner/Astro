import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game(ctx.canvas.width, ctx.canvas.height, ctx);
        this.ctx = ctx;
    }

    start() {
        let pause = setInterval(() => {
            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;
            this.game.draw();
        }, 10)
    }
}

export default GameView;