# Regular Expressions<sup>using  JS<sup>

## A. Theory 🙄

### A.1. Know about RegEx 🤨

- A **Regular Expression** or **RegEx** is a *pattern*
- Used to match character combinations in a string
- Are *not* wildcards, eg :
  - h*****t doesn't means hot, hat etc but 'zero or more 'h' followed by t.  
- Supported by most programming languages, e.g., Java, Perl, Groovy, Javascript etc. 
- Each language supports regular expressions *slightly* different. 

### A.2. What Is What ? 😯

#### A.2.1 Common Symbols

| RegEx              | Meaning                                                      |
| ------------------- | :----------------------------------------------------------- |
| . (period)          | Matches any character except newline character               |
| * (asterick)        | Matches **zero or more** occurences of the regular expression. If there is any choice, the first matching string in a line is used. |
| + (plus)            | Matches **one or more** occurences of **one-character** regular expression.If there is any choice, the first matching string in a line is used. |
| ? (question mark)   | Matches **zero or one** occurrence of the **one-character** regular expression. |
| \\ (backslash)      |                                                              |
| ^ (caret)           | <u>Inside square braces</u> : matches any character *except* those in the string.<br /> <u>At the beginning of the entire regular expression</u> : matches the beginning of a line. |
| $ (dollar)          | At the end of the entire regular expression, it matches the end of a line |
| [ ] (square braces) | Matches any one character in that string.                    |
| \| (or)             | performs like OR operation. |
| & (ampersand)       |                                                              |
| - (minus)           | Within square brackets indicates a range of consecutive ASCII characters. |
| [a-z]+           | Matches one or more of any of the characters in the set.     |
| [^a-z]              | Matches except those who are present in the set |
#### A.2.2 Meta Characters

| RegEx             | Meaning                                                      |
| ------------------- | :----------------------------------------------------------- |
| \d                  | Matches any single digit (i.e., `[0-9]`).                    |
| \D                  | Matches a single non-digit character (i.e., `[^0-9]`).       |
| \w                  | Matches single alphanumeric word character,including the underscore (i.e., `[A-Za-z0-9_]`). |
| \W                  | Maches single non word character (i.e., `[^A-Za-z0-9_]`).    |
### A.3 Points To Ponder 🤯

- If an expression is enclosed in parentheses (`(` and `)`), the editor treats it as one expression and applies any asterisk (`*`) or plus (`+`) to the whole expression.
- 


## B. Working Examples 😢





