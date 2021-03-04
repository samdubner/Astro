class Entity {
    constructor(ctx) {
        this.ctx = ctx;
        this.pos = [0, 0];
        this.vel = [0, 0];
    }

    isOutOfBounds() {
        return false;
    }

}

export default Entity;