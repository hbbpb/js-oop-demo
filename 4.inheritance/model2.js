/**
 * Created by pbli on 8/31/16.
 */
var Chinese = {
    nation: '中国'
};
Chinese.birthPlaces = ['北京', '上海', '香港'];
// 除了使用"prototype链"以外，还有另一种思路：把父对象的属性，全部拷贝给子对象，也能实现继承。
// 下面这个函数，就是在做拷贝：
function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    // c.uber = p;
    return c;
}

var Doctor = extendCopy(Chinese);
Doctor.career = '医生';

console.log(Doctor.nation); //中国

/*
 但是，这样的拷贝有一个问题。
 那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，
 因此存在父对象被篡改的可能。
 */
Doctor.birthPlaces.push('厦门');

console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港, 厦门

//所以，extendCopy()只是拷贝基本类型的数据，我们把这种拷贝叫做"浅拷贝"。这是早期jQuery实现继承的方式。

