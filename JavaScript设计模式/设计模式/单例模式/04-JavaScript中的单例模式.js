/*
 * @Author: shmao
 * @Date: 2020-10-06 16:29:20
 * @LastEditors: shmao
 * @LastEditTime: 2020-10-06 19:03:41
 */
// 前面提到的几种单例模式的实现，更多的是接近传统面向对象语言中的实现，单例对象从
// “类”中创建而来。在以类为中心的语言中，这是很自然的做法。比如在 Java 中，如果需要某个
// 对象，就必须先定义一个类，对象总是从类中创建而来的。
// 但 JavaScript 其实是一门无类（class-free）语言，也正因为如此，生搬单例模式的概念并无
// 意义。在 JavaScript 中创建对象的方法非常简单，既然我们只需要一个“唯一”的对象，为什
// 么要为它先创建一个“类”呢？这无异于穿棉衣洗澡，传统的单例模式实现在 JavaScript 中并
// 不适用。
// 单例模式的核心是确保只有一个实例，并提供全局访问。

// 全局变量不是单例模式，但在 JavaScript 开发中，我们经常会把全局变量当成单例来使用。
// 例如：

var a = {};

// 当用这种方式创建对象 a 时，对象 a 确实是独一无二的。如果 a 变量被声明在全局作用域下，
// 则我们可以在代码中的任何位置使用这个变量，全局变量提供给全局访问是理所当然的。这样就
// 满足了单例模式的两个条件。
// 但是全局变量存在很多问题，它很容易造成命名空间污染。在大中型项目中，如果不加以限
// 制和管理，程序中可能存在很多这样的变量。JavaScript 中的变量也很容易被不小心覆盖，相信
// 每个 JavaScript 程序员都曾经历过变量冲突的痛苦，就像上面的对象 var a = {};，随时有可能被
// 别人覆盖。
// Douglas Crockford 多次把全局变量称为 JavaScript 中最糟糕的特性。在对 JavaScript 的创造者
// Brendan Eich 的访谈中， Brendan Eich 本人也承认全局变量是设计上的失误，是在没有足够的时
// 间思考一些东西的情况下导致的结果。
// 作为普通的开发者，我们有必要尽量减少全局变量的使用，即使需要，也要把它的污染降到
// 最低。以下几种方式可以相对降低全局变量带来的命名污染。
// 1. 使用命名空间
// 适当地使用命名空间，并不会杜绝全局变量，但可以减少全局变量的数量。
// 最简单的方法依然是用对象字面量的方式：

var namespace1 = {
  a: function () {
    alert(1);
  },
  b: function () {
    alert(2);
  },
};

// 把 a 和 b 都定义为 namespace1 的属性，这样可以减少变量和全局作用域打交道的机会。另外
// 我们还可以动态地创建命名空间，代码如下（引自 Object-Oriented JavaScrtipt 一书）：

var MyApp = {};
MyApp.namespace = function (name) {
  var parts = name.split('.');
  var current = MyApp;
  for (var i in parts) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
};
MyApp.namespace('event');
MyApp.namespace('dom.style');
console.dir(MyApp);
// 上述代码等价于：
var MyApp = {
  event: {},
  dom: {
    style: {},
  },
};

// 2. 使用闭包封装私有变量
// 这种方法把一些变量封装在闭包的内部，只暴露一些接口跟外界通信：

var user = (function () {
  var __name = 'sven',
    __age = 29;
  return {
    getUserInfo: function () {
      return __name + '-' + __age;
    },
  };
})();

// 我们用下划线来约定私有变量__name 和__age，它们被封装在闭包产生的作用域中，外部是
// 访问不到这两个变量的，这就避免了对全局的命令污染
