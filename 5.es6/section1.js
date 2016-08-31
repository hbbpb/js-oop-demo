/**
 * Created by pbli on 8/31/16.
 */

//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

console.log(typeof Point); // "function"
console.log(Point === Point.prototype.constructor); // true