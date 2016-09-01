/**
 * Created by pbli on 9/1/16.
 */

// Class的静态属性和实例属性
class Foo {
}

//目前，只有这种写法可行，因为ES6明确规定，Class内部只有静态方法，没有静态属性。
Foo.prop = 1;

console.log(Foo.prop);