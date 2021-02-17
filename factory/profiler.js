const hrtime = require("browser-process-hrtime");

class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }
  start() {
    this.lastTime = hrtime();
  }
  end() {
    const diff = hrtime(this.lastTime);
    console.log(
      `Timer "${this.label}" took ${diff[0]} sec and ${diff[1]} nano sec.`
    );
  }
}

module.exports = function(label) {
  if (!new.target) {
    if (process.env.NODE_ENV === "development") {
      return new Profiler(label);
    } else if (process.env.NODE_ENV === "production") {
      return {
        start: function() {},
        end: function() {}
      };
    } else {
      throw new Error("Environment must be set");
    }
  } else {
    return Profiler(label);
  }
};

// const profiler = require("./factory/profiler")("reduce");
// profiler.start();
// var h1 = [1, 2, 3, 4, 5, 56, 5];

// var h2 = h1.reduce((total, curr) => total + curr);
// console.log(h2);
// profiler.end();
