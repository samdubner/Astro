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

  draw(delta) {
    this.allObjects().forEach((obj, idx) => {
      obj.move(delta);
      obj.draw();
      if (this.asteroids.length < 10) this.spawnAsteroid();
      if (obj.isOutOfBounds()) {
        this.asteroids.splice(idx - 1, 1);
      }
    });
  }
}

export default Game;
