"use strict";
function myPromise() {
  return new Promise((resolve, reject) => {
    let c = 1 / 0;
    if (c) {
      throw Error("Cannot resolve c");
    }
    resolve(c);
  });
}

module.exports = myPromise;
module.exports.myPromise2 = function() {
  return Promise.resolve("hi, my name is jatin passi");
};

// const mypromise = require("./promise");

// mypromise()
//   .then(
//     val => console.log("val", val),
//     err => {
//       return Promise.resolve("king is kings");
//     }
//   )
//   .then(val => console.log(val))
//   .catch(e => console.log("error:", e));

// mypromise.myPromise2().then(val => console.log(val));
