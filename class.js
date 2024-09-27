const products = [
  { id: 1, name: "lenovo laptop ", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "macbook", price: 150000 },
];

// has some properties and some method

class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("le le lenovo");
console.log(lenovo);
lenovo.speak("OBA KITA KOW");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching Math");
  }
}

// create a progfile
const tapon = new Teacher("Tapon Sir", "psysics");
console.log(tapon);

const rashed = new Teacher("Rashid", "English");
console.log(rashed);
