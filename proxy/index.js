const target = {
  message1: "hello",
  message2: "everyone"
};

const handler1 = {
  // handler1 is used to configure trap. Traps allow you to intercept interactions with target in different ways
  get: function(target, prop, receiver) {
    if (prop in target) {
      return Reflect.get(...arguments);
    }
    return "Not Defined";
  }
};
const proxy = new Proxy(target, handler1);
module.exports = proxy;
