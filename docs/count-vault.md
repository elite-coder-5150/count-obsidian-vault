# Count Vault Function
#### Description

This method is asynchronous function calculates the total word count and character count for all the markdown 
files in a given directory

#### Parameters

1. **dirPath** - The path to the directory containing the markdown files.

#### Behaviors

1. function reads all files in the specified directory.
2. filters the list of files to include only those ending with '.md'
3. Iterates through the markdown files and reads their contents.
4. counts the words and characters in each file using the **countWors** and **countChars** functions.
5. increment the total word and character count each files count.
6. logs the total word and character to the console

#### Error Handling

- if an error occurs while reading the directory the function log an error message to the console.

#### where the algorithm is inaccurate
1. as it is written, it does not exclude the svg data from the count.

#### Things to improve on.
1. remove all the svg data that is stored in various files.
2. run through all the files and count code lines, comment lines, and empty lines.
