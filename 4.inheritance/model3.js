/**
 * Created by pbli on 8/31/16.
 */
var Chinese = {
    nation: '中国'
};
Chinese.birthPlaces = ['北京', '上海', '香港'];

function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

var Doctor = deepCopy(Chinese);
Doctor.career = '医生';

console.log(Doctor.nation); //中国

Doctor.birthPlaces.push('厦门');

console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港

//目前，jQuery库使用的就是这种继承方法。