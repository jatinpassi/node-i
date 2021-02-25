module.exports = function loggingDecorator(wrapped) {
  return function() {
    console.log("Starting");
    const result = wrapped.apply(this, arguments);
    console.log("Finished");
    return result;
  };
};

// const decorator = require("./decorators");
// function doSomething(name) {
//   console.log("Hello, " + name);
// }
// const wrapped = decorator(doSomething);
// wrapped("jatin");
