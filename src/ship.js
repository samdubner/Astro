import Entity from "./entity"

class Ship extends Entity {
    constructor(ctx) {
        super(ctx)
        this.moveSpeed = 1;
        this.pos = [500, 500]
        this.keypressHandler = this.keypressHandler.bind(this)
        document.onkeydown = this.keypressHandler;
    }

    keypressHandler(e) {
        switch(e.key) {
            case "w":
            case "ArrowUp":
                this.updateVelocity("up")
                break;
            case "s":
            case "ArrowDown":
                this.updateVelocity("down")
                break;
            case "d":
            case "ArrowRight":
                this.updateVelocity("right")
                break;
            case "a":
            case "ArrowLeft":
                this.updateVelocity("left")
                break;
            case " ":
                console.log("shoot");
                break;
            default:
                console.log(e.key)
        }
    }

    updateVelocity(direction) {
        console.log(`add velocity to ${direction} direction`)
        switch(direction) {
            case "up":
                this.vel[1] += this.moveSpeed;
                break;
            case "down":
                this.vel[1] -= this.moveSpeed;
                break;
            case "right":
                this.vel[0] += this.moveSpeed;
                break;
            case "left":
                this.vel[0] -= this.moveSpeed;
        }
    }

    updateUiVelocity() {
        let velTextX = document.getElementById("ship-velocity-x")
        let velTextY = document.getElementById("ship-velocity-y")
        let [x, y] = this.vel
        let x_vel = Math.round(10 * x) / 10;
        let y_vel = Math.round(10 * y) / 10;
        velTextX.innerHTML = `x: ${x_vel}`;
        velTextY.innerHTML = `y: ${y_vel}`;
    }

    draw() {
        this.updateUiVelocity()
        if (Math.abs(this.vel[0]) - 0.1 < 0.1) this.vel[0] = 0;

        if(this.vel[0] > 0) {
            this.vel[0] -= 0.1;
        } else if(this.vel[0] < 0) {
            this.vel[0] += 0.1;
        }

        if (this.vel[1] > 0) {
          this.vel[1] -= 0.1;
        } else if (this.vel[0] < 0) {
          this.vel[1] += 0.1;
        }
        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1]

        this.ctx.beginPath();
        this.ctx.moveTo(this.pos[0], this.pos[1]);
        this.ctx.lineTo(this.pos[0] + 50, this.pos[1] + 50);
        this.ctx.lineTo(this.pos[0] + 100, this.pos[1] + 50);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        // this.ctx.fillRect(200, 200, 200, 200);
        console.log("drew ship")
    }


}

export default Ship;