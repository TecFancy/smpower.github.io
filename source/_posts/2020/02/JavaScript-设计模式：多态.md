---
title: JavaScript 设计模式：多态
comments: true
tags:
  - JavaScript
  - 设计模式
  - 多态
categories:
  - - 设计模式
    - JavaScript
abbrlink: 80c83555
date: 2020-02-05 12:58:38
---


## 多态的含义

同一操作作用于不同的对象上，可以产生不同的解释和不同的执行结果。也就是，给不同的对象发送同一个消息时，这些对象会根据这一消息给出不同的反馈。

<!-- more -->

## 多态背后的思想

将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事物”与“可变的事物”分离开来。

## 对象的多态性

``` JavaScript
// 要做的事情：输出用户的年龄
var printAge = function(person) {
  if (person.age instanceof Function) {
    person.age();
  }
};

// 都有哪些用户以及这些用户要怎么做一些事情
const Jack = function() {};
Jack.prototype.age = function() {
  console.log('age: 26');
};

const Olive = function() {};
Olive.prototype.age = function() {
  console.log('age: 20');
};

printAge(new Jack());  // age: 26
printAge(new Olive());  // age: 20
```

## 面向对象设计的优点

将行为分布在各个对象中，并让这些对象各自负责自己的行为，这就是面向对象设计的优点。

> 参考
> JavaScript 设计模式与开发实践（图灵原创）
