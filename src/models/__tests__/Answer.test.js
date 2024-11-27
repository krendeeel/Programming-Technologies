const Answer = require('../Answer');
const Consultant = require('../Consultant');

describe('Answer', () => {
    let answer;
    let consultant;

    beforeEach(() => {
        consultant = new Consultant(1, 'Test Consultant');
        answer = new Answer('Test answer', consultant);
    });

    test('should have a text', () => {
        expect(answer.text).toBe('Test answer');
    });

    test('should have a consultant', () => {
        expect(answer.consultant).toBe(consultant);
    });

    test('should have a timestamp', () => {
        expect(answer.timestamp).toBeInstanceOf(Date);
    });
});