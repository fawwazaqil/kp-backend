console.log("👨 Teacher: zahinz");
console.log("🏢 From: kelasprogramming");
console.log("📝 Topic: This is a local module");

const constants = require('./const');
const mathOperation = require('./math')

console.log("pi",constants.pi);
console.log("lightSpeed",constants.lightSpeed);
console.log("gravity",constants.gravity);




console.log("add",mathOperation.add(5,6));
console.log("substract",mathOperation.substract(5,6));
console.log("multiply",mathOperation.multiply(5,6));
console.log("divide",mathOperation.divide(5,6));