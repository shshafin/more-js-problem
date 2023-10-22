// check the types

const name = "shafin";
const age = 23;
const love = true;
const numbers = [1, 2, 34, 5, 6, 7, 8];
const info = { name: "sha", age: 23 };
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof name);
console.log(typeof age);
console.log(typeof love);
console.log(typeof info);
console.log(typeof add);
console.log(Array.isArray(numbers));

// checking elements
console.log(numbers.includes(34));
console.log(numbers.indexOf(34));

// join multiple array
const arr = [6509, 75, 86, 7438];
// console.log(arr.concat(numbers));


