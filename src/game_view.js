import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game(ctx.canvas.width, ctx.canvas.height);
        this.ctx = ctx;
    }

    start() {
        setInterval(() => {
            this.game.moveObjects();
            this.game.draw();
        }, 20)
    }
}

export default GameView;