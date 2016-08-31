/**
 * Created by pbli on 8/31/16.
 */
//model 2
function Cat(name, color) {
    return {
        name: name,
        color: color
    }
}
var cat1 = Cat("大毛", "黄色");
var cat2 = Cat("二毛", "黑色");

/*
 这种方法的问题依然是，cat1和cat2之间没有内在的联系，不能反映出它们是同一个原型对象的实例。
 */
