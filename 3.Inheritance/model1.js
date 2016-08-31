/**
 * Created by pbli on 8/31/16.
 */

//构造函数绑定
function Animal() {
    this.species = "动物";
}

function Cat(name, color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物