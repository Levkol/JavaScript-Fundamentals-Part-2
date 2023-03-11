/*--------------------------1 STRICT MODE-------------------------*/
"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

const inferface = "Audio";
const private = 435;
*/

/*--------------------------2 FUNCTIONS-------------------------*/
/*
function logger() {
  console.log(`My name is Jonas.`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(3, 3);
console.log(appleOrangeJuice);
*/

/*--------------------------3 FUNCTION DECLARATIONS VS EXPRESSIONS-------------------------*/
/*
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

//Function Declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*--------------------------4 ARROW FUNCTIONS-------------------------*/
/*
// //Function Expression
// const calcAge2 = function (birthYear){
// return 2037 - birthYear;
// }


//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037- birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1998, `Levi`));
*/



/*--------------------------5 FUNCTIONS CALLING OTHER  FUNCTIONS-------------------------*/
/*
function cutFruitPieces(fruit){
  return fruit * 4;
}


function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));
*/



/*--------------------------6 REVIEWING FUNCTIONS-------------------------*/
/*
//CONVERT THIS ARROW FUNTION TO A NORMAL FUNCTION EXPRESSION:
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - birthYear;
//   return `${firstName} retires in ${retirement} years.`;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear;
//   const retirement = 65 - birthYear;
//   return `${firstName} retires in ${retirement} years.`;
// }

//CONVERT THIS FUNTION EXPRESSION TO DOUBLE FUNTCION

const calcAge = function (year){
  return 2037 -  year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge (birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  }else{
    console.log(`${firstName} has already retired! ✌️`);
  return -1;
  }
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike`));
*/



/*--------------------------1 CODING CHALLENGE-------------------------*/
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.

Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.

Apply this to the team's average scores 😉

GOOD LUCK 😀



const calcAverage = (firstScore, secondScore, thirdScore) => {
 return (firstScore + secondScore + thirdScore) / 3;
}

//Data1:
let averageDolphines = (calcAverage(44, 23, 71)); //Dolphines
let averageKoalas = (calcAverage(65, 54, 49)); //Koalas
console.log(averageDolphines, averageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  
  if (avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphines are the winners ${avgDolphins} vs ${avgKoalas}.`);
  } else if (avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas are the winner ${avgDolphins} vs ${avgKoalas}.`);
  } else {
    console.log(`Nobody wins ${avgDolphins} vs ${avgKoalas}.`);
  }
}
checkWinner(averageDolphines, averageKoalas);

checkWinner(10, 1);

//Data2:
averageDolphines = (calcAverage(85, 54, 41)); //Dolphines
averageKoalas = (calcAverage(23, 34, 27)); //Koalas
console.log(averageDolphines, averageKoalas);
checkWinner(averageDolphines, averageKoalas);

*/


/*--------------------------7 INTRODUCTION TO ARRAYS-------------------------*/
/*
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends [2] = `Jay`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [`firstName`, `Scmedtmann`, 2037 - 1991, `teacaher`, friends];
console.log(jonas);
console.log(jonas.length);


//Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/



/*--------------------------8 BASIC ARRAY OPERATIONS (METHODS)-------------------------*/
/*
const friends = [`Michael`, `Steven`, `Peter`];

//Add elements
const newLength = friends.push(`Jay`);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

//Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Steven`)); 
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)){
  console.log(`You have a frined called Steven.`);
}
*/



/*--------------------------2 CODING CHALLENGE-------------------------*/
