module.exports.readonlyDecorator = function(target, prop, descriptor) {
  // console.log("target", target);
  // console.log("prop", prop);
  // console.log("descriptor", descriptor);
  descriptor.writable = false;
  return descriptor;
};

// const { readonlyDecorator } = require("./decorators/index2");
// class Human {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   @readonlyDecorator
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const jatin = new Human("Jatin", "Passi");
// jatin.getFullName = "King";
// console.log(jatin.getFullName);
/*
Output : We were not able to change property getFullName because of readonlyDecorator
ƒ getFullName()
  name: "getFullName"
  __proto__: Function
 */
