import Asteroid from "./asteroid.js"
import Ship from "./ship.js"

class Game {
    constructor(DIM_X, DIM_Y) {
        this.asteroids = []
        this.DIM_X = DIM_X;
        this.DIM_Y = DIM_Y;

        // setInterval(() => this.spawnAsteroid(), 1000)
    }

    spawnAsteroid() {
        console.log(this)
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
        // console.log("draw")
    }
}

export default Game;