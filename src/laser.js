import Entity from "./entity";

class Laser extends Entity {
  constructor(ctx, ship) {
    super(ctx);
    let shipAngle = (ship.rotation * Math.PI) / 180;
    let x_vel = 10 * Math.cos(shipAngle);
    let y_vel = 10 * Math.sin(shipAngle);
    this.vel = [x_vel, y_vel];
    this.pos = [ship.pos[0], ship.pos[1]];
  }

  move(delta) {
    this.pos[0] += (this.vel[0] * delta) / 20;
    this.pos[1] += (this.vel[1] * delta) / 20;
  }

  draw() {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  isOutOfBounds() {
    if (
      this.pos[0] > window.innerWidth + 51 ||
      this.pos[0] < -51 ||
      this.pos[1] > window.innerHeight + 51 ||
      this.pos[1] < -51
    ) {
      return true;
    }
    return false;
  }
}

export default Laser;
