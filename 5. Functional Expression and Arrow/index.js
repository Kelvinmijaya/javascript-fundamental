// Function Declaration
function sayHi() {
  console.log("Hello");
}

sayHi();

// Function Expression
let sayHello = function () {
  console.log("Hello");
};

sayHello();


// Function Expression
let sum = (a, b) => a + b;

/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2)); // 3