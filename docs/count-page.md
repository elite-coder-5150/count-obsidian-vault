# PageCount
#### Description
This function takes a string as input and returns an estimate of the number of page based on the word count. The esimation assymes that one page contains 500 lines.

#### Parameters

1. **content** - the text for which to estimate the page count

#### Returns

1. **(number)** - the estimated number of pages, rounded to the nearest whole number.

#### Behaviors

1. The functoin trims any leading or trailing whiteshpaes. form the input text.
2. splites the text using a regular expression that mateches one or more whitespace characters.
3. Determine the word count by calculating the length of the resulting array.
4. Divides the word cound by 500 to estimatie the page count
5. rounds the resulting value to the nearest whole number and returns it
