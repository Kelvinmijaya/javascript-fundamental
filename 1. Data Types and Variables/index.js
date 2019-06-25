var n = 123;

console.log(n);  // 123
console.log(typeof n);  // number

var s = "asd";

console.log(s);  // asd
console.log(typeof s);  // string

var b = true;

console.log(b);  // true
console.log(typeof b);  // boolean

var o = { name: 'kelvin' };

console.log(o);  // {name: 'kelvin'}
console.log(o.name);  // kelvin
console.log(typeof o);  // object

var n = null;

console.log(n);  // null
console.log(typeof n);  // object

var u = undefined;

console.log(u) // undefined
console.log(typeof u);  // undefined

const symbol1 = Symbol();

console.log(typeof symbol1);
// expected output: "symbol"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false
