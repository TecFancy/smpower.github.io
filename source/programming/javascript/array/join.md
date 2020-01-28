---
title: Array.prototype.join()
date: 2020-01-28 10:04:59
comments: true
---

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

``` JavaScript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // Expected output: "Fire,Air,Water"

console.log(elements.join(''));  // Expected output: "FireAirWater"

console.log(elements.join('-')); // Expected output: "Fire-Air-Water"
```

## 语法

``` JavaScript
arr.join([separator])
```

### 参数

**separator** | 可选
指定一个字符串来分割数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分割。如果分隔符是空字符串（""），则所有元素之间没有任何字符。

### 返回值

一个所有所有数组元素连接的字符串。如果数组（或类数组）的长度为 0，则返回空字符串。

## 描述

所有数组元素被转换成字符串，再用指定的（或默认的逗号）作为分隔符将这些字符串连接起来。

{% note warning %}
  如果数组中的一个元素为 `undefined` 或 `null`，它将被转换成空字符串。
{% endnote %}

## 示例

### 使用四种不同的分隔符连接数组元素

首先创建一个数组 `arr`，包含三个数组元素，然后使用四种不同的分分隔符连接数组元素。第一种使用默认的逗号（,）分隔符，第二种是在逗号（,）后加一个空格，接下来是一个加号（+）前后加空格，最后是使用空字符串作为分隔符。

``` JavaScript 使用四种不同的分隔符连接数组元素
const arr = ['Wind', 'Fire', 'Water']
console.log(arr.join());  // Expected output: "Wind,Fire,Water"
console.log(arr.join(', ')); // Expected output: "Wind, Fire, Water"
console.log(arr.join(' + ')); // Expected output: "Wind + Fire + Water"
console.log(arr.join(''));  // Expected output: "WindFireWater"
```

### 连接类数组对象

声明一个方法 `fn`，在调用时传入参数，通过在 `Array.prototype.join()` 上调用 [`Function.prototype.call()`](/programming/javascript/function/call.html) 来连接类数组对象中的元素。

``` JavaScript 连接类数组对象
function fn(a, b, c) {
  const str = Array.prototype.join.call(arguments);
  return str;
}
const str = fn(1, 'a', true);
console.log(str); // Expected output: "1,a,true"
```

## 相关链接

- [String.prototype.split()](/programming/javascript/string/split.html)
- [Array.prototype.toString()](/programming/javascript/array/toString.html)
