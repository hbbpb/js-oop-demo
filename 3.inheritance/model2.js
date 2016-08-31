/**
 * Created by pbli on 8/31/16.
 */

//prototype模式
function Animal() {
    this.species = "动物";
}

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype = new Animal();
/*
 原来，任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"这一行，
 Cat.prototype.constructor是指向Cat的；加了这一行以后，Cat.prototype.constructor指向Animal。
 */
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物