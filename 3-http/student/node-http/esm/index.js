// //Method1: Require index and constant in .mjs
// //Dependency: fileextension must be in .mjs
// // import from export default
// import constants from "./constants.mjs";
// // import from direct export
// //destructuring in import
// import {add} from "./constants.mjs";
// console.log(constants);
// console.log(add(5,5));

//Method2: Require index and constant in .js
//Dependency: "type": "module" in package.json
import constantsESM from "./constantsESM.js";
import {addESM} from "./constantsESM.js";
console.log(constantsESM);
console.log(addESM(5,5));