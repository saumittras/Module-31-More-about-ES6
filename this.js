class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  actividy() {
    this.sleep();
  }
}

const kodom = new Person("kodom Ali", 21);
console.log(kodom);
kodom.sleep();

const badam = new Person("Kacha Badam", 23);
console.log(badam);
badam.sleep();
badam.actividy();

//vejal
const lazy = kodom.sleep;
