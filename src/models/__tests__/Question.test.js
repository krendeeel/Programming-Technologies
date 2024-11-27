const Question = require('../Question');
const Consultant = require('../Consultant');

describe('Question', () => {
    let question;
    let consultant;

    beforeEach(() => {
        question = new Question(1, 'Test question');
        consultant = new Consultant(1, 'Test Consultant');
    });

    test('should initialize with pending status', () => {
        expect(question.status).toBe('pending');
    });

    test('should change status to answered when an answer is added', () => {
        consultant.answerQuestion(question, 'Test answer');
        expect(question.status).toBe('answered');
    });

    test('should close the question', () => {
        question.close();
        expect(question.status).toBe('closed');
    });

    test('should have answers', () => {
        consultant.answerQuestion(question, 'Test answer');
        expect(question.answers.length).toBe(1);
    });

    test('should have a toString method', () => {
        expect(question.toString()).toBe('Question ID: 1, Text: Test question, Status: pending');
    });
});