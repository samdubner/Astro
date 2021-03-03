import Entity from "./entity";

class Ship extends Entity {
  constructor(ctx) {
    super(ctx);
    this.moveSpeed = 2;
    this.rotationSpeed = 5;

    this.pos = [500, 500];
    this.rotation = 0;

    this.keypressHandler = this.keypressHandler.bind(this);
    document.addEventListener("keydown", this.keypressHandler);
  }

  keypressHandler(e) {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        this.updateVelocity("forward");
        break;
      case "s":
      case "ArrowDown":
        this.updateVelocity("backward");
        break;
      case "d":
      case "ArrowRight":
        this.updateRotation("right");
        break;
      case "a":
      case "ArrowLeft":
        this.updateRotation("left");
        break;
      case " ":
        console.log("shoot");
        break;
      default:
        console.log(e.key);
    }
  }

  updateVelocity(direction) {
    switch (direction) {
      case "forward":
        this.vel[0] +=
          this.moveSpeed * Math.cos((this.rotation * Math.PI) / 180);
        this.vel[1] +=
          this.moveSpeed * Math.sin((this.rotation * Math.PI) / 180);
        break;
      case "backward":
        this.vel[0] -=
          this.moveSpeed * Math.cos((this.rotation * Math.PI) / 180);
        this.vel[1] -=
          this.moveSpeed * Math.sin((this.rotation * Math.PI) / 180);
        break;
    }
  }

  updateRotation(direction) {
    switch (direction) {
      case "right":
        this.rotation += this.rotationSpeed;
        break;
      case "left":
        this.rotation -= this.rotationSpeed;
    }
  }

  updateUi() {
    let velTextX = document.getElementById("ship-velocity-x");
    let velTextY = document.getElementById("ship-velocity-y");
    let posTextX = document.getElementById("ship-position-x");
    let posTextY = document.getElementById("ship-position-y");
    let [x, y] = this.vel;
    let x_vel = Math.round(10 * x) / 10;
    let y_vel = Math.round(10 * y) / 10;
    velTextX.innerHTML = `x: ${x_vel}`;
    velTextY.innerHTML = `y: ${y_vel}`;
    [x, y] = this.pos;
    posTextX.innerHTML = `x: ${x}`;
    posTextY.innerHTML = `y: ${y}`;
  }

  draw() {
    this.updateUi();
    if (Math.abs(this.vel[0]) - 0.1 < 0.1) this.vel[0] = 0;
    if (Math.abs(this.vel[1]) - 0.1 < 0.1) this.vel[1] = 0;
    this.pos[0] = this.pos[0] % window.innerWidth;
    this.pos[1] = this.pos[1] % window.innerHeight;
        if (this.pos[0] < 0)
          this.pos[0] = window.innerWidth;
        if (this.pos[1] < 0)
          this.pos[1] += window.innerHeight;

    if (this.vel[0] > 0) {
      this.vel[0] -= 0.1;
    } else if (this.vel[0] < 0) {
      this.vel[0] += 0.1;
    }

    if (this.vel[1] > 0) {
      this.vel[1] -= 0.1;
    } else if (this.vel[1] < 0) {
      this.vel[1] += 0.1;
    }

    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.pos[0], this.pos[1]);
    this.ctx.rotate((Math.PI / 180) * (this.rotation - 90) );
    this.ctx.moveTo(-25, 0);
    this.ctx.lineTo(0, 50);
    this.ctx.lineTo(25, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
}

export default Ship;
