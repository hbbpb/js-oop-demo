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

var F = function () {
};
F.prototype = Animal.prototype;
Cat.prototype = new F();
//F是空对象，所以几乎不占内存。这时，修改Cat的prototype对象，就不会影响到Animal的prototype对象。
Cat.prototype.constructor = Cat;

console.log(Animal.prototype.constructor); // Animal

