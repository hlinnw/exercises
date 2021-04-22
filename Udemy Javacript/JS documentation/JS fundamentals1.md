1. Writing Hello World in browser developer tools in Google chrome developer
   console

- alert();
- math calculation

2. Three core techonologies of the web: HTML, CSS and JS

- HTML is responsible for the content of the web, i.e the text, the images and
  buttons are all written in HTML
- CSS is responsible for presentation of the content, for styling and laying out
  the elements on a webpage
- JS is the programming language of the internet to let developers add dynamic
  and interactive effects to any webpage. JS also is used to manipulate the
  content of the CSS and load data from remote server and build entire
  applications in the brower.
- HTML - nouns, CSS - adjectives and JS - verbs

3. JS runs on frameworks (React, Angular or Vue) to create front-end
   applications and on web servers, Node.js to create back-end applications. JS
   can also be uesd to build native mobile applications and native desktop
   applications
4. JS releases.

- ES6/ ES2015 - Biggest update to the language
- New updates to JS every single year
- New releases from ES2015 is called modern JS

5. Linking a JS file to a HTML file using <script>src="script.js"</script> and
   console.log()
6. Variables and Values
7. Data types

- primitve types: Number(used for decimals and integers), String, Boolean,
  Undefined(declared with no value), Null(empty value), Symbol(ES2015) and
  BigInt(ES2020, large integers)
- dynamic typing: do not have to manually define the data type of the value
  stored in a variable. console.log(type of varialbe)

8. let, const and var

- By default always use const

9. Operator precedence: MDN web docs Operator precedence
10. Template literals: `I'm ${firstName}, a ${year- birthYear} year old ${job}`
11. Type converstion: mannualy convert from one type to another.

- const inputYear = "1991"; Number(inputYear); --> convert string to number
- String (23); output 23--> convert number to string

12. Type coercison:

- console.log("I am" + 23 + " years old") output: I am 23 years old --> number
  conversted to string with +
- console.log("23" - "10" - 3) output: 10 --> string conversted to numbers
  with -

13. Truthy and falsy values

- 5 falsy values: 0, "", undefined, null, NaN

14. Equality Operators: == vs. ===

- == js will do type coercision
- === strictly equality, not type coercision
