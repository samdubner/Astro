import Entity from "./entity";

class Asteroid extends Entity {
  constructor(ctx) {
    super(ctx);
    this.randomPos();
    this.randomRot = Math.floor(Math.random() * 100) / 10;
    let rand_x
    let rand_y
    do {
        rand_x = Math.floor(Math.random() * 10) - 4;
        rand_y = Math.floor(Math.random() * 10) - 4;
    } while (rand_x === 0 && rand_y === 0)
    this.vel = [rand_x, rand_y];
  }

  randomPos() {
    let x = Math.floor(Math.random() * window.innerWidth)
    let rand = Math.random() < 0.5;
    let y = rand ? -50 : window.innerHeight + 50;
    this.pos = [x, y]
  }

  move(delta) {
    this.pos[0] += this.vel[0] * delta / 20;
    this.pos[1] += this.vel[1] * delta / 20;
  }

  draw() {
    let asteroidImage = new Image(50, 50)
    asteroidImage.src = "../assets/asteroid.png"
    this.ctx.drawImage(asteroidImage, this.pos[0] - 50, this.pos[1] - 50)
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

export default Asteroid;
