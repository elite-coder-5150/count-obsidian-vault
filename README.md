# count obsidian vault

The countVault function takes a directory path as an argument and returns a
Promise that resolves to an object containing the following properties:

totalWordCount (number):
The total word count of all Markdown files in the directory.
largestFile (string): The name of the largest Markdown file by word count.
largestFileWordCount (number): The word count of the largest Markdown file.
Arguments:

dirPath (string): The path of the directory containing the Markdown files.
Returns:

A Promise that resolves to an object with the following properties:

totalWordCount (number)
largestFile (string)
largestFileWordCount (number)

Notes:

The countVault function filters out Markdown files, reads their content, and removes any text between {{<excalidraw>}}
and {{</excalidraw>}} tags. It then calculates the word count for each file and finds the largest file by word count.
Make sure to have the countWords function defined or replace it with your own implementation for counting words in a
string.
