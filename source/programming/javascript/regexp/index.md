---
title: JavaScript 正则表达式
comments: true
date: 2020-01-30 20:27:03
---

正则表达式是用于匹配字符串中字符组合的模式。在 `JavaScript` 中，正则表达式也是对象。这些模式被用于 `RegExp` 的 [`exec`](/programming/javascript/regexp/exec.html) 和 [`test`](/programming/javascript/regexp/test.html) 方法，以及 [`String`](/programming/javascript/string/) 的 [`match`](/programming/javascript/string/match.html)、[`matchAll`](/programming/javascript/string/matchAll.html)、[`replace`](/programming/javascript/string/replace.html) 和 [`split`](/programming/javascript/string/split.html) 方法。

``` JavaScript JavaScript Demo: RegExp Constructor
const regexp1 = /\w+/;
const regexp2 = new RegExp('\\w+');

console.log(regexp1); // Expected output: \w+
console.log(regexp2); // Expected output: \w+
console.log(regexp1 === regexp2); // Expected output: false
```

## 语法

1. 字面量语法

    ``` JavaScript
    /pattern/flags
    ```

2. 构造函数语法

    ``` JavaScript
    new RegExp(pattern [, flags])
    ```

3. 工厂符号语法

    ``` JavaScript
    RegExp(pattern [, flags])
    ```

### 参数

**pattern** | 必选
正则表达式的文本。

**flags** | 可选
如果指定，标志可以具有以下值的任意组合：

| 标志 | 描述
|-----|-----
|**g**| 全局匹配。找到所有匹配，而不是第一个匹配。
|**i**| 忽略大小写。
|**m**| 多行。将开始和结束字符（^ 和 $）视为在多行上工作——分别匹配每一行的开始和结束（由 \n 或 \r 分割），而不是只匹配整个输入字符串的最开始和最末尾出。
|**u**| Unicode。
|**y**| 粘性匹配。仅匹配目标字符串中此正则表达式的 `lastIndex` 属性指示的索引（且不尝试从任何后续的索引匹配）。
|**s**| dotAll 模式。匹配任何字符（包括终止符 '\n'）。

## 描述

## 示例

## 相关链接
