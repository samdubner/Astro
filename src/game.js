import Asteroid from "./asteroid.js";
import Ship from "./ship.js";
import Enemy from "./enemy.js";

class Game {
  constructor(DIM_X, DIM_Y, ctx, view) {
    this.ctx = ctx;
    this.ship = new Ship(ctx);

    this.asteroids = [];
    this.enemies = [];

    this.wave = {
      count: 1,
      enemiesLeft: 1,
      spawnedEnemies: 0,
      size: 1,
      ongoing: true,
    };

    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.view = view;

    this.spawnEnemies();
  }

  allObjects() {
    return [this.ship, ...this.asteroids, ...this.enemies];
  }

  spawnAsteroid() {
    this.asteroids.push(new Asteroid(this.ctx));
  }

  spawnEnemies() {
    setInterval(() => {
      if (this.wave.ongoing && this.wave.spawnedEnemies < this.wave.size) {
        this.enemies.push(new Enemy(this.ctx, this.ship));
        this.wave.spawnedEnemies++;
      }
    }, 5000);
  }

  checkCollisions() {
    this.ship.lasers.forEach((laser, i) => {
      this.asteroids.forEach((asteroid, j) => {
        let distance = Math.sqrt(
          (laser.pos[0] - asteroid.pos[0]) ** 2 +
            (laser.pos[1] - asteroid.pos[1]) ** 2
        );
        if (distance < 50) {
          this.ship.lasers.splice(i, 1);
          this.asteroids.splice(j, 1);
        }
      });

      this.enemies.forEach((enemy, i) => {
        let distance = Math.sqrt(
            (laser.pos[0] - enemy.pos[0]) ** 2 +
            (laser.pos[1] - enemy.pos[1]) ** 2
        );

        if (distance < 30) {
          this.enemies.splice(i, 1);
        }
      });
    });

    this.asteroids.forEach((asteroid, i) => {
      let distance = Math.sqrt(
        (this.ship.pos[0] - asteroid.pos[0]) ** 2 +
          (this.ship.pos[1] - asteroid.pos[1]) ** 2
      );

      if (distance < 70) {
        this.ship.health--;
        this.asteroids.splice(i, 1);
      }
    });

    this.enemies.forEach((enemy, i) => {
      let distance = Math.sqrt(
        (this.ship.pos[0] - enemy.pos[0]) ** 2 +
          (this.ship.pos[1] - enemy.pos[1]) ** 2
      );

      if (distance < 30) {
        this.ship.health--;
        this.enemies.splice(i, 1);
      }
    });
  }

  draw(delta) {
    if (this.ship.health <= 0) this.view.gameOver = true;
    if (this.asteroids.length < 10) this.spawnAsteroid();
    this.checkCollisions();
    this.allObjects().forEach((obj, idx) => {
      obj.move(delta);
      obj.draw();
      if (obj.isOutOfBounds()) {
        this.asteroids.splice(idx - 1, 1);
      }
    });
  }
}

export default Game;
