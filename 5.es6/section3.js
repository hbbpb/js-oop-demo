/**
 * Created by pbli on 9/1/16.
 */

//与ES5一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString2() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);

console.log(point.toString());// (2, 3)

console.log(point.hasOwnProperty('x')); // true
console.log(point.hasOwnProperty('y')); // true
console.log(point.hasOwnProperty('toString')); // false
console.log(point.__proto__.hasOwnProperty('toString2')); // true
console.log(Point.__proto__ === Function.prototype); // true