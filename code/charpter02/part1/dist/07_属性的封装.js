"use strict";
;
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter方法用来获取属性
         * setter方法用来设置属性
         *  - 它们被称为属性的存取器
         *
         */
        // 定义方法，用来获取name属性
        getName() {
            return this._name;
        }
        // 定义方法，用来设置name属性
        setName(value) {
            this._name = value;
        }
        // 定义方法，用来获取age属性
        getAge() {
            return this._age;
        }
        // 定义方法，用来设置age属性
        setAge(value) {
            // 判断年龄是否合法
            if (value > 0) {
                this._age = value;
            }
        }
        // TS中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    console.log(per);
    /**
     * 现在属性是在对象中设置的，属性可以任意地被修改
     *  属性可以任意被修改会导致对象中的数据变得非常不安全
     *
     */
    // per.name = '猪八戒'
    // per.age = 38
    per.setName('猪八戒');
    console.log(per.getName());
    console.log(per.name);
    per.name = '猪八戒';
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 18);
    console.log(c);
})();
