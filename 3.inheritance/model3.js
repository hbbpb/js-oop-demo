/**
 * Created by pbli on 8/31/16.
 */

//直接继承prototype
//由于Animal对象中，不变的属性都可以直接写入Animal.prototype。
// 所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。
function Animal() {
}
Animal.prototype.species = "动物";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype = Animal.prototype;

//警告:这一句实际上把Animal.prototype对象的constructor属性也改掉了！
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); //动物

//警告
console.log(Animal.prototype.constructor); // Cat