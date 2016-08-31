/**
 * Created by pbli on 8/31/16.
 */
function Person(firstName) {
    this.firstName = firstName;
    console.log('Person instantiated');
}

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person('Alice');
var person2 = new Person('Bob');
var helloFunction = person1.sayHello;

// call the Person sayHello method.
person1.sayHello(); //  "Hello, I'm Alice"
person2.sayHello(); //  "Hello, I'm Bob"
helloFunction();

console.log(helloFunction === person1.sayHello);          // logs true
console.log(helloFunction === Person.prototype.sayHello); // logs true
helloFunction.call(person1);                        // logs "Hello, I'm Alice"