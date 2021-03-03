class Entity {
    constructor(canvas) {
        this.canvas = canvas;
        this.pos = [0, 0];
        this.vel = [0, 0];
        this.color = "#ff0000";
    }

    draw() {
        let ctx = this.canvas.getContext("2d")
        ctx.beginPath()
        ctx.arc(100, 75, 50, 0, 2 * Math.PI)
        ctx.fillStyle = "green"
        ctx.fill();
    }

}

export default Entity;