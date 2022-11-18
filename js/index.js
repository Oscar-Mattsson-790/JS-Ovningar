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
