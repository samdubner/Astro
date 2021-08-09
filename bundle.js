/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n\r\n\r\nclass Asteroid extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\r\n  constructor(ctx) {\r\n    super(ctx);\r\n    this.randomPos();\r\n    this.randomRot = Math.floor(Math.random() * 100) / 10;\r\n    let rand_x\r\n    let rand_y\r\n    do {\r\n        rand_x = Math.floor(Math.random() * 10) - 4;\r\n        rand_y = Math.floor(Math.random() * 10) - 4;\r\n    } while (rand_x === 0 && rand_y === 0)\r\n    this.vel = [rand_x, rand_y];\r\n  }\r\n\r\n  randomPos() {\r\n    let x = Math.floor(Math.random() * window.innerWidth)\r\n    let rand = Math.random() < 0.5;\r\n    let y = rand ? -50 : window.innerHeight + 50;\r\n    this.pos = [x, y]\r\n  }\r\n\r\n  move(delta) {\r\n    this.pos[0] += this.vel[0] * delta / 20;\r\n    this.pos[1] += this.vel[1] * delta / 20;\r\n  }\r\n\r\n  draw() {\r\n    let asteroidImage = new Image(50, 50)\r\n    asteroidImage.src = \"./assets/asteroid.png\"\r\n    this.ctx.drawImage(asteroidImage, this.pos[0] - 50, this.pos[1] - 50)\r\n  }\r\n\r\n  isOutOfBounds() {\r\n    if (\r\n      this.pos[0] > window.innerWidth + 51 ||\r\n      this.pos[0] < -51 ||\r\n      this.pos[1] > window.innerHeight + 51 ||\r\n      this.pos[1] < -51\r\n    ) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\r\n\n\n//# sourceURL=webpack://astro/./src/asteroid.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n\r\n\r\nclass Enemy extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(ctx, ship) {\r\n        super(ctx)\r\n        this.randomPos();\r\n        this.vel = [0, 0]\r\n        this.ship = ship;\r\n        this.moveSpeed = 4;\r\n        this.rotation = 0;\r\n    }\r\n\r\n    randomPos() {\r\n        let y = Math.floor(Math.random() * window.innerHeight)\r\n        let x = Math.random() < 0.5 ? -25 : window.innerWidth + 25\r\n        this.pos = [x, y]\r\n    }\r\n\r\n    move(delta) {\r\n        this.vel[0] = this.moveSpeed * Math.cos(this.rotation) * delta / 20\r\n        this.vel[1] = this.moveSpeed * Math.sin(this.rotation) * delta / 20\r\n    }\r\n\r\n    draw() {\r\n        this.pos[0] -= this.vel[0]\r\n        this.pos[1] -= this.vel[1]\r\n\r\n        this.rotation = Math.atan2(\r\n          this.pos[1] - this.ship.pos[1],\r\n          this.pos[0] - this.ship.pos[0]\r\n        );\r\n\r\n        this.ctx.save();\r\n        this.ctx.beginPath();\r\n        this.ctx.translate(this.pos[0], this.pos[1]);\r\n        this.ctx.rotate((this.rotation + (Math.PI / 2)));\r\n        this.ctx.moveTo(-20, 0);\r\n        this.ctx.lineTo(0, 40);\r\n        this.ctx.lineTo(20, 0);\r\n        this.ctx.fillStyle = \"red\";\r\n        this.ctx.fill();\r\n        this.ctx.closePath();\r\n        this.ctx.restore();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\n\n//# sourceURL=webpack://astro/./src/enemy.js?");

/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Entity {\r\n    constructor(ctx) {\r\n        this.ctx = ctx;\r\n        this.pos = [0, 0];\r\n        this.vel = [0, 0];\r\n    }\r\n\r\n    isOutOfBounds() {\r\n        return false;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\n\n//# sourceURL=webpack://astro/./src/entity.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n  constructor(ctx, view) {\r\n    this.ctx = ctx;\r\n    this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.default(ctx, this);\r\n\r\n    this.asteroids = [];\r\n    this.asteroidCount = 8;\r\n    this.enemies = [];\r\n\r\n    this.score = 0;\r\n\r\n    this.wave = {\r\n      count: 1,\r\n      enemiesLeft: 0,\r\n      spawnedEnemies: 0,\r\n      enemiesLeftInWave: 1,\r\n      size: 1,\r\n      ongoing: true\r\n    };\r\n\r\n    this.DIM_X = ctx.canvas.width;\r\n    this.DIM_Y = ctx.canvas.height;\r\n    this.view = view;\r\n\r\n    this.spawnEnemies();\r\n  }\r\n\r\n  allObjects() {\r\n    return [this.ship, ...this.asteroids, ...this.enemies];\r\n  }\r\n\r\n  spawnAsteroid() {\r\n    this.asteroids.push(new _asteroid_js__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx));\r\n  }\r\n\r\n  spawnEnemies() {\r\n    setInterval(() => {\r\n      if (this.wave.spawnedEnemies < this.wave.size) {\r\n        this.enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, this.ship));\r\n        this.wave.spawnedEnemies++;\r\n        this.wave.enemiesLeft++;\r\n      }\r\n    }, 2500);\r\n  }\r\n\r\n  checkCollisions() {\r\n    this.ship.lasers.forEach((laser, i) => {\r\n      this.asteroids.forEach((asteroid, j) => {\r\n        let distance = Math.sqrt(\r\n          (laser.pos[0] - asteroid.pos[0]) ** 2 +\r\n            (laser.pos[1] - asteroid.pos[1]) ** 2\r\n        );\r\n        if (distance < 50) {\r\n          this.ship.lasers.splice(i, 1);\r\n          this.asteroids.splice(j, 1);\r\n        }\r\n      });\r\n\r\n      this.enemies.forEach((enemy, j) => {\r\n        let distance = Math.sqrt(\r\n            (laser.pos[0] - enemy.pos[0]) ** 2 +\r\n            (laser.pos[1] - enemy.pos[1]) ** 2\r\n        );\r\n\r\n        if (distance < 30) {\r\n          this.enemies.splice(j, 1);\r\n          this.ship.lasers.splice(i, 1)\r\n          this.wave.enemiesLeft--;\r\n          this.wave.enemiesLeftInWave--;\r\n          this.score += 50;\r\n        }\r\n      });\r\n    });\r\n\r\n    this.asteroids.forEach((asteroid, i) => {\r\n      let distance = Math.sqrt(\r\n        (this.ship.pos[0] - asteroid.pos[0]) ** 2 +\r\n          (this.ship.pos[1] - asteroid.pos[1]) ** 2\r\n      );\r\n\r\n      if (distance < 70) {\r\n        this.ship.health--;\r\n        this.asteroids.splice(i, 1);\r\n      }\r\n    });\r\n\r\n    this.enemies.forEach((enemy, i) => {\r\n      let distance = Math.sqrt(\r\n        (this.ship.pos[0] - enemy.pos[0]) ** 2 +\r\n        (this.ship.pos[1] - enemy.pos[1]) ** 2\r\n      );\r\n\r\n      if (distance < 65) {\r\n        this.ship.health--;\r\n        this.enemies.splice(i, 1);\r\n        this.wave.enemiesLeft--;\r\n        this.wave.enemiesLeftInWave--;\r\n      }\r\n    });\r\n  }\r\n\r\n  startNextWave() {\r\n    this.wave.ongoing = false;\r\n    setTimeout(() => {\r\n      let newEnemies = Math.floor(Math.random() * 3);\r\n      let nextWaveSize = this.wave.size + newEnemies;\r\n      this.wave = {\r\n        count: this.wave.count + 1,\r\n        enemiesLeft: 0,\r\n        spawnedEnemies: 0,\r\n        enemiesLeftInWave: nextWaveSize,\r\n        size: nextWaveSize,\r\n        ongoing: true\r\n      };\r\n    }, 3500)\r\n  }\r\n\r\n  draw(delta) {\r\n    if (this.ship.health <= 0) this.view.gameOver = true;\r\n    if (this.asteroids.length < this.asteroidCount) this.spawnAsteroid();\r\n    if (this.wave.spawnedEnemies === this.wave.size && \r\n        this.wave.enemiesLeft === 0 &&\r\n        this.wave.ongoing) {\r\n      this.startNextWave();\r\n    }\r\n    this.checkCollisions();\r\n    this.allObjects().forEach((obj, idx) => {\r\n      obj.move(delta);\r\n      obj.draw();\r\n      if (obj.isOutOfBounds()) {\r\n        this.asteroids.splice(idx - 1, 1);\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\r\n\n\n//# sourceURL=webpack://astro/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\nclass GameView {\r\n  constructor(ctx) {\r\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(ctx, this);\r\n    this.ctx = ctx;\r\n    this.lastTime = 0;\r\n    this.start = this.start.bind(this);\r\n    this.animate = this.animate.bind(this);\r\n    this.paused = false;\r\n    this.gameOver = true;\r\n\r\n    document.addEventListener(\"keydown\", (e) => {\r\n      if (e.key === \"Escape\") {\r\n        if (!this.gameOver) {\r\n          this.paused = !this.paused;\r\n          this.togglePauseScreen();\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  start() {\r\n    this.gameOver = false;\r\n    requestAnimationFrame(this.animate);\r\n  }\r\n\r\n  animate(currentTime) {\r\n    let scoreInfo = document.getElementById(\"score-info\");\r\n    this.gameOver\r\n      ? (scoreInfo.style.visibility = \"visible\")\r\n      : (scoreInfo.style.visibility = \"hidden\");\r\n    if (!this.gameOver && !this.paused) {\r\n      this.ctx.canvas.width = window.innerWidth;\r\n      this.ctx.canvas.height = window.innerHeight;\r\n      let delta = currentTime - this.lastTime;\r\n      this.game.draw(delta);\r\n    } else if (this.gameOver) {\r\n      let currentScore = document.getElementById(\"game-over-score\");\r\n      let highscore = document.getElementById(\"highscore\");\r\n      let storedHighscore = localStorage.getItem(\"highscore\");\r\n      if (storedHighscore === null || this.game.score > storedHighscore) {\r\n        localStorage.setItem(\"highscore\", this.game.score);\r\n        storedHighscore = this.game.score;\r\n      }\r\n      currentScore.innerHTML = `Your Score: ${this.game.score}`;\r\n      highscore.innerHTML = `Highscore: ${storedHighscore}`;\r\n    }\r\n    this.lastTime = currentTime;\r\n    requestAnimationFrame(this.animate);\r\n  }\r\n\r\n  togglePauseScreen() {\r\n    let pauseInfo = document.getElementById(\"pause-info\");\r\n    if (this.paused) {\r\n      pauseInfo.style.visibility = \"visible\";\r\n    } else {\r\n      pauseInfo.style.visibility = \"hidden\";\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\r\n\n\n//# sourceURL=webpack://astro/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  let canvas = document.getElementById(\"astro-canvas\");\r\n  let ctx = canvas.getContext(\"2d\");\r\n\r\n  ctx.canvas.width = window.innerWidth;\r\n  ctx.canvas.height = window.innerHeight;\r\n\r\n  let gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__.default(ctx);\r\n\r\n  let mainMenu = document.getElementById(\"main-menu\");\r\n  let uiOverlay = document.getElementById(\"ui-container\");\r\n\r\n  let startButton = document.getElementById(\"start-game\");\r\n  // let htpButton = document.getElementById(\"instructions\");\r\n  // let aboutButton = document.getElementById(\"about-game\");\r\n\r\n  startButton.addEventListener(\"click\", (e) => {\r\n    mainMenu.style.visibility = \"hidden\";\r\n    uiOverlay.style.visibility = \"visible\";\r\n    canvas.style.visibility = \"visible\";\r\n    gameView.start();\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    console.log(\"key was pressed\");\r\n    if(e.key === \"r\" && gameView.gameOver) {\r\n      console.log(\"r was pressed and game is over\")\r\n      gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__.default(ctx)\r\n      gameView.start();\r\n    }\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack://astro/./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n\r\n\r\nclass Laser extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\r\n  constructor(ctx, ship) {\r\n    super(ctx);\r\n    let shipAngle = (ship.rotation * Math.PI) / 180;\r\n    let x_vel = 20 * Math.cos(shipAngle) + ship.vel[0];\r\n    let y_vel = 20 * Math.sin(shipAngle) + ship.vel[1];\r\n    this.vel = [x_vel, y_vel];\r\n    this.pos = [ship.pos[0], ship.pos[1]];\r\n  }\r\n\r\n  move(delta) {\r\n    this.pos[0] += (this.vel[0] * delta) / 20;\r\n    this.pos[1] += (this.vel[1] * delta) / 20;\r\n  }\r\n\r\n  draw() {\r\n    let ctx = this.ctx;\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], 5, 0, 2 * Math.PI);\r\n    ctx.fillStyle = \"white\";\r\n    ctx.fill();\r\n    ctx.strokeStyle = \"black\";\r\n    ctx.stroke();\r\n  }\r\n\r\n  isOutOfBounds() {\r\n    if (\r\n      this.pos[0] > window.innerWidth + 51 ||\r\n      this.pos[0] < -51 ||\r\n      this.pos[1] > window.innerHeight + 51 ||\r\n      this.pos[1] < -51\r\n    ) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Laser);\r\n\n\n//# sourceURL=webpack://astro/./src/laser.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\r\n\r\n\r\nclass Ship extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\r\n  constructor(ctx, game) {\r\n    super(ctx);\r\n    this.moveSpeed = 1;\r\n    this.rotationSpeed = 2;\r\n    this.health = 5;\r\n    this.ammo = 2;\r\n    this.game = game;\r\n\r\n    this.lasers = [];\r\n\r\n    this.pos = [window.innerWidth / 2, window.innerHeight / 2];\r\n    this.rotation = 0;\r\n\r\n    this.keypresses = {\r\n      ArrowUp: { pressed: false, func: () => this.updateVelocity(\"forward\") },\r\n      ArrowRight: { presssed: false, func: () => this.updateRotation(\"right\") },\r\n      ArrowLeft: { pressed: false, func: () => this.updateRotation(\"left\") },\r\n    };\r\n\r\n    document.addEventListener(\"keydown\", (e) => {\r\n      if (e.key in this.keypresses) this.keypresses[e.key].pressed = true;\r\n      if (e.key === \" \") this.spawnLaser();\r\n    });\r\n\r\n    document.addEventListener(\"keyup\", (e) => {\r\n      if (e.key in this.keypresses) this.keypresses[e.key].pressed = false;\r\n    });\r\n  }\r\n\r\n  updateVelocity(direction) {\r\n    if (Math.sqrt(this.vel[0] ** 2 + this.vel[1] ** 2) > 8) return;\r\n    switch (direction) {\r\n      case \"forward\":\r\n        this.vel[0] +=\r\n          this.moveSpeed * Math.cos((this.rotation * Math.PI) / 180);\r\n        this.vel[1] +=\r\n          this.moveSpeed * Math.sin((this.rotation * Math.PI) / 180);\r\n        break;\r\n    }\r\n  }\r\n\r\n  updateRotation(direction) {\r\n    switch (direction) {\r\n      case \"right\":\r\n        this.rotation += this.rotationSpeed;\r\n        break;\r\n      case \"left\":\r\n        this.rotation -= this.rotationSpeed;\r\n    }\r\n  }\r\n\r\n  spawnLaser() {\r\n    if (this.ammo === 0) return;\r\n    this.lasers.push(new _laser__WEBPACK_IMPORTED_MODULE_1__.default(this.ctx, this));\r\n    this.ammo--;\r\n    setTimeout(() => {\r\n      if (this.ammo < 10) this.ammo++;\r\n    }, 2000);\r\n  }\r\n\r\n  updateUi() {\r\n    let scoreEle = document.getElementById(\"score-text\");\r\n    let waveCount = document.getElementById(\"wave-count\");\r\n    let enemyCount = document.getElementById(\"enemy-count\");\r\n    let healthCount = document.getElementById(\"health-count\");\r\n    scoreEle.innerText = `${this.game.score}`;\r\n    waveCount.innerText = `${this.game.wave.count}`;\r\n    enemyCount.innerText = `${this.game.wave.enemiesLeftInWave}`;\r\n    healthCount.innerText = `${this.health}`;\r\n  }\r\n\r\n  executeKeydowns() {\r\n    //for every pressed key invoke the method associated with that key\r\n    for (let key in this.keypresses) {\r\n      if (this.keypresses[key].pressed) this.keypresses[key].func();\r\n    }\r\n  }\r\n\r\n  move(delta = 1) {\r\n    this.executeKeydowns();\r\n    this.updateUi();\r\n\r\n    //wrap spaceship\r\n    if (this.pos[0] < 0) this.pos[0] += window.innerWidth;\r\n    if (this.pos[1] < 0) this.pos[1] += window.innerHeight;\r\n    this.pos[0] = this.pos[0] % window.innerWidth;\r\n    this.pos[1] = this.pos[1] % window.innerHeight;\r\n\r\n    //Have ship stop moving in case space drag didn't entirely stop it\r\n    if (Math.abs(this.vel[0]) - 0.1 < 0.1) this.vel[0] = 0;\r\n    if (Math.abs(this.vel[1]) - 0.1 < 0.1) this.vel[1] = 0;\r\n\r\n    if (this.vel[0] > 0) {\r\n      this.vel[0] -= 0.05;\r\n    } else if (this.vel[0] < 0) {\r\n      this.vel[0] += 0.05;\r\n    }\r\n\r\n    if (this.vel[1] > 0) {\r\n      this.vel[1] -= 0.05;\r\n   } else if (this.vel[1] < 0) {\r\n      this.vel[1] += 0.05;\r\n   }\r\n\r\n    //update position\r\n    this.pos[0] += (this.vel[0] * delta) / 10;\r\n    this.pos[1] += (this.vel[1] * delta) / 10;\r\n\r\n    this.lasers.forEach((laser, i) => {\r\n      laser.move(delta);\r\n\r\n      if (laser.isOutOfBounds()) this.lasers.splice(i, 1);\r\n    });\r\n  }\r\n\r\n  draw() {\r\n    //draw lasers\r\n    this.lasers.forEach((laser) => laser.draw());\r\n\r\n    //draw ship\r\n    this.ctx.save();\r\n    this.ctx.beginPath();\r\n    this.ctx.translate(this.pos[0], this.pos[1]);\r\n    this.ctx.rotate((Math.PI / 180) * (this.rotation - 90));\r\n    this.ctx.moveTo(-25, -25);\r\n    this.ctx.lineTo(0, 25);\r\n    this.ctx.lineTo(25, -25);\r\n    this.ctx.lineTo(0, -14);\r\n    this.ctx.fillStyle = \"white\";\r\n    this.ctx.fill();\r\n    this.ctx.closePath();\r\n    this.ctx.restore();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://astro/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;