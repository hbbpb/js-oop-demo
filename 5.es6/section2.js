/**
 * Created by pbli on 8/31/16.
 */

let methodName = "getArea";
class Square {
    constructor(length) {
        // ...
    }

    //类的属性名，可以采用表达式
    [methodName]() {
        return 'I am ' + methodName;
    }
}

let s = new Square();
console.log(s.getArea());

