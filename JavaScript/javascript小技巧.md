# && 运算符 小技巧

```JavaScript
if(a >5 ) alert('hello');
==> 等价于
a > 5 && alert('hello');
```
这样只需一行代码就搞定。但是需要注意的一点就是：js中||和&&的特性帮我们精简了代码的同时，也带来了代码可读性的降低。这就需要我们自己来权衡了。

一方面精简js代码，能实质性的减少网络流量，尤其是大量应用的js公用库。个人比较推荐的做法是：如果是相对复杂的应用，请适当地写一些注释。这个和正在表达式一样，能够精简代码，但是可读性会降低，对读代码的人要求会高些，最好的办法就是写注释。



# 判断属性是否存在目标对象中的方法

```javascript
key in obj
key in obj && !(key in Object.prototype)
obj.hasOwnprototy(key)
Object.prototype.call.hasOwnprototype(obj, key)
Reflect.has(obj, key)
```

