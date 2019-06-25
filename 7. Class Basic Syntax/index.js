class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // alert(this.name);

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi


// class expression
let UserExpression = class {
  sayHi() {
    alert("Hello");
  }
};


class User2 {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let person = new User2("John");
console.log(person.name); // John

let person1 = new User2(""); // Name too short.