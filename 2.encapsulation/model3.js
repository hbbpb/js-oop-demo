/**
 * Created by pbli on 8/31/16.
 */
//model 3
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");
console.log(cat1.name); // 大毛
console.log(cat1.color); // 黄色

//这时cat1和cat2会自动含有一个constructor属性，指向它们的构造函数。
console.log(cat1.constructor == Cat); //true
console.log(cat2.constructor == Cat); //true

//Javascript还提供了一个instanceof运算符，验证原型对象与实例对象之间的关系。
console.log(cat1 instanceof Cat); //true
console.log(cat2 instanceof Cat); //true
