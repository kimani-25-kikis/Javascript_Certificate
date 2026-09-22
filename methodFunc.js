// const person = {
//   name: "Josh",
//   age: 30,

//   introduce: function() {
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//   }
// };

// person.introduce();

// const person ={
//   name :"Joshua",
//     course: "Computer Science",
//     introduce: function(){
//         console.log( `my name is ${this.name} pursuing ${this.course}`)
//   }
// }
// person.introduce()

function student(name,age){
  return {name, age}
}
let person = student("Josh", 25);
console.log(person)