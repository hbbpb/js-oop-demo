/**
 * Created by pbli on 8/31/16.
 */

/*
 Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。
 这个对象的所有属性和方法，都会被构造函数的实例继承。
 这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。
 */
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function () {
    console.log("吃老鼠")
};

var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");
console.log(cat1.type); // 猫科动物
cat1.eat(); // 吃老鼠

console.log(cat1.eat == cat2.eat); //true

//这个方法用来判断，某个proptotype对象和某个实例之间的关系。
console.log(Cat.prototype.isPrototypeOf(cat1)); //true
console.log(Cat.prototype.isPrototypeOf(cat2)); //true

//每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
console.log(cat1.hasOwnProperty("name")); // true
console.log(cat1.hasOwnProperty("type")); // false

//in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
console.log("name" in cat1); // true
console.log("type" in cat1); // true

//in运算符还可以用来遍历某个对象的所有属性。
for (var prop in cat1) {
    console.log("cat1[" + prop + "]=" + cat1[prop]);
}
