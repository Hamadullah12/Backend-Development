// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//   console.log("hello dear ", args[i]);
// }
// modules
// const maths = require("./math");
// console.log(maths.mult(2, 6));

// requiring form other directoreis

// const fruitData = require("./Fruit");
// console.log(fruitData[0]);

import { g, mult, add, square } from "./math.js";

console.log(`${g} ${square(2, 4)}`);
