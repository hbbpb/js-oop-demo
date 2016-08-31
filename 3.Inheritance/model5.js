/**
 * Created by pbli on 8/31/16.
 */
/*
 我们也可以换一种思路，纯粹采用"拷贝"方法实现继承。
 简单说，如果把父对象的所有属性和方法，拷贝进子对象，不也能够实现继承吗？这样我们就有了第五种方法。
 */

function Animal() {
}
Animal.prototype.species = "动物";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

//这个函数的作用，就是将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    // c.uber = p;
}

extend2(Cat, Animal);
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物

console.log(Animal.prototype.constructor); // Animal
// console.log(cat1.prototype.constructor);

