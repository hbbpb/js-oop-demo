/**
 * Created by pbli on 8/31/16.
 */
// 定义Person构造器
function Person(firstName) {
    this.firstName = firstName;
}

// 在Person.prototype中加入方法
Person.prototype.walk = function () {
    console.log("I am walking!");
};
Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};

// 定义Student构造器
function Student(firstName, subject) {
    // 调用父类构造器, 确保(使用Function#call)"this" 在调用过程中设置正确
    Person.call(this, firstName);

    // 初始化Student类特有属性
    this.subject = subject;
}
// 建立一个由Person.prototype继承而来的Student.prototype对象.
// 注意: 常见的错误是使用 "new Person()"来建立Student.prototype.
// 这样做的错误之处有很多, 最重要的一点是我们在实例化时
// 不能赋予Person类任何的FirstName参数
// 调用Person的正确位置如下，我们从Student中来调用它
Student.prototype = Object.create(Person.prototype); // See note below
/*
 对于“Student.prototype = Object.create(Person.prototype);”这一行，
 在不支持 Object.create方法的老JavaScript引擎中，可以使用一个"polyfill"（又名"shim"，查看文章链接），
 或者使用一个function来获得相同的返回值，就像下面：

 function createObject(proto) {
     function ctor() { }
     ctor.prototype = proto;
     return new ctor();
 }

 // Usage:
 Student.prototype = createObject(Person.prototype);
 */

// 设置"constructor" 属性指向Student
Student.prototype.constructor = Student;

// 更换"sayHello" 方法
Student.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

// 加入"sayGoodBye" 方法
Student.prototype.sayGoodBye = function () {
    console.log("Goodbye!");
};

// 测试实例:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true
console.log(student1 instanceof Student); // true