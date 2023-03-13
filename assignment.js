"use strict";

/*--------------------------1 FUNCTIONS-------------------------*/
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and it's capital city is ${capitalCity}.`;
}

// function describeCountry(country, population, capitalCity) {
//   const summery = `${country} has ${population} people and it's capital city is ${capitalCity}.`;
//   return summery;
// }
// console.log(describeCountry(`Hungary`, 9.71, `Budapest`));

const Hungary = describeCountry(`Hungary`, 9.71, `Budapest`);
const Findland = describeCountry(`Findland`, 6, `Helsinki`);
const Portugal = describeCountry(`Portugal`, 10.33, `Lisbon`);

// console.log(Hungary, Findland, Portugal);
console.log(Hungary);
console.log(Findland);
console.log(Portugal);
*/

/*--------------------------2 FUNCTION DECLARATIONS VS EXPRESSIONS-------------------------*/
/*
//Function Declaration:

function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people, so it's about ${(population / 7900) * 100}% of the world population.`;
}

// const population1 = percentageOfWorld1(`China`, 1441);
// const population2 = percentageOfWorld1(`Hungary`, 9.71);
// const population3 = percentageOfWorld1(`Portugal`,10.33);
// console.log(population1);
// console.log(population2);
// console.log(population3);


//Function Expression
const percentageOfWorld2 = function (country, population){
  return `${country} has ${population} million people, so it's about ${(population / 7900) * 100}% of the world population.`;
}

const population4 = percentageOfWorld2(`China`, 1441);
const population5 = percentageOfWorld2(`Hunagry`, 9.71);
const population6 = percentageOfWorld2(`Portugal`, 10.33);
console.log(population4);
console.log(population5);
console.log(population6);
*/



/*--------------------------3 ARROW FUNCTIONS-------------------------*/
/*
const percentageOfWorld3 = (country, population) => {
  return `${country} has ${population} million people, so it's about ${(population/ 7900) * 100}% of the world population.`;
}

console.log(percentageOfWorld3(`Hungary`, 9.71));
*/


/*--------------------------4 FUNCTIONS CALLING OTHER  FUNCTIONS-------------------------*/
/*
const percentageOfWorld1 = function(population){
  return (population / 7900) * 100;
}

// const describePopulation = function(country, population){
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
//   return description;
// };

// console.log(describePopulation(`China`, 1441));

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
  };

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
*/


/*--------------------------5 INTRODUCTION TO ARRAYS-------------------------*/
/*
const populations = [9.71, 10, 1441, 332];
console.log(populations.length === 4);


const percentageOfWorld1 = function(populations){
  return (populations / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]), 
  percentageOfWorld1(populations[1]), 
  percentageOfWorld1(populations[2]), 
  percentageOfWorld1(populations[populations.length - 1])
];
console.log(percentages);
*/



/*--------------------------6 BASIC ARRAY OPERATIONS (METHODS)-------------------------*/
/*
const neighbours = [`Austria`, `Serbia`, `Croatia`, `Slovenia`, `Romania`, `Ukraine`, `Slovakia`]; 

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
  console.log(`Probably not a central European country :D`);
}

// neighbours[5] = `War in Ukraine`;
// console.log(neighbours);

neighbours[neighbours.indexOf(`Ukraine`)] = `War in Ukraine`;
console.log(neighbours);
*/



/*--------------------------7 INTRODUCTION OF OBJECTS -------------------------*/
/*
const myCountry = {
  country: `Hungary`,
  capital: `Budapest`,
  language: `Hungarian`,
  population: 9.71,
  neighbours: [`Austria`, `Serbia`, `Croatia`, `Slovenia`, `Romania`, `Ukraine`, `Slovakia`]
};
*/


/*--------------------------8 -------------------------*/
