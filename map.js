const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for (const num of numbers) {
//   doubled.push(num * 2);
// }

function doubleIt(num) {
  console.log("number now", num);
  return num * 2;
}

//map ==>
const result = numbers.map(doubleIt);
console.log(result);

// second methodes
const double2 = (n) => n * 2;
const result2 = numbers.map(double2);
console.log(result2);

// third methode

console.log(numbers.map((x) => x * 2));
