/**
 * Created by pbli on 9/1/16.
 */

//Class的静态方法
class Foo {
    static classMethod() {
        console.log('hello static method');
    }
}

Foo.classMethod(); // 'hello'

var foo = new Foo();
// foo.classMethod() //error;

class Bar extends Foo {
    static classMethod() {
        super.classMethod();
        console.log('hello Bar');
    }
}

Bar.classMethod();