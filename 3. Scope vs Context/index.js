// context
var obj = {
  foo: function () {
    return this;
  }
};

console.log(typeof obj.foo()) // object


// scope

function first() {
  second();
  function second() {
    third();
    function third() {
      fourth();
      function fourth() {
        // do something
      }
    }
  }
}
first();

