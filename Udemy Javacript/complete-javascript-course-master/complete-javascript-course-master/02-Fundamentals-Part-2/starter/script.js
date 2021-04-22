"use strict";

/* section 49
// for (let rep = 1; rep <= 10; rep++) { // for loop
//     console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  //  console.log(`WHILE: Lifting weights repetition ${rep}🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6 ) + 1; //Math.trunc truncate the decimals
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 ) + 1;
    if (dice === 6){
        console.log('Loop is about to end...');
    }
}

*/

/*
// challenge
const calcTip = function (bill){
    const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill *0.2;
    return tip;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip+ bills[i]);
}
console.log(tips, totals);

*/

// let sum = 0;
// function calcAverage (arr){
//     for (let i = 0; i < arr.length; i++){
//        sum += arr[i];

//     } 
//     let average = sum / arr.length;
//     return average;
// }

// console.log(calcAverage(totals));



/* section 48
    const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],

];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);


    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }

}

*/




/* setion 47
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
];
const types = [];
// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3]);
// console.log(jonasArray[4]);

for (let i = 0; i< jonasArray.length; i++) {
 console.log(jonasArray[i], typeof jonasArray[i]);

 // types[i] = typeof jonasArray[i]; filling types array
 types.push(typeof jonasArray[i]);
}

console.log(types);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < birthYears.length; i++){
    ages.push(2037 - birthYears[i]);
}
console.log(ages);

// continue and break
console.log('----------ONLY STRING ---------');
for (let i = 0; i< jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string'){
        continue;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);

   }

   console.log('----------BREAK WITH NUMBER ---------');
   for (let i = 0; i< jonasArray.length; i++) {
       if (typeof jonasArray[i] === 'number'){
           break;
       }
       console.log(jonasArray[i], typeof jonasArray[i]);

      }


*/




/*section 46
for(let rep = 1; rep <= 10; rep ++){ // for loop
console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
}
*/



/*
section 45
const jonas = {
    firstName: 'Jonas',
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){// only function expression works in an object, function declaration won't work in an object
    //  return 2037-birthYear; //calcAge is now a property holding function value
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;// this is the object who calling the method
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;// adding property to object
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}- year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' :'no'} driver's license.`;
    }

};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas.calcAge(1991));//calling function value

 //  console.log(jonas['calcAge'](1991));// same as the line above, inside [] there needs to be a string

// challenge
// "Jonas is a 46-year old tacher, and he has a driver's license"

console.log(jonas.getSummary());



//coding challenge #3
const mark = {
firstName: 'Mark',
lastName: 'Miller',
mass: 78,
height: 1.69,
calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
}
}

const john = {
firstName: 'john',
lastName: 'Smith',
mass: 92,
height: 1.95,
calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
}
}
mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI){
    console.log(`${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s(${john.BMI})`);
} else {
    console.log(`${john.firstName} ${john.lastName}'s BMI(${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s(${mark.BMI})`);
}


*/




/* section 43
const jonasArray = [ // array elements can be listed vertically
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

const jonas = {// jonas is an object , this is a way to create an object
 firstName: 'Jonas', // firstName is a property of the object, order of object property doesn't matter
 lastName: "Schmedtmann",
 age: 2037-1991,
 job: 'teacher',
 friends: ['Michael', 'Peter', 'Steven'],

};
console.log(jonas);
console.log(jonas.lastName);// using dot + real property name to access the property of the object
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);//using bracket notation to access property of the object
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(interestedIn);// output is what user entered, i.e job
console.log(jonas.interestedIn); // output undefined because interestedIn is not a property of the object
console.log(jonas[interestedIn]);// js will put actual value into the []

if(jonas[interestedIn]){

    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong quest! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
// challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

*/






/* section 39
const bill = 100;
let tip = 0;
function calcTip(bill){
    if (bill >= 50 && bill <= 300) {
        let tip = bill * 0.15;
        console.log(`Bill is ${bill}, tips is ${tip}`);
        return tip;
    } else {
        tip = bill * 0.2;
        console.log(`Bill is ${bill}, tips is ${tip}`);
        return tip;
    }
}

calcTip(100);
const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = new Array((bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2]) );

console.log(tips);
console.log(total);

*/



/*section 40

//add elements
const friends = ["Michael", "Steven", "Peter"];
friends.push('Jay'); //add a new element to the end of the array
console.log(friends);
const newLength = friends.push('Jay');
console.log(newLength);

friends.unshift('John');// add a new element to the beginning of the array
console.log(friends);


//remove elements
friends.pop();// last element removed
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove the first element
console.log(friends);

// get index of the element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // output -1 because bob is not in array

// includes method, ES6
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

friends.push(23);
console.log(friends.includes('23'));// false, 23!==='23'
console.log(friends.includes(23)); // true

if (friends.includes("Peter")){
console.log('You have a friend called Peter');
}

*/



/* section 39
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];// array can change value even though is declared const
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);// create an array

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);// expression is evaluated first then get the indexed array value

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"]; // error, can't change the entire array

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];// array can hava an expression, an array can be inserted into another array
console.log(jonas);

//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
//calcAge(years); // output NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/


/*section 38
const calcAverage = (firstScore, secondScore, thirdScore)=> (firstScore + secondScore + thirdScore) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);


const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) `);
    } else {
        console.log(`No team wins.`);
    }


}
checkWinner(avgDolphins, avgKoalas);
*/




/*section 37
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);//alt + up to move line up
        return -1;
    }




}
console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1950, "Mike"));
*/



/* section 36
function cutFruitPieces(fruit) {
    return fruit * 4;

}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/




/*
section 35
// function expression
const calcAge2 = function(birthYear){//anonymous function, no function name
 return 2037 - birthYear; // assign the function value to the variable
}
//arrow function
// const calcAge3 = birthYear => 2037- birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearUntilRetirement(1991));


const yearUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
   // return retirement;
 return `${firstName} retires in ${retirement} years`;
 }
 console.log(yearUntilRetirement(1991, "Jonas"));
 console.log(yearUntilRetirement(1980, "Bob"));

*/



/* section 34
// function declaration
function calcAge1(birthYear){
const age = 2037 - birthYear;
return age;

}
const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function(birthYear){//anonymous function, no function name
 return 2037 - birthYear; // assign the function value to the variable
}

const age2 = calcAge2(1991);
console. log(age1, age2);

*/




/*
section 33
function logger(){
console.log("My name is Jonas");

}
logger();

function fruitProcessor(apples, oranges){
console.log(apples, oranges);
const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/




/*section 32
'use strict';// to activate strict mode, put this line in the first line

let hasDriversLicense = false;
const passTest = true;

if (passTest){
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log("I can drive :D🥨🥨🥨");

}

//const interface = "Audio"; error
//const private = 534; error
*/






















































