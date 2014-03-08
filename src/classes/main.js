class Animal {

	constructor(name) {
        this.name = name;
    }

	breathe () {
		console.log('Every animal breathes');
	}
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
  
    bark() {
        console.log("Woof! Woof! " + this.name + ' is barking');
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
  
    meow() {
        console.log("Meow! Meow! " + this.name + ' is meowing');
    }
}

let dog = new Dog('Costelinha');
dog.breathe(); // Every animal breathes 
dog.bark();    // Woof! Woof! Costelinha is barking 

let cat = new Cat('Mingau');
cat.breathe(); // Every animal breathes
cat.meow();    // Meow! Meow! Mingau is meowing 