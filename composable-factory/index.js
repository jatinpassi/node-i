const factories = require("./factories");
const stampit = require("stampit");
const runner = stampit.compose(
  factories.character,
  factories.mover
);

module.exports.samurai = samurai = stampit.compose(
  factories.character,
  factories.mover,
  factories.slasher
);

module.exports.sniper = sniper = stampit.compose(
  factories.character,
  factories.shooter
);

module.exports.gunslinger = gunslinger = stampit.compose(
  runner,
  factories.shooter
);

module.exports.westernSamurai = westernSamurai = stampit.compose(
  gunslinger,
  samurai
);

/* [index.js]
const player = require("./composable-factory");
let jatin = player.westernSamurai();
jatin.name = "Jatin";
jatin.move(1, 0);
jatin.slash("right");
jatin.shoot("left");
*/
