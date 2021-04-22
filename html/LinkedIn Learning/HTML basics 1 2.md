# HTML: HyperText Markup Language 
## The role of HTML
 1. Defines the contents of a site 
## Formatting Text
 1. Syntax of HTML elements
 - An example of an element: `<p> This is a paragrpah </p>`
 - Not all element has closing tag
 2. Paragraphs `<p></p>`
 3. Headlines
 - six levels of headline tags `<h1> <h2> <h3> <h4> <h5> <h6>`

 <img src="headline tags.png" size="300">

 - Define use cases for each different level of headline for the site to have more consistency and semantic success.
 4. Bold and italics
 - `<i>` visual-only italics
 - `<em>` emphasis italics

 Example:

 `<p>My <em>favorite</em> character from <i>Sesame Street</i> is Grover. </p>`

 - `<strong>` importance, seriousness, urgency
 - `<b>` bold, no implications, no special meanings

 <img src="strong tag.png" width="400">

 5. Lists
 - `<li>`

 <img src="lists.png" width="400">
 
 - unordered lists `<ul>`
 - ordered lists `<ol>`

 <img src="ul and ol.png" width="400">

 - definition lists

 <img src="dl.png" width="400">

 6. Quotes `<q>`

<img src="quotes.png" width="400">

 - <b>Inline elements</b> are meant for wrapping around phrases of content that are inline with some other content. Like the "q" element. Strong, b, I, and em. And many more. You wrap them around phrases of text or they have a similar kind of inline purpose.
 -<b>block-level elements</b> such as block quote, paragraph, unordered lists each start a new block. They're a thing on the page. 

 7. Dates and times
 - element attributes `<elementname attributename="">`
example: `<time datetime="2025-05-08">May 8, 2025</time>`

 8. Code, pre and br
 - `<code>`{color:green;}`</code>`
 - HTML entities: `&lt;` < `&(ampersand)gt;` >
 - `<br>` line break, put `<br>` at the end of each line to make a line break, like in a poem. single tag
 - `<pre></pre>` and `<code>/<code>` are frequently combined to provide a way to show a block of code with indentation.

 9. Superscripts, subscripts and small text
 - Subscripts are characters that are set below the normal baseline for text. For example H2O, where the two is lowered down than the H and the O `<Sub></sub>`
 - Superscripts are characters that are set above the normal baseline of text. Mathematical formulas have lots of superscripts, like five squared. `<sup></sup>`
 - `<small></small>` use small to convey that something has very little prominence

