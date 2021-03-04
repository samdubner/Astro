import Asteroid from "./asteroid.js";
import Ship from "./ship.js";

class Game {
  constructor(DIM_X, DIM_Y, ctx) {
    this.asteroids = [];
    this.ctx = ctx;
    this.ship = new Ship(ctx);
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
  }

  allObjects() {
    return [this.ship, ...this.asteroids];
  }

  centerPosition() {
    return [this.DIM_X / 2, this.DIM_Y / 2];
  }

  spawnAsteroid() {
    this.asteroids.push(new Asteroid(this.ctx));
  }

  checkCollisions() {
      this.ship.lasers.forEach((laser, i) => {
          this.asteroids.forEach((asteroid, j) => {
            let distance = Math.sqrt(((laser.pos[0] - asteroid.pos[0]) ** 2) + ((laser.pos[1] - asteroid.pos[1])**2))
            if(distance < 50) {
                this.ship.lasers.splice(i, 1)
                this.asteroids.splice(j, 1)
            }
          })
      })

      this.asteroids.forEach((asteroid, i) => {
          let distance = Math.sqrt(
            (this.ship.pos[0] - asteroid.pos[0]) ** 2 +
            (this.ship.pos[1] - asteroid.pos[1]) ** 2
          );

          if (distance < 50) {
              this.ship.health--
              this.asteroids.splice(i, 1)
              console.log(this.ship.health);
          }
      })
  }

  draw(delta) {
    this.allObjects().forEach((obj, idx) => {
      obj.move(delta);
      this.checkCollisions()
      obj.draw();
      if (this.asteroids.length < 10) this.spawnAsteroid();
      if (obj.isOutOfBounds()) {
        this.asteroids.splice(idx - 1, 1);
      }
    });
  }
}

export default Game;
