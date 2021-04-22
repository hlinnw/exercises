
// section 29
// let tip = 0;
// const bill = 430;
// tip = (bill >= 50 && bill <= 300 )? bill * 0.15 : bill * 0.2;
// console.log(`The bill was $${bill}, the tip was $${tip}, and the total cost was $${bill + tip}.`);


























/*section 27
const age = 23;
age >= 18 ? console.log("I like to drink 🍷") : console.log(" like to drink water☕");

const drink = age >= 18 ? "wine" : " water";
console.log(drink);

let drink2;
if (age >= 18) {
      drink2 = "wine";
} else {
      drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : " water"}`)// ${} expects an expression, a value
*/




// section 26
// const day = "monday";
/*
switch (day) {
      case "monday": // day === "monday"
            console.log("Plan course structure");
            console.log("Go to coding meetup");
            break;
      case "tuesday":
            console.log("Prepare theory videos");
            break;
      case "wednesday":
      case "thursday":
            console.log("Write code examples");
            break;
      case "friday":
            console.log("Record videos");
            break;
      case "saturday":
      case "sunday":
            console.log("Enjoy the weekend");
            break;
      default:
            console.log("Not a valid day");

}
*/
// const day = ""; // use if-else if to get the same output
// if (day === "monday"){
//       console.log("Plan course structure");
//       console.log("Go to coding meetup");
// } else if (day === "tuesday"){
//       console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday"){
//       console.log("Write code examples");
// } else if (day === "friday"){
//       console.log("Record videos");
// } else if (day === "saturday" || day === "sunday"){
//       console.log("Enjoy the weekend");
// } else {
//       console.log("Not a valid day");
// }




// section 25
// const dolScore1 = 96;
// const dolScore2 = 108;
// const dolScore3 = 89;
// const dolAvr = Number(dolScore1 + dolScore2 + dolScore3) / 3;

// const dolScore1 = 97;
// const dolScore2 = 112;
// const dolScore3 = 101;
// const dolAvr = Number(dolScore1 + dolScore2 + dolScore3) / 3;


// const koaScore1 = 88;
// const koaScore2 = 91;
// const koaScore3 = 110;
// const koaAvr = Number(koaScore1 + koaScore2 + koaScore3) / 3;

// const koaScore1 = 109;
// const koaScore2 = 95;
// const koaScore3 = 106;
// const koaAvr = Number(koaScore1 + koaScore2 + koaScore3) / 3;

// console.log(`Dophoine's average score is ${dolAvr}. Koala's average score is ${koaAvr}.`);

// if (dolAvr > koaAvr && dolAvr >= 100) {
//       console.log( "The winner is Dolphins!");
// }
// else if (dolAvr === koaAvr && dolAvr >= 100) {
//       console.log(`There is a draw. Both teams win!`);
// } else if (koaAvr > dolAvr && koaAvr >= 100){
//       console.log(`The winner is Koala!`);
// } else {
//       console.log("No team's score is over 100. "); 
// }





/* section 24
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
*/



/* section 23
const age = "18";
if(age === 18){ //triple = is strictly equal, js won't do coercision
      console.log("You just became an adult");
}
if(age == 18){ //double = is loose equal, js will do coercision
      console.log("You just became an adult (loose)");//"18" will be converted to num 18
}

//const favourite = prompt("What's your favourite number?");
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);//output string
if(favourite === 18){ // "18" == 18
      console.log("Cool! 18 is an amazing number!");
} else if (favourite === 7){
      console.log("7 is a cool number");
} else {
      console.log("Number is not 18 or 7");
}

if(favourite !== 23){// !== strict not equal, != loost not equal
console.log("Why not 23?");
}

*/


/* section 21

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));// object value
console.log(Boolean(""));

const money = 0;
if(money){ // js converts money to boolean
      console.log("Don't spend it all.");
} else {
      console.log("You should get a job!");
}

let height = 123;
if(height){
      console.log("YAY! Height is defined!");
} else {
      console.log("Height is undefined!");
}

*/



/* section 20
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); //convert String to number
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));// NaN invalid number
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("i am " + 23 + " years old");// + converts num to string, the only way
console.log("23" - "10" - 3); // - converts string to num
console.log("23" * "2");//  output 46, converts string to num
console.log("23" / "2"); //converts string to num
console.log("23" > "18"); // js converts string to num

let n = "1" + 1 // n = "11"
n = n - 1; // n = "11" -1 = 10, - converts string to num
console.log(n); // output n = 10

console.log(2 + 3+ 4+ "5"); // 2 +3+4 = 9, + converts 9 to "9", ouputy = 95
console.log("10" - "4" -"3" - 2 + "5");// output = "15"

*/



/* section 19
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBmi = markWeight / (markHeight ** 2);

let johnBmi = johnWeight / (johnHeight ** 2);

let markHigherBMI = markBmi > johnBmi;
if(markHigherBMI){
      console.log(`Mark's BMI ( ${markBmi} ) is higher than John's BMI ( ${johnBmi} )!`);
} else{
      console.log(`John's BMI ( ${johnBmi} ) is higher than Mark's ( ${markBmi} )!`);
}
*/


/* section 18
const age = 15;

if(age >= 18){
console.log("Sarah can start driving licesne🚗");//window + . to get emoji
} else{
const yearLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;
let centry;
if(birthYear <= 2000){
      let centry = 20;
} else {
      centry = 21;
}
console.log(centry);

*/







/* section 17
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
console.log(jonas);

//template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);
*/


/* section 16
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBmi = markWeight / (markHeight ** 2);

let johnBmi = johnWeight / (johnHeight ** 2);

let markHigherBMI = markBmi > johnBmi;

console.log(markBmi);
console.log(johnBmi);
console.log(markHigherBMI);
*/



/*
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


const averageAge = ( ageJonas + ageSarah ) /2
console.log(ageJonas, ageSarah, averageAge);
*/


/* section 14
const now = 2037;
const ageJonas = now -1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2**3); //2**3 means 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageJonas > ageSarah); //true
console.log(ageSarah >= 18); //true
const isFullAge = ageSarah >= 18;
*/




/* section 13
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

//const job;

var job = "porgrammer";
job = "teacher";
*/



/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
*/

/* section 12
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
