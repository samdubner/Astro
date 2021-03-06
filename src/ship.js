import Entity from "./entity";
import Laser from "./laser";

class Ship extends Entity {
  constructor(ctx, game) {
    super(ctx);
    this.moveSpeed = 0.5;
    this.rotationSpeed = 3;
    this.health = 5;
    this.ammo = 5;
    this.game = game;

    this.lasers = [];

    this.pos = [window.innerWidth / 2, window.innerHeight / 2];
    this.rotation = 0;

    this.keypresses = {
      ArrowUp: { pressed: false, func: () => this.updateVelocity("forward") },
      ArrowRight: { presssed: false, func: () => this.updateRotation("right") },
      ArrowLeft: { pressed: false, func: () => this.updateRotation("left") },
    };

    document.addEventListener("keydown", (e) => {
      if (e.key in this.keypresses) this.keypresses[e.key].pressed = true;
      if (e.key === " ") this.spawnLaser();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key in this.keypresses) this.keypresses[e.key].pressed = false;
    });
  }

  updateVelocity(direction) {
    if (Math.sqrt(this.vel[0] ** 2 + this.vel[1] ** 2) > 8) return;
    switch (direction) {
      case "forward":
        this.vel[0] +=
          this.moveSpeed * Math.cos((this.rotation * Math.PI) / 180);
        this.vel[1] +=
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

  spawnLaser() {
    if (this.ammo === 0) return;
    this.lasers.push(new Laser(this.ctx, this));
    this.ammo--;
    setTimeout(() => {
      if (this.ammo < 10) this.ammo++;
    }, 2000);
  }

  updateUi() {
    let scoreEle = document.getElementById("score-text");
    let waveCount = document.getElementById("wave-count");
    let enemyCount = document.getElementById("enemy-count");
    let healthCount = document.getElementById("health-count");
    scoreEle.innerText = `${this.game.score}`;
    waveCount.innerText = `${this.game.wave.count}`;
    enemyCount.innerText = `${this.game.wave.enemiesLeftInWave}`;
    healthCount.innerText = `${this.health}`;
  }

  executeKeydowns() {
    //for every pressed key invoke the method associated with that key
    for (let key in this.keypresses) {
      if (this.keypresses[key].pressed) this.keypresses[key].func();
    }
  }

  move(delta = 1) {
    this.executeKeydowns();
    this.updateUi();

    //wrap spaceship
    if (this.pos[0] < 0) this.pos[0] += window.innerWidth;
    if (this.pos[1] < 0) this.pos[1] += window.innerHeight;
    this.pos[0] = this.pos[0] % window.innerWidth;
    this.pos[1] = this.pos[1] % window.innerHeight;

    //Have ship stop moving in case space drag didn't entirely stop it
    if (Math.abs(this.vel[0]) - 0.1 < 0.1) this.vel[0] = 0;
    if (Math.abs(this.vel[1]) - 0.1 < 0.1) this.vel[1] = 0;

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

    //update position
    this.pos[0] += (this.vel[0] * delta) / 10;
    this.pos[1] += (this.vel[1] * delta) / 10;

    this.lasers.forEach((laser, i) => {
      laser.move(delta);

      if (laser.isOutOfBounds()) this.lasers.splice(i, 1);
    });
  }

  draw() {
    //draw lasers
    this.lasers.forEach((laser) => laser.draw());

    //draw ship
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.pos[0], this.pos[1]);
    this.ctx.rotate((Math.PI / 180) * (this.rotation - 90));
    this.ctx.moveTo(-25, -25);
    this.ctx.lineTo(0, 25);
    this.ctx.lineTo(25, -25);
    this.ctx.lineTo(0, -14);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
}

export default Ship;
