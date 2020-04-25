class Person {
  constructor(name = 'Anonyms', age = 0) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hi, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.greeting()} I am ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) description += ` their major is ${this.major}`;
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeTown) {
    super(name, age);
    this.homePlace = homeTown;
  }
  greeting() {
    let greet = super.greeting();
    if (this.homePlace) greet += ` I am visiting from ${this.homePlace}`;
    return greet;
  }
}

const me = new Traveller('Shiviraj', 22, 'Lucknow');
console.log(me);

const other = new Traveller();
console.log(other);
