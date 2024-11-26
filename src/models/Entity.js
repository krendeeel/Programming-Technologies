class Entity {
    constructor(id) {
        if (this.constructor !== Entity) {
            this._id = id;
            return this;
        }
        throw new Error("Абстрактные классы не могут быть созданы рекурсивно!");
    }

    get id() {
        return this._id;
    }

    toString() {
        return `Entity ID: ${this._id}`;
    }
}

module.exports = Entity;