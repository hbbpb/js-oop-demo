/**
 * Created by pbli on 8/31/16.
 */

//利用空对象作为中介
// 由于"直接继承prototype"存在上述的缺点，所以就有第四种方法，利用一个空对象作为中介。
function Animal() {
}
Animal.prototype.species = "动物";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

function extend(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    // Child.uber = Parent.prototype;
}

extend(Cat, Animal);
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物

console.log(Animal.prototype.constructor); // Animal

