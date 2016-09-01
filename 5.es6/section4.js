/**
 * Created by pbli on 9/1/16.
 */

/*
 私有方法是常见需求，但ES6不提供，只能通过变通方法模拟实现。
 一种做法是在命名上加以区别。
 */
class Widget {

    // 公有方法
    foo(baz) {
        this._bar(baz);
    }

    // 私有方法
    _bar(baz) {
        return this.snaf = baz;
    }

    // ...
}

/*
 另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
 */
class Widget2 {
    foo(baz) {
        bar.call(this, baz);
    }

    // ...
}

function bar(baz) {
    return this.snaf = baz;
}
/*
 上面代码中，foo是公有方法，内部调用了bar.call(this, baz)。这使得bar实际上成为了当前模块的私有方法。
 */



/*
 还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
 */
// const bar = Symbol('bar');
// const snaf = Symbol('snaf');
// export default subclassFactory({
//
//     // 共有方法
//     foo (baz) {
//         this[bar](baz);
//     },
//
//     // 私有方法
//     [bar](baz) {
//         return this[snaf] = baz;
//     }
//
//     // ...
// });