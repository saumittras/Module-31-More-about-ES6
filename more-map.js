const numbers = [12, 10, 8, 15, 7];

// number 1 code
const double = numbers.map((num) => num * 2);
console.log(double);

// add 5 with each element of array
const addedFive = numbers.map((num) => num + 5);
console.log(addedFive);

// half of each element
const half = numbers.map((num) => num / 2);
console.log(half);

// friends name length

const friends = ["Tom", "John", "Micleal", "Oliver"];
const lengths = friends.map((frnd) => frnd.length);
console.log(lengths);

// first leter of  friends name element

console.log(friends.map((friend) => friend[0]));
