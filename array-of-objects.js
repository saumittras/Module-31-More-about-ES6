const products = [
  { id: 1, name: "lenovo laptop ", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "macbook", price: 150000 },
];

// map
const names = products.map((product) => product.name);
console.log(names);

// price by map

const prices = products.map((product) => product.price);
console.log(prices);

// let we know the id of product

products.forEach((product) => console.log(product.id));

//filter that produch which product price over 50000

const filteredProduct = products.filter((product) => product.price > 50000);
console.log(filteredProduct);

// find affordable product
const affordable = products.find((product) => product.price < 50000);
console.log(affordable);

// reduce

const total = products.reduce((acu, cur) => acu + cur.price, 0);
console.log(total);
