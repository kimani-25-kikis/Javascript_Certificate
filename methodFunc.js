const person = {
  name: "Josh",
  age: 30,

  introduce: function() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.introduce();