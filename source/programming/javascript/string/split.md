---
title: String.prototype.split()
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

### 使用 `split()`

下面定义了一个函数：根据指定的分隔符将一个 `String` 对象分割成字符串数组。分割 `String` 对象后，该函数依次输出原始 `String` 对象信息，被指定的分隔符，数组元素的个数以及数组中所有的元素。

``` JavaScript
function splitString(stringToSplit, separator) {
  const arrayOfString = stringToSplit.split(separator);
  let elements = '';

  console.log(`The original string is: "${stringToSplit}".`);
  console.log(`The separator is: "${separator}".`);

  for (let i = 0, len = arrayOfString.length; i < len; i++) {
    elements += `${arrayOfString[i]} / `
  }

  console.log(`The array has ${arrayOfString.length} elements: ${elements}.`);
}

const tempestString = 'How are you! Where are you from?';
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

const space = ' ';
const comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

上例输出结果如下：

``` none
The original string is: "How are you! Where are you from?".
The separator is: " ".
The array has 7 elements: How / are / you! / Where / are / you / from? / .
The original string is: "How are you! Where are you from?".
The separator is: "undefined".
The array has 1 elements: How are you! Where are you from? / .
The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".
The separator is: ",".
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec / .
```

### 移除 `String` 对象中的空格

下面的例子中，`split()` 方法会查找零个或多个空白字符紧挨着的分号（;），找到后，将其从 `String` 对象中移除，`nameList` 数组就是 `split()` 方法根据这个匹配模式返回的结果。

``` JavaScript
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

const regexp = /\s*(?:;|$)\s*/; // 查找零个或多个空白字符 | 零个或多个空白字符紧挨着的分号（;）
const nameList = names.split(regexp);

console.log(nameList);
```

下面的输出结果，第一行输出了原始的 `String` 对象，第二行输出的是应用 `split()` 方法后的结果：

``` none
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand 
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

{% note info %}
  这个例子中，`split()` 的 `separator` 使用了 [JavaScript 正则表达式](/programming/javascript/regexp/)作为匹配模式。
{% endnote %}

### TODO 限制返回值中分割的元素数量

### TODO 靠[正则](/programming/javascript/regexp/)来分割 `String` 对象使结果中包含分割块

### TODO 使用一个数组来作为分隔符

### TODO 用 `split` 来颠倒字符串顺序

## 相关链接

[TODO String.prototype.charAt()](/programming/javascript/string/charAt.html)
[TODO String.prototype.indexOf()](/programming/javascript/string/indexOf.html)
[TODO String.prototype.lastIndexOf()](/programming/javascript/string/lastIndexOf.html)
[Array.prototype.join()](/programming/javascript/array/join.html)
