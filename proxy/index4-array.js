module.exports = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" }
  ],
  {
    get: function(target, prop) {
      if (prop === "all") {
        return target;
      }
      if (prop === "length") {
        return target.length;
      }
      if (prop === "last") {
        return target[target.length - 1];
      }
      if (prop === "first") {
        return target[0];
      }
      return undefined;
    }
  }
);

// const proxy = require("./proxy/index4-array");

// console.log(proxy.all);
