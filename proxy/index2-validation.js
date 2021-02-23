const target = {
  name: "Jatin",
  lastname: "Passi",
  email: "jatinpassi111@gmail.com"
};

const validator = {
  get: function(target, prop) {
    if (prop in target) {
      return Reflect.get(...arguments);
    } else {
      return "Not Defined";
    }
  },
  set: function(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    obj[prop] = value;

    return true;
  }
};

module.exports = proxy = new Proxy(target, validator);

// const proxy = require("./proxy/index2");
// proxy.age = "sds";
