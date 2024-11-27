const Consultant = require('../Consultant');
const Question = require('../Question');

describe('Consultant', () => {
    let consultant;
    let question;

    beforeEach(() => {
        consultant = new Consultant(1, 'Test Consultant');
        question = new Question(1, 'Test question');
    });

    test('should answer a question', () => {
        consultant.answerQuestion(question, 'Test answer');
        expect(question.answers.length).toBe(1);
        expect(consultant.answeredQuestions.length).toBe(1);
    });

    test('should have answered questions', () => {
        consultant.answerQuestion(question, 'Test answer');
        expect(consultant.answeredQuestions).toContain(question);
    });

    test('should have a toString method', () => {
        expect(consultant.toString()).toBe('Consultant ID: 1, Name: Test Consultant');
    });
});