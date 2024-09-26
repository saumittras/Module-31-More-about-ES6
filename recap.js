/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and Spread operator
 * 6. Object.keys(objectName), Object.values(), Object.entries()
 * 7. for of use (array and string),
 * 8. for in use in object
 *
 *
 */

const a = 56;
const persion = {
  name: "Sakib Khan",
};
const numbers = [56, 7, 8];

const sms = ` Hi, ${persion.name} has a: ${a} acess to ${numbers[2]}`;
console.log(sms);

const squre = (x) => x ** 2;
const sum = (a, b) => a + b;
const { age, z, ...others } = { x: 2, y: 5, z: 3, name: "ovijeet", age: 55 };
const [] = ["ram", "sam", "jodu", "modu"];
