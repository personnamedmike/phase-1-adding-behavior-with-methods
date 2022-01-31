// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak(name) {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak(name) {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak(name) {
    return this.sex === "male"
      ? `It's me! ${this.name}, the parrot!`
      : `${this.name} says squawk!`;
  }
}

const birdz = new Bird("mike", "male");
console.log(birdz);
console.log(birdz.speak("mike"));
