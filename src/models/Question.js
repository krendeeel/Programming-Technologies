const Entity = require('./Entity');

class Question extends Entity {
    #status = 'pending';

    constructor(id, text, status = 'pending') {
        super(id);
        this._text = text;
        this._answers = [];
        this.#status = status;
    }

    get text() {
        return this._text;
    }

    get status() {
        return this.#status;
    }

    get answers() {
        return this._answers;
    }

    addAnswer(answer) {
        this._answers.push(answer);
        if (this._answers.length > 0) {
            this.#status = 'answered';
        }
    }

    close() {
        this.#status = 'closed';
    }

    toString() {
        return `Question ID: ${this._id}, Text: ${this._text}, Status: ${this.#status}`;
    }
}

module.exports = Question;