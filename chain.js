const data = [{ id: 1, name: "abul", address: "kochu khat" }];
console.log(data[0].address);

const prouduct = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo laptop ", price: 65000 },
    { id: 1, name: "macbook", price: 165000 },
  ],
};
// access 2nd product price
console.log(prouduct.data[1].price);

const users = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "porirbag er goli",
      trird: "no dorai",
    },
    city: "dhaka",
  },
};

const users2 = {
  id: 5002,
  name: "pori bibir majar",
  address: {
    city: "chittagong",
    country: "Bangladesh",
  },
};

console.log(users.address.street?.second);
console.log(users2.address.street?.second);
