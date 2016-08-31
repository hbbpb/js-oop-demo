/**
 * Created by pbli on 8/31/16.
 */
var Chinese = {
    nation: '中国'
};
// var Doctor = {
//     career: '医生'
// };
//这里要注意，这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"。
//这个object()函数，其实只做一件事，就是把子对象的prototype属性，指向父对象，从而使得子对象与父对象连在一起。
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

var Doctor = object(Chinese);
Doctor.career = '医生';

console.log(Doctor.nation); //中国


