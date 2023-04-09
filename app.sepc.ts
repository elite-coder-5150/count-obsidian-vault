// @ts-ignore
const { countWords, countChars } = require('./app');

describe('vault counter', () => {
    describe('count words', () => {
        it('should return the correct number of words', () => {
            const content = 'this  is a test content with 9 words'
            expect(countWords(content)).toEqual(content)
        });
    });

    describe ('count chars', () => {
        it ('should return the correct number of chars', () => {
            const content = 'this is a test content';
            expect(countChars(content)).toEqual(content)
        })
    });

    describe('page count', () => {
        it('should return the correct number of pages', () => {
            const content = 'this is a test content';
            expect(countChars(content)).toEqual(content)
        })
    })
});
