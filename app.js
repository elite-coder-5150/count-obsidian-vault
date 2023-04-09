const fs = require('fs');
const path = require('path');

const countVault = async (dirPath) => {
    try {
        const files = fs.readdirSync(dirPath);
        const mdFiles = files.filter(file => file.endsWith('.md'));

        let totalWordCount = 0;
        let totalCharCount = 0;
        let pageCount = 0;

        for (const file of mdFiles) {
            const filePath = path.join(dirPath, file);
            const content = fs.readFileSync(filePath, 'utf-8');

            const wordCount = countWords(content);
            totalWordCount += wordCount;

            const charCount = countChars(content);
            totalCharCount += charCount;

            const _pageCount = PageCount(content);
            pageCount += _pageCount;
        }

        console.log('total word count', totalWordCount);
        console.log('total char count', totalCharCount);
        console.log('total page count', pageCount);
    } catch (err) {
        console.error('error reading directory', err);
    }
};

 const countWords = (content) => {
    const words = content.trim().split(/\s+/);
    return words.length;
};

 const countChars = (content) => {
    const chars = content.trim().split('');
    return chars.length;
};

 const PageCount = (content) => {
    const words = content.trim().split(/\s+/);
    return Math.round(words.length / 500);
 }

const validPath = path.join(process.env.HOME || process.env.USERPROFILE, 'Documents', 'random thoughts', 'random-thoughts');

countVault(validPath)
    .then(() => console.log('Finished counting words and characters'))
    .catch((error) => console.error('Error:', error));

/**
 * directory:
 * - random-thoughts
 * output:
     * total word count 114323
     * total char count 771163
 */
