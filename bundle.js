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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n\n\nclass Asteroid extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(ctx) {\n    super(ctx);\n    this.randomPos();\n    this.randomRot = Math.floor(Math.random() * 100) / 10;\n    let rand_x\n    let rand_y\n    do {\n        rand_x = Math.floor(Math.random() * 10) - 4;\n        rand_y = Math.floor(Math.random() * 10) - 4;\n    } while (rand_x === 0 && rand_y === 0)\n    this.vel = [rand_x, rand_y];\n  }\n\n  randomPos() {\n    let x = Math.floor(Math.random() * window.innerWidth)\n    let rand = Math.random() < 0.5;\n    let y = rand ? -50 : window.innerHeight + 50;\n    this.pos = [x, y]\n  }\n\n  move(delta) {\n    this.pos[0] += this.vel[0] * delta / 20;\n    this.pos[1] += this.vel[1] * delta / 20;\n  }\n\n  draw() {\n    let asteroidImage = new Image(50, 50)\n    asteroidImage.src = \"../assets/asteroid.png\"\n    this.ctx.drawImage(asteroidImage, this.pos[0] - 50, this.pos[1] - 50)\n  }\n\n  isOutOfBounds() {\n    if (\n      this.pos[0] > window.innerWidth + 51 ||\n      this.pos[0] < -51 ||\n      this.pos[1] > window.innerHeight + 51 ||\n      this.pos[1] < -51\n    ) {\n      return true;\n    }\n    return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n\n//# sourceURL=webpack://astro/./src/asteroid.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n\n\nclass Enemy extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(ctx, ship) {\n        super(ctx)\n        this.randomPos();\n        this.vel = [0, 0]\n        this.ship = ship;\n        this.moveSpeed = 4;\n        this.rotation = 0;\n    }\n\n    randomPos() {\n        let y = Math.floor(Math.random() * window.innerHeight)\n        let x = Math.random() < 0.5 ? -25 : window.innerWidth + 25\n        this.pos = [x, y]\n    }\n\n    move(delta) {\n        this.vel[0] = this.moveSpeed * Math.cos(this.rotation) * delta / 20\n        this.vel[1] = this.moveSpeed * Math.sin(this.rotation) * delta / 20\n    }\n\n    draw() {\n        this.pos[0] -= this.vel[0]\n        this.pos[1] -= this.vel[1]\n\n        this.rotation = Math.atan2(\n          this.pos[1] - this.ship.pos[1],\n          this.pos[0] - this.ship.pos[0]\n        );\n\n        this.ctx.save();\n        this.ctx.beginPath();\n        this.ctx.translate(this.pos[0], this.pos[1]);\n        this.ctx.rotate((this.rotation + (Math.PI / 2)));\n        this.ctx.moveTo(-20, 0);\n        this.ctx.lineTo(0, 40);\n        this.ctx.lineTo(20, 0);\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fill();\n        this.ctx.closePath();\n        this.ctx.restore();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\n\n//# sourceURL=webpack://astro/./src/enemy.js?");

/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Entity {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.pos = [0, 0];\n        this.vel = [0, 0];\n    }\n\n    isOutOfBounds() {\n        return false;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\n\n//# sourceURL=webpack://astro/./src/entity.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n\n\n\n\nclass Game {\n  constructor(ctx, view) {\n    this.ctx = ctx;\n    this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.default(ctx, this);\n\n    this.asteroids = [];\n    this.asteroidCount = 8;\n    this.enemies = [];\n\n    this.score = 0;\n\n    this.wave = {\n      count: 1,\n      enemiesLeft: 0,\n      spawnedEnemies: 0,\n      enemiesLeftInWave: 1,\n      size: 1,\n      ongoing: true\n    };\n\n    this.DIM_X = ctx.canvas.width;\n    this.DIM_Y = ctx.canvas.height;\n    this.view = view;\n\n    this.spawnEnemies();\n  }\n\n  allObjects() {\n    return [this.ship, ...this.asteroids, ...this.enemies];\n  }\n\n  spawnAsteroid() {\n    this.asteroids.push(new _asteroid_js__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx));\n  }\n\n  spawnEnemies() {\n    setInterval(() => {\n      if (this.wave.spawnedEnemies < this.wave.size) {\n        this.enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, this.ship));\n        this.wave.spawnedEnemies++;\n        this.wave.enemiesLeft++;\n      }\n    }, 2500);\n  }\n\n  checkCollisions() {\n    this.ship.lasers.forEach((laser, i) => {\n      this.asteroids.forEach((asteroid, j) => {\n        let distance = Math.sqrt(\n          (laser.pos[0] - asteroid.pos[0]) ** 2 +\n            (laser.pos[1] - asteroid.pos[1]) ** 2\n        );\n        if (distance < 50) {\n          this.ship.lasers.splice(i, 1);\n          this.asteroids.splice(j, 1);\n        }\n      });\n\n      this.enemies.forEach((enemy, j) => {\n        let distance = Math.sqrt(\n            (laser.pos[0] - enemy.pos[0]) ** 2 +\n            (laser.pos[1] - enemy.pos[1]) ** 2\n        );\n\n        if (distance < 30) {\n          this.enemies.splice(j, 1);\n          this.ship.lasers.splice(i, 1)\n          this.wave.enemiesLeft--;\n          this.wave.enemiesLeftInWave--;\n          this.score += 50;\n        }\n      });\n    });\n\n    this.asteroids.forEach((asteroid, i) => {\n      let distance = Math.sqrt(\n        (this.ship.pos[0] - asteroid.pos[0]) ** 2 +\n          (this.ship.pos[1] - asteroid.pos[1]) ** 2\n      );\n\n      if (distance < 70) {\n        this.ship.health--;\n        this.asteroids.splice(i, 1);\n      }\n    });\n\n    this.enemies.forEach((enemy, i) => {\n      let distance = Math.sqrt(\n        (this.ship.pos[0] - enemy.pos[0]) ** 2 +\n        (this.ship.pos[1] - enemy.pos[1]) ** 2\n      );\n\n      if (distance < 65) {\n        this.ship.health--;\n        this.enemies.splice(i, 1);\n        this.wave.enemiesLeft--;\n        this.wave.enemiesLeftInWave--;\n      }\n    });\n  }\n\n  startNextWave() {\n    this.wave.ongoing = false;\n    setTimeout(() => {\n      let newEnemies = Math.floor(Math.random() * 3);\n      let nextWaveSize = this.wave.size + newEnemies;\n      this.wave = {\n        count: this.wave.count + 1,\n        enemiesLeft: 0,\n        spawnedEnemies: 0,\n        enemiesLeftInWave: nextWaveSize,\n        size: nextWaveSize,\n        ongoing: true\n      };\n    }, 3500)\n  }\n\n  draw(delta) {\n    if (this.ship.health <= 0) this.view.gameOver = true;\n    if (this.asteroids.length < this.asteroidCount) this.spawnAsteroid();\n    if (this.wave.spawnedEnemies === this.wave.size && \n        this.wave.enemiesLeft === 0 &&\n        this.wave.ongoing) {\n      this.startNextWave();\n    }\n    this.checkCollisions();\n    this.allObjects().forEach((obj, idx) => {\n      obj.move(delta);\n      obj.draw();\n      if (obj.isOutOfBounds()) {\n        this.asteroids.splice(idx - 1, 1);\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://astro/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(ctx, this);\n    this.ctx = ctx;\n    this.lastTime = 0;\n    this.start = this.start.bind(this);\n    this.animate = this.animate.bind(this);\n    this.restartGame = this.restartGame.bind(this);\n    this.paused = false;\n    this.gameOver = true;\n\n    document.addEventListener(\"keydown\", (e) => {\n      if (e.key === \"Escape\") {\n        if (!this.gameOver) {\n          this.paused = !this.paused;\n          this.togglePauseScreen();\n        }\n      }\n    });\n\n    document.addEventListener(\"keydown\", this.restartGame);\n  }\n\n  start() {\n    this.gameOver = false;\n    requestAnimationFrame(this.animate);\n  }\n\n  animate(currentTime) {\n    let scoreInfo = document.getElementById(\"score-info\");\n    this.gameOver\n      ? (scoreInfo.style.visibility = \"visible\")\n      : (scoreInfo.style.visibility = \"hidden\");\n    if (!this.gameOver && !this.paused) {\n      this.ctx.canvas.width = window.innerWidth;\n      this.ctx.canvas.height = window.innerHeight;\n      let delta = currentTime - this.lastTime;\n      this.game.draw(delta);\n    } else if (this.gameOver) {\n      let currentScore = document.getElementById(\"game-over-score\");\n      let highscore = document.getElementById(\"highscore\");\n      let storedHighscore = localStorage.getItem(\"highscore\");\n      if (storedHighscore === null || this.game.score > storedHighscore) {\n        localStorage.setItem(\"highscore\", this.game.score);\n        storedHighscore = this.game.score;\n      }\n      currentScore.innerHTML = `Your Score: ${this.game.score}`;\n      highscore.innerHTML = `Highscore: ${storedHighscore}`;\n    }\n    this.lastTime = currentTime;\n    requestAnimationFrame(this.animate);\n  }\n\n  restartGame(e) {\n      if (e.key === \"r\" && this.gameOver) {\n      this.game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this);\n      this.start();\n    }\n  }\n\n  togglePauseScreen() {\n    let pauseInfo = document.getElementById(\"pause-info\");\n    if (this.paused) {\n      pauseInfo.style.visibility = \"visible\";\n    } else {\n      pauseInfo.style.visibility = \"hidden\";\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n\n//# sourceURL=webpack://astro/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"astro-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n\n  ctx.canvas.width = window.innerWidth;\n  ctx.canvas.height = window.innerHeight;\n\n  let gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__.default(ctx);\n\n  let mainMenu = document.getElementById(\"main-menu\")\n  let uiOverlay = document.getElementById(\"ui-container\")\n\n  let startButton = document.getElementById(\"start-game\")\n  let htpButton = document.getElementById(\"instructions\")\n  let aboutButton = document.getElementById(\"about-game\")\n\n  startButton.addEventListener(\"click\", (e) => {\n    mainMenu.style.visibility = \"hidden\"\n    uiOverlay.style.visibility = \"visible\"\n    canvas.style.visibility = \"visible\"\n    gameView.start();\n  })\n});\n\n\n//# sourceURL=webpack://astro/./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n\n\nclass Laser extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(ctx, ship) {\n    super(ctx);\n    let shipAngle = (ship.rotation * Math.PI) / 180;\n    let x_vel = 20 * Math.cos(shipAngle) + ship.vel[0];\n    let y_vel = 20 * Math.sin(shipAngle) + ship.vel[1];\n    this.vel = [x_vel, y_vel];\n    this.pos = [ship.pos[0], ship.pos[1]];\n  }\n\n  move(delta) {\n    this.pos[0] += (this.vel[0] * delta) / 20;\n    this.pos[1] += (this.vel[1] * delta) / 20;\n  }\n\n  draw() {\n    let ctx = this.ctx;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], 5, 0, 2 * Math.PI);\n    ctx.fillStyle = \"white\";\n    ctx.fill();\n    ctx.strokeStyle = \"black\";\n    ctx.stroke();\n  }\n\n  isOutOfBounds() {\n    if (\n      this.pos[0] > window.innerWidth + 51 ||\n      this.pos[0] < -51 ||\n      this.pos[1] > window.innerHeight + 51 ||\n      this.pos[1] < -51\n    ) {\n      return true;\n    }\n    return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Laser);\n\n\n//# sourceURL=webpack://astro/./src/laser.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entity.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\n\n\nclass Ship extends _entity__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(ctx, game) {\n    super(ctx);\n    this.moveSpeed = 0.5;\n    this.rotationSpeed = 3;\n    this.health = 5;\n    this.ammo = 5;\n    this.game = game;\n\n    this.lasers = [];\n\n    this.pos = [window.innerWidth / 2, window.innerHeight / 2 ];\n    this.rotation = 0;\n\n    this.keypresses = {\n      ArrowUp: { pressed: false, func: () => this.updateVelocity(\"forward\") },\n      ArrowRight: { presssed: false, func: () => this.updateRotation(\"right\") },\n      ArrowLeft: { pressed: false, func: () => this.updateRotation(\"left\") },\n    };\n\n    document.addEventListener(\"keydown\", (e) => {\n      if (e.key in this.keypresses) this.keypresses[e.key].pressed = true;\n      if (e.key === \" \") this.spawnLaser();\n    });\n\n    document.addEventListener(\"keyup\", (e) => {\n      if (e.key in this.keypresses) this.keypresses[e.key].pressed = false;\n    });\n  }\n\n  updateVelocity(direction) {\n    if (Math.sqrt(this.vel[0] ** 2 + this.vel[1] ** 2) > 8) return;\n    switch (direction) {\n      case \"forward\":\n        this.vel[0] +=\n          this.moveSpeed * Math.cos((this.rotation * Math.PI) / 180);\n        this.vel[1] +=\n          this.moveSpeed * Math.sin((this.rotation * Math.PI) / 180);\n        break;\n    }\n  }\n\n  updateRotation(direction) {\n    switch (direction) {\n      case \"right\":\n        this.rotation += this.rotationSpeed;\n        break;\n      case \"left\":\n        this.rotation -= this.rotationSpeed;\n    }\n  }\n\n  spawnLaser() {\n    if (this.ammo === 0) return;\n    this.lasers.push(new _laser__WEBPACK_IMPORTED_MODULE_1__.default(this.ctx, this));\n    this.ammo--;\n    setTimeout(() => {\n      if (this.ammo < 10) this.ammo++;\n    }, 2000);\n  }\n\n  updateUi() {\n    let scoreEle = document.getElementById(\"score-text\")\n    let waveCount = document.getElementById(\"wave-count\")\n    let enemyCount = document.getElementById(\"enemy-count\")\n    let healthCount = document.getElementById(\"health-count\")\n    scoreEle.innerText = `${this.game.score}`\n    waveCount.innerText = `${this.game.wave.count}`\n    enemyCount.innerText = `${this.game.wave.enemiesLeftInWave}`\n    healthCount.innerText = `${this.health}`\n  }\n\n  executeKeydowns() {\n    //for every pressed key invoke the method associated with that key\n    for (let key in this.keypresses) {\n      if (this.keypresses[key].pressed) this.keypresses[key].func();\n    }\n  }\n\n  move(delta = 1) {\n    this.executeKeydowns();\n    this.updateUi();\n\n    //wrap spaceship\n    if (this.pos[0] < 0) this.pos[0] += window.innerWidth;\n    if (this.pos[1] < 0) this.pos[1] += window.innerHeight;\n    this.pos[0] = this.pos[0] % window.innerWidth;\n    this.pos[1] = this.pos[1] % window.innerHeight;\n\n    //Have ship stop moving in case space drag didn't entirely stop it\n    if (Math.abs(this.vel[0]) - 0.1 < 0.1) this.vel[0] = 0;\n    if (Math.abs(this.vel[1]) - 0.1 < 0.1) this.vel[1] = 0;\n\n    //space drag\n    if (this.vel[0] > 0) {\n      this.vel[0] -= 0.1;\n    } else if (this.vel[0] < 0) {\n      this.vel[0] += 0.1;\n    }\n\n    if (this.vel[1] > 0) {\n      this.vel[1] -= 0.1;\n    } else if (this.vel[1] < 0) {\n      this.vel[1] += 0.1;\n    }\n\n    //update position\n    this.pos[0] += (this.vel[0] * delta) / 10;\n    this.pos[1] += (this.vel[1] * delta) / 10;\n\n    this.lasers.forEach((laser, i) => {\n      laser.move(delta);\n\n      if (laser.isOutOfBounds()) this.lasers.splice(i, 1);\n    });\n  }\n\n  draw() {\n    //draw lasers\n    this.lasers.forEach((laser) => laser.draw());\n\n    //draw ship\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.translate(this.pos[0], this.pos[1]);\n    this.ctx.rotate((Math.PI / 180) * (this.rotation - 90));\n    this.ctx.moveTo(-25, -25);\n    this.ctx.lineTo(0, 25);\n    this.ctx.lineTo(25, -25);\n    this.ctx.lineTo(0, -14);\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.ctx.restore();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://astro/./src/ship.js?");

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