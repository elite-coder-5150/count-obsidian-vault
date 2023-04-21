const fs = require('fs');
const path = require('path');


const countVault = async (dirPath) => {
    try {
        const files = fs.readdirSync(dirPath);
        const mdFiles = files.filter(file => file.endsWith('.md'));

        let totalWordCount = 0;
        let largestFile = '';
        let largestFileWordCount = 0;

        for (const file of mdFiles) {
            const filePath = path.join(dirPath, file);
            const content = fs.readFileSync(filePath, 'utf8');

            // Remove content between {{<excalidraw>}} and {{</excalidraw>}} tags
            const contentWithoutExcalidraw = content.replace(/{{<excalidraw>}}[\s\S]*?{{<\/excalidraw>}}/g, '');

            const wordCount = countWords(contentWithoutExcalidraw);
            totalWordCount += wordCount;

            // Find the largest file by word count
            if (wordCount > largestFileWordCount) {
                largestFileWordCount = wordCount;
                largestFile = file;
            }
        }

        console.log('total word count', totalWordCount);
        console.log('Largest file:', largestFile);
        console.log('Word count in largest file:', largestFileWordCount);
    } catch (err) {
        console.error('error reading directory', err);
    }
};





 const countWords = (content) => {
    const words = content.trim().split(/\s+/);
    return words.length;
};

 const findLargestFile = (dirPath) => {
     try {
         const files = fs.readdirSync(dirPath)

         let largestFileSize = 0;
         let largestFile = '';

         files.forEach(file => {
            const filePath = path.join(dirPath, file);
            const fileStats = fs.statSync(filePath)

             if (fileStats.isDirectory() && fileStats.size > largestFileSize) {
                 largestFileSize = fileStats.size;
                 largestFile = file;
             }
         })

         return largestFile;
     } catch (err) {
         console.error('Error reading directory', err);
     }
 };

const validPath = path.join(process.env.HOME || process.env.USERPROFILE, 'Documents', 'random thoughts', 'random-thoughts');

countVault(validPath)
    .then(() => console.log('Finished counting words in vault'))
    .catch((error) => console.error('Error:', error));

/**
 * directory:
 * - random-thoughts
 * output:
     * total word count 114323
     * total char count 771163
 */
