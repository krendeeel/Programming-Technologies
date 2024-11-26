const Entity = require('./Entity');

class Answer extends Entity {
    constructor(text, consultant) {
        super(crypto.randomUUID());
        this._text = text;
        this._consultant = consultant;
        this._timestamp = new Date();
    }

    get text() {
        return this._text;
    }

    get consultant() {
        return this._consultant;
    }

    get timestamp() {
        return this._timestamp;
    }

    toString() {
        return `Answer ID: ${this._id}, Text: ${this._text}, Consultant: ${this._consultant.name}, Timestamp: ${this._timestamp}`;
    }
}

module.exports = Answer;