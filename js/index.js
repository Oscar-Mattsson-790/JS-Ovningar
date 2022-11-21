"use strict";

// function squareSum(numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num * num;
//   }
//   return sum;
// }
// console.log(squareSum([1, 2, 4]));

// function XO(str) {
//   let countX = 0;
//   let countO = 0;
//   for (let letter of str.toLowerCase()) {
//     console.log(letter);
//     if (letter === "x") {
//       countX += 1;
//     } else if (letter === "o") {
//       countO += 1;
//     }
//     console.log("Hur många X: ", countX, "Hur många O: ", countO);
//   }
//   return countX === countO ? true : false;
// }

// console.log(XO("xoooooXXx"));

// function friend(friends) {
//   //your code here
//   const friend = [];
//   for (const str of friends) {
//     if (str.length === 4) friend.push(str);
//   }
//   return friend;
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));

// function paperWork(n, m) {
//   if (m < 0 || n < 0) {
//     return 0;
//   }
//   return m * n;
// }

// console.log(paperWork(5, 5));

// function check(a, x) {
//   return a.includes(x);
// }

// console.log(check([66, 101], 66));

// function getGrade(s1, s2, s3) {
//   // Code here
//   let gradeAvg = (s1 + s2 + s3) / 3;

//   if (gradeAvg <= 90 && gradeAvg <= 100) {
//     return "A";
//   } else if (gradeAvg >= 80 && gradeAvg < 90) {
//     return "B";
//   } else if (gradeAvg >= 70 && gradeAvg < 80) {
//     return "C";
//   } else if (gradeAvg >= 60 && gradeAvg < 70) {
//     return "D";
//   } else if (gradeAvg >= 0 && gradeAvg < 60) {
//     return "F";
//   }
//   console.log(gradeAvg);
// }

// console.log(getGrade(95, 90, 93));
// console.log(getGrade(100, 85, 96));
// console.log(getGrade(92, 93, 94));

// let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// // accumulator -> SNOWBALL
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// // const max = movements.reduce((acc, mov) => {
// //   if (acc > mov) return acc;
// //   else return mov;
// // }, movements[0]);
// // console.log(max);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(deposits);

// const withdrawals = movements.filter(function (mov) {
//   return mov < -1;
// });
// console.log(withdrawals);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// Datatyper
// 1.1
// string, boolean, number, undefined, null

// 1.2
// true

// 1.3
// var är en function scope, let är blocked scope

// 1.4
// typeof

// 2. Block
// 2.1 C

// 2.2
// ALERT

// 2.3
// Good bye world!

// 3. Strings
// 3.1
// ALLA 3

// 3.2
// sentence.length
// let sentence =
//   "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one.";
// console.log(sentence.length);

// 3.3
// let name = "Oscar";
// let sentence = `Hej ${name} din gamle knasboll!`;
// console.log(sentence);

// 4. Arrays
// 4.1
// const array = ["banan", "hallon", "apelsin", "jordgubbe", "päron"];
// console.log(array);
// 4.2
// array.unshift("blåbär");
// array.push("björnbär");
// console.log("Första arrayen: ", array);

// // 4.3
// array.shift();
// array.pop();
// console.log("Andra arrayen: ", array);
// 4.3 - del 2
// let fruits = ["apple", "orange", "pear", "kiwi"];
// let newfruits = fruits.splice(2, 0, "blueberry", "strawberry");
// console.log(fruits);

// 4.4
// let fruits = ["apple", "orange", "pear", "kiwi"];
// let fruitsCopy = [...fruits];
// fruitsCopy.unshift("pineapple");
// console.log(fruitsCopy);

// 4.5
// let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];
// num.sort(function (a, b) {
//   return b - a; // a - b
// });
// console.log(num);

// 4.6
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// a.push(...b);
// // let addArray = a.concat(b);
// console.log(a);

// 4.7
// let a = ["My", "has", "many", "open"];
// let b = ["brain", "to", "tabs", "!"];
// let mixedArrays = a.flatMap((a, i) => [a, b[i]]);
// console.log(mixedArrays);

// 4.8
// let a = [1, 2, 7, 8, 9, 10];
// let b = [3, 4, 5, 6];
// a.splice(2, 0, ...b);
// console.log(a);

// 4.9
// let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
// const upperCase = names.map((e) => {
//   return e.toUpperCase();
// });
// console.log(upperCase);

// 4.10
// let names = [
//   { name: "sixten", age: 32 },
//   { name: "Eva", age: 19 },
//   { name: "Ali", age: 67 },
//   { name: "Kim", age: 13 },
//   { name: "Greger", age: 30 },
//   { name: "Alicia", age: 82 },
// ];
// // Alternativ 1:
// let getAgeOver30 = names.filter((name) => name.age >= 30);
// console.log(getAgeOver30);

// Alternativ 2:
// let namesOver30 = [];
// function getAllOver30() {
//   names.forEach((object) => {
//     if (object.age >= 30) {
//       namesOver30.push(object);
//     }
//   });
// }
// getAllOver30();
// console.log(namesOver30);

// 4.11
// let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
// let check = names.includes("Ewa");
// console.log(check);

//5. Loops
// 5.1
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// 5.2
// for (let count = 100; count >= 0; count--) {
//   console.log(count);
// }

// 5.3
// let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];
// Alternativ 1
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// Alternativ 2
// for (let i of fruits) {
//   console.log(i);
// }
// Alternativ 3
// fruits.forEach((element) => console.log(element));

// 5.4
// Alternativ 1
// fruits.forEach((fruit, index, array) => {
//   console.log(`${index}. ${fruit}`);
// });
// Alternativ 2
// for (let fruit of fruits.entries()) {
//   console.log(`${fruit[0]}. ${fruit[1]}`);
// }

// 5.5
// const suites = ["Hjärter", "Spader", "Ruter", "Klöver"];
// let kortlek = [];

// for (let i = 2; i <= 14; i++) {
//   for (let suite = 0; suite <= 3; suite++) {
//     if (i === 11) {
//       kortlek.push(`${suites[suite]} Knekt`);
//     }
//     if (i === 12) {
//       kortlek.push(`${suites[suite]} Dam`);
//     }
//     if (i === 13) {
//       kortlek.push(`${suites[suite]} Kung`);
//     }
//     if (i === 14) {
//       kortlek.push(`${suites[suite]} Ess`);
//     }
//     if (i < 11) {
//       kortlek.push(`${suites[suite]} ${i}`);
//     }
//   }
// }
// console.log(kortlek);

// 6. Objects
// 6.1
// const book = {
//   title: "Life of a programmer",
//   author: "Gabriel Fox",
//   genres: ["Tech", "Thriller"],
// };
// console.log(book);

// 6.2
// let person = {
//   name: "Sixten Faceplant",
//   email: "sixten.faceplant@zocom.se",
//   role: "ninjah",
//   adress: {
//     street: "Karatevägen 3",
//     zip: "41477",
//     city: "Kablam City",
//   },
// };
// console.log(person.adress.city);

// 6.3
// const person = {
//   name: "Sixten Faceplant",
//   email: "sixten.faceplant@zocom.se",
//   role: "ninjah",
//   adress: {
//     street: "Karatevägen 3",
//     zip: "41477",
//     city: "Kablam City",
//   },
// };
// const clonePerson = { ...person };
// const person2 = person;

// 6.4
// const dog = {
//   name: "Harry",
//   breed: "chicuaua",
//   bark: function () {
//     return `Woff, jag heter ${this.name}! `;
//   },
// };
// console.log(dog.bark());

// 6.5
// let person = {
//   name: "sixten",
//   email: "sixten@zocom.se",
//   role: "ninjah",
//   age: 32,
// };

// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(`${key}: ${person[key]}`);
//   }
// }

// 7. Function
// 7.1
// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(2, 2));

// 7.3
// const str = "2019-10-14";

// function getYear() {
//   return str.substring(0, 4); // startindex, endindex
// }
// console.log(getYear());

// 7.4

// INTE LÖST ÄNNU

// 8. Conditionals
// 8.1
// function compareThis(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(compareThis(1, 1));
// console.log(compareThis(3, 1));

// // 8.2
// function between(number) {
//   if (number >= 20 && number < 40) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(between(30));
// console.log(between(50));

// 8.3

// INTE LÖST ÄNNU
// function getMeTheLongestArr(a, b) {
//   // return a.join() == b.join();
//   if (a.length === b.length) {
//     return true;
//   } else {
//     false;
//   }
// }
// console.log(getMeTheLongestArr([1, 2], ["A", "B", "C"]));

// 9. Math object
// 9.1
// function random(max) {
//   return Math.floor(Math.random() * max);
// }
// console.log(random(10000));

// 9.2

// INTE LÖST ÄNNU

// function randomPassword(n) {
//   return Math.floor(Math.random() * n).toString();
// }

// console.log(randomPassword(7));

// 9.3
// const names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
// function randomName(names) {
//   const randomIndex = Math.floor(Math.random() * names.length);
//   // const item = names[randomIndex];
//   // return item;
//   return names[randomIndex];
// }
// console.log(randomName(names));

// 10. Program flow
// 10.1
// let getData = function (url) {}; // Function Expression
// function getData() {} // Function Declaration

// 10.2
// HelloAgainAgain();

// function hello() { // TREDJE
//   console.log("Hello!");
// }

// function helloAgain() { // ANDRA
//   console.log("Hello Again!");
//   hello();
// }

// function HelloAgainAgain() { // FÖRST
//   console.log("Hello Again Again!");
//   helloAgain();
// }

// 10.3
// let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

// function printPokemons() {
//   for (let i = 0; i < pokemons.length; i++) {
//     console.log("One awesome pokemon is " + pokemons[i]);
//   }
// }
// printPokemons();

// 10.4
// function reverseString(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("hello"));

// 11. Async / promises
// 11.1
// pending
// fulfilled
// rejected

// 11.2
// let getData = new Promise((resolve, reject) => {
//   let data = 0;
//   if (data == 0) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// getData
//   .then((message) => {
//     console.log("This is in the then " + message);
//   })
//   .catch((message) => {
//     console.log("This is in the catch " + message);
//   });

// 11.3
// function getData() {
//   const getData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("logga url");
//     }, 1000);
//   });
//   return getData;
// }

// async function getData2() {
//   const url = await getData();
//   console.log(url);
// }
// getData2();

// const getData = async () => {
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   const data = await response.json();

//   return data;
// };

// getData().then((data) => console.log("resolved:", data));

// 12. API interaction fetch
// const url = `https://api.chucknorris.io/jokes/random`;
// function chuchMe(url) {
//   fetch(url)
//     .then((response) => {
//       console.log("Det är inte lätt när man är en kotlett :)", response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("rejected", err);
//     });
// }
// console.log(chuchMe());

// fetch(url)
//   .then((response) => {
//     console.log("Det är inte lätt när man är en kotlett :)", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// 12.2
// const url = `https://jsonplaceholder.typicode.com/posts`;

// let data = {
//   id: 1,
//   joke: "How many ears does Spock have? - Three; Left, right and the final front ear.",
//   funny: true,
// };

// 12.3

////////////////////

// DOM manipulation

// 1. Single selector
//1.1
// const h2Elem = document.querySelector("h2").innerHTML;
// console.log(h2Elem);

// 1.2
// const ulElem = document.querySelector("ul").childNodes[5].innerText;
// console.log(ulElem);

// 2. Select All (node list)
// 2.1
// const ulElem = (document.querySelector("ul").style.textTransform = "upperCase");

// 3. Value from input
// 3.1
// const inputElem = document.querySelector("input").value;
// console.log(inputElem);

// 3.2
// const selectElem = document.querySelector("select").value;
// console.log(selectElem);

// 4. Attributes
// 4.1
// const imgElem = document.querySelector("img").src;
// console.log(imgElem);

// 4.2
// const inputBoxElem = document.querySelector("input").checked;
// console.log(inputBoxElem);

// 5. CSS
// 5.1
// const getNavElem = document.querySelector("nav");
// getNavElem.className = ".show";
// // const nav = document.createAttribute("class");
// // nav.value = ".show";
// // getNavElem.setAttributeNode(nav);
// console.log(getNavElem);

// 5.2
// const aElem = document.querySelector("#home");
// aElem.classList.toggle(".active");
// console.log(aElem);

// // 5.3
// const figureElem = document.querySelector("figure").childNodes;

// figureElem.forEach((node, index) => {
//   if (index === 1 || index === 3 || index === 5) {
//     node.className = ".shadow";
//   }
// });
// console.log(figureElem);

// 6. Create contet
// 6.1
// const newH1 = document.createElement("h1");
// newH1.innerHTML = "Jag är en rubrik!";
// document.body.append(newH1);
// console.log(newH1);

// 6.2
// const url = `https://api.chucknorris.io/jokes/random`;

// // async function getURL(url) {
// //   const response = await fetch(url);
// //   let data = await response.json();
// //   console.log(data);
// // }
// // getURL(url);

// const getURL = fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log(getURL);

// const wrapper = document.createElement("section");
// const img = document.createElement("img");
// const h2 = document.createElement("h2");
// const a = document.createElement("a");
// img.innerHTML = "icon_url";
// h2.innerHTML = "value";
// a.innerHTML = "url";
// wrapper.append(img, h2, a);
// document.body.append(wrapper);
// console.log(wrapper);

// 7. Events
// 7.1
// const btnElem = document.querySelector("button");
// // btnElem.addEventListener("click", function () {
// //   console.log("go go go");
// // });
// btnElem.addEventListener("click", () => {
//   console.log("go go go");
// });

// 7.2
const ulEvent = document.querySelector("#parent-list");

ulEvent.addEventListener("click", function () {
  console.log(`Jag älskar ${li.name}`);
});

console.log(ulEvent);
