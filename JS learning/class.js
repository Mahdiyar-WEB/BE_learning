class User {
  role = "user";
  name;
  family;

  constructor(userName, lastName) {
    this.name = userName;
    this.family = lastName;
  }

  setRole(role) {
    this.role = role;
  }
  getRole() {
    return this.role;
  }
}

const user1 = new User("mahdiyar", "marvi"); // initiate name and family with constructor

//also we can change it
user1.name = "test";
user1.family = "test";

user1.setRole("admin");
console.log(user1.name + " " + user1.family);
console.log(user1.getRole());

//--------------------------------- private and public in class (access-modify)
class User2 {
  //private variables
  #firstName;
  #lastName;

  //public variable
  skill;

  constructor(firstName, lastName, skill) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.skill = skill;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}

const user2 = new User2("mahdiyar", "marvi", "Front-end Engineer");

// user2.#firstName  ===> we can't access to private vars outside the class

console.log(user2.getFullName());
console.log(user2.skill);

//------------- getter and setter: in OOP for private vars inside the class we should add getter and setter to access the private values
class User3 {
  #role;
  constructor(role = "user") {
    this.#role = role;
  }

  get getRole() {
    return this.#role;
  }

  set setRole(role) {
    this.#role = role;
  }
}

const user3 = new User3("admin");

console.log(user3.getRole);

user3.setRole = "user";

console.log(user3.getRole);

//-------------- inheritance
class Human {
  name;
  lastName;

  sleep() {
    return "sleeping ...";
  }

  eat() {
    return "eating";
  }
}

class Employee extends Human {
  constructor(name, lastName) {
    super(); // super is parent constructor execution reference, without super we cant override the parent variables
    this.name = name;
    this.lastName = lastName;
  }

  goToWork(company) {
    console.log(`${this.name} ${this.lastName} is going to ${company} office`);
  }

  //overriding parent class functions
  eat() {
    return "eating company food";
  }
}

const mahdiyar = new Employee("mahdiyar", "marvi");

mahdiyar.goToWork("irancell");
console.log(mahdiyar.sleep());

// smaple2

class Animal {
  #type;
  constructor(type) {
    this.#type = type;
  }
}

class Pet extends Animal {
  sound;
  constructor(type, sound) {
    super(type);
    this.sound = sound;
  }
}

const cat = new Pet("cat", "meow");
const dog = new Pet("dog", "woof");
