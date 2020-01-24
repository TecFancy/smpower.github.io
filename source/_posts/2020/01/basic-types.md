---
title: TypeScript 基础类型
abbrlink: 1e6a6145
date: 2020-01-21 16:49:15
isShow: false
tags:
categories:
  - [技术, TypeScript]
---

## 布尔值

``` JavaScript
const isDone: boolean = false;
```

## 数字

``` JavaScript
const num: number = 666;
```

## 字符串

``` JavaScript
const name: string = 'Olive';
const sentence: string = `Hello, my name is ${name}`;
```

## 数组

有两种方式定义数组，第一种是在元素类型后接上 []：

``` JavaScript
const list: number[] = [1, 2, 3];
```

第二种是使用泛型数组：

``` JavaScript
const list: Array<number> = [1, 2, 3];
```

## 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，每个元素的类型不必相同。比如，可以定义一对值分别为 string 和 number 类型的元组。

``` JavaScript
let x: [string, number];
x = ['hello', 666]; // OK
x = [666, 'hello']; // Error
```

## 枚举

``` JavaScript
enum Color {Red, Green, Blue}
const c: Color = Color.Green
const colorName: string = Color[1]

console.log(Color) // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(c) // 1
console.log(colorName) // 'Green'
console.log(Color.Green) // 1
console.log(Color[c]) // 'Green'
```

## Any

当不希望类型检查器对指定值进行检查而是直接让它们通过编译阶段的检查，可以使用 any 类型来标记这些变量。

``` JavaScript
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let list: any[] = [1, true, 'free'];
list[1] = 100;
```

## Void

Void 表示没有任何类型。比如当一个函数没有返回值时：

``` JavaScript
function warnUser(): void {
  console.log('This is my warning message.');
}
```

一个声明 void 类型的变量，只能被赋值为 undefined 和 null。

## [TODO] Null 和 Undefined

## [TODO] Never

## [TODO] Object
