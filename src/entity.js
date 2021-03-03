class Entity {
    constructor(ctx) {
        this.ctx = ctx;
        this.pos = [0, 0];
        this.vel = [0, 0];
        this.color = "#ff0000";
    }

    draw() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.arc(100, 75, 50, 0, 2 * Math.PI)
        ctx.fillStyle = "green"
        ctx.fill();
    }

}

export default Entity;