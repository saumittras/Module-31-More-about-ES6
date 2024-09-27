// filter selects elements based on a condition and returs an array  with the elements that fulfilled the condition
const numbers = [1, 2, 5, 6, 4, 15];
const player = [75, 65, 67, 72, 55, 59];
const friends = ["Tom", "John", "Micleal", "Oliver", "Tim", "Joshna"];

// cwill return
// const selected = player.filter((p) => p > 70);
const selected = player.filter((p) => p % 2 == 1);
console.log(selected);

// friend

const oddfriends = friends.filter((friend) => friend.length > 4);
console.log(oddfriends);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);