import Asteroid from "./asteroid.js"
import Ship from "./ship.js"

class Game {
    constructor(DIM_X, DIM_Y, ctx) {
        this.asteroids = []
        this.ctx = ctx;
        this.ship = new Ship(ctx);
        this.DIM_X = DIM_X;
        this.DIM_Y = DIM_Y;
    }

    allObjects() {
        return [this.ship, ...this.asteroids]
    }

    spawnAsteroid() {
        this.asteroids.push(new Asteroid(this.ctx))
    }

    centerPosition() {
        return [this.DIM_X / 2, this.DIM_Y / 2];
    }

    moveObjects() {
        this.asteroids.forEach(asteroid => {
            console.log(asteroid)
        })
    }

    draw() {
        for (let entity of this.allObjects()) {
            entity.draw();
        }
    }
}

export default Game;