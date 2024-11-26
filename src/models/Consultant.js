const Entity = require('./Entity');
const Answer = require('./Answer');

class Consultant extends Entity {
    constructor(id, name) {
        super(id);
        this._name = name;
        this._answeredQuestions = [];
    }

    get name() {
        return this._name;
    }

    get answeredQuestions() {
        return this._answeredQuestions;
    }

    answerQuestion(question, answerText) {
        const answer = new Answer(answerText, this);
        question.addAnswer(answer);
        this._answeredQuestions.push(question);
    }

    toString() {
        return `Consultant ID: ${this._id}, Name: ${this._name}`;
    }
}

module.exports = Consultant;