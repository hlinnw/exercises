1. function
 * function declaration 
 function logger(){
     console.log("My name is Jonas");
 }
 * function expression
 const fruitProcessor = function (apples, oranges){
     console.log(apples, oranges);
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
     return juice;
 }
 * Arrow functions
 const calcAge = birthYear => 2037 - birthYear;// birthYear is the parameter
 const yearsUntilRetirement = birthYear =>{
     const age = 2037 - birthYear;
     const retirement = 65 - age;
     return retirement;

 }

 const yearsUntilRetirement = (birthYear, firstName) =>{// multiple parameters
     const age = 2037 - birthYear;
     const retirement = 65 - age;
     return retirement;

 } 
 <img src="functions review.png" width="500">

2. Basic array operations
 * - .push();// add to last
   - .unshift(); // add to the first
   - .pop(); // remove last
   - .shift();
   - .indexOf();
   - .includes();// return true or false
   - .remove();

3. Introduction to Objects

<img src="object properties.png" width="400">
 
 * use dot operator and bracket[] to access the property of an object
 * use [] when need to use computed property. values in [] will get evaluated

 <img src="Access properties of an object.png" width="400">

 * How to add a property to an object using dot operator and []

 <img src="How to add a property to an object.png" width="400">

 * function expression can be used as a property of an object
 * use this. to add properties to an object
