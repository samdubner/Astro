# Astro
[live link](https://samdubner.github.io/Astro/)

![Astro home page with a starry space themed background](https://i.imgur.com/645nphW.png)

Astro is a top down space game with inspiration from Asteroids. The goal is to stay alive as long as possible surviving waves of enemies and dangerous space rocks.

## Features

### Asteroids
Throughout the entire game Astro will spawn destructible entities that you, as the player, must dodge to stay alive. There are always 8 asteroids spawned at any given time, and they are removed once they leave the visible area of the screen.

### Endless waves of enemies
Astro features a wave system such that the waves will progressively increase in difficulty over time
```js
/// from Astro's draw method
    if (this.wave.spawnedEnemies === this.wave.size && 
        this.wave.enemiesLeft === 0 &&
        this.wave.ongoing) {
      this.startNextWave();
    }
  
/// Astro's method to start a new wave
startNextWave() {
  this.wave.ongoing = false;
  setTimeout(() => {
    let newEnemies = Math.floor(Math.random() * 3);
    let nextWaveSize = this.wave.size + newEnemies;
    this.wave = {
      count: this.wave.count + 1,
      enemiesLeft: 0,
      spawnedEnemies: 0,
      enemiesLeftInWave: nextWaveSize,
      size: nextWaveSize,
      ongoing: true
    };
  }, 3500)
}
```

### Highscores
Astro makes use of the localStorage web API in order to cache highscores between separate games and sessions

## Future Plans
* More Enemy Types
* Ship Upgrade System
