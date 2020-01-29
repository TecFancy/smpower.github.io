---
title: TODO String.prototype.split()
comments: true
date: 2020-01-28 22:17:33
---

`split()` 方法使用指定的分隔符字符串将一个 `String` 对象分割成子字符串数组，以一个指定的分隔符来决定 `String` 的拆分位置。

``` JavaScript
const str = 'How are you! Where are you from?';

const words = str.split(' ');
console.log(words[3]); // Expected output: "Where"

const chars = str.split('');
console.log(chars[8]); // Expected output: "y"

const strCopy = str.split();
console.log(strCopy); // Expected output: Array ["How are you! Where are you from?"]
```

## 语法

``` JavaScript
str.split([separator[, limit]]);
```

### 参数

**separator** | 必须
从该参数指定的位置分割 `String` 对象。`separator` 可以是一个字符串或正则表达式。

**limit** | 可选
该参数指定了返回的数组的最大长度。如果省略该参数，整个 `String` 对象都会被分割，不考虑返回的数组的长度。如果设置了该参数，返回的子串数不会大于该参数指定的值。

### 返回值

一个字符串数组，该数组是通过在 `separator` 指定的边界处将 `String` 对象分割成的子串创建的。返回的数组中的子串不包括 `separator` 自身。

### 提示和注释

{% note info %}
  如果把空字符串（""）作为 `separator`，那么 `String` 对象中的每个字符都会被分割。
  `String.prototype.split()` 执行的操作与 `Array.prototype.join()` 执行的操作是相反的。
{% endnote %}

## 描述

找到分隔符后，将其从 `String` 对象中删除，并将子字符串的数组返回。如果没有找到或省略了分隔符，则返回的数组包含一个由整个 `String` 对象组成的数组元素。如果把空字符串（""）作为分隔符，则 `String` 对象中的每个字符都会被分割。

{% note info %}
  当 `String` 对象为空字符串时，`splite()` 返回一个包含空字符串的数组，而不是一个空数组；如果 `String` 对象和分隔符都是空字符串（""），则返回一个空数组。
{% endnote %}

## 示例

TODO

## 相关链接

[TODO String.prototype.charAt()](/programming/javascript/string/charAt.html)
[TODO String.prototype.indexOf()](/programming/javascript/string/indexOf.html)
[TODO String.prototype.lastIndexOf()](/programming/javascript/string/lastIndexOf.html)
[Array.prototype.join()](/programming/javascript/array/join.html)
