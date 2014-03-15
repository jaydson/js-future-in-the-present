function Person(){
  this.age = 0;

  setInterval(() => {
    this.age += 1;
    console.log(this.age);
  }, 1000);
}

var p = new Person();
console.log(p.age);