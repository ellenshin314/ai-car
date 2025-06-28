// create me a class named human

class Human {
  constructor(brain, heart, height, speed) {
    this.brain = brain;
    this.heart = heart;
    this.height = height;
    this.speed = speed;
  }

  printHeight() {
    console.log(this.height);
  }
  sayWords(array) {
    if (this.brain && this.heart) {
      for (let i = array.length - 1; i > -1; i--) console.log(array[i]);
    }
  }
}

const ellen = new Human(true, true, "5'3", 2);
const roy = new Human(false, true, "6'7", 75);
const randy = new Human(true, false, "6'0", 10);

const words1 = ["apple", "book", "car", "door", "earth"];
const words2 = ["kite", "lamp", "moon", "net", "ocean"];
const words3 = ["plant", "queen", "rock", "sun", "tree"];

// ellen.sayWords(words1);
// roy.sayWords(words2);
// randy.sayWords(words3);

//polymorphism
class Animal {
  constructor() {}
  speak() {
    console.log("animal sound");
  }
  eat() {
    console.log("food");
  }
}

class Dog extends Animal {
  speak() {
    console.log("bark");
  }
  eat() {
    console.log("beef");
  }
}

class Cat extends Animal {
  speak() {
    console.log("meow");
  }
  eat() {
    console.log("fish");
  }
}

class Fish extends Animal {
  speak() {
    console.log("blub");
  }
  eat() {
    console.log("fish food");
  }
}

class Bird extends Animal {
  speak() {
    console.log("tweet");
  }
  eat() {
    console.log("seeds");
  }
}

const labrador = new Dog();
const goldFish = new Fish();
const tabby = new Cat();
const sparrow = new Bird();

labrador.speak();
tabby.speak();
goldFish.speak();
sparrow.speak();

console.log("");

labrador.eat();
tabby.eat();
goldFish.eat();
sparrow.eat();
