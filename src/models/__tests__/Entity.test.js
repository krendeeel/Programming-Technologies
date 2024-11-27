const Entity = require('../Entity');

describe('Entity', () => {
    test('should not allow instantiation of abstract class', () => {
        expect(() => new Entity(1)).toThrow();
    });
});