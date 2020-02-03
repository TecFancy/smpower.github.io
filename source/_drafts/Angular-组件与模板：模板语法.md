---
title: Angular 组件与模板：模板语法
abbrlink: 67ee979e
keywords: [博客, 若非的博客, Angular, angular, Angular 组件与模板, angular 组件与模板, Angular 模板语法, angular 模板语法, Angular 组件, Angular 模板, angular 组件, angular 模板]
categories:
  - [技术, Angular]
tags:
---

## 模板与插值表达式

### 插值

“插值”是指将表达式嵌入到标记文本中。默认情况下，插值会用双花括号 {{ 和 }} 作为分隔符。

<!-- more -->

花括号之间的文本通常是组件属性的名字。Angular 会把这个名字替换为响应组件属性的字符串值。

{% tabs tab1, 1 %}
<!-- tab app.component.html -->
``` HTML
<p>{{ title }}</p>
<div>
  <img src="{{ itemImageUrl }}">
</div>
```
<!-- endtab -->
<!-- tab app.component.ts -->
``` TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'My Title';
  itemImageUrl: string = 'http://xxx.com/xxx.png';
}
```
<!-- endtab -->
{% endtabs %}

上面模板文件 `app.component.html` 中的插值文本 `title` 会把 `app.component.ts` 组件中的属性 `title` 的值渲染到 `p` 标签之间。同理，插值文本 `itemImageUrl` 也会将组件中对应属性值渲染到 `img` 标签的 `src` 属性上。

如果插值文本是一个表达式，Angular 会先计算它的值，再将计算出的值赋值给元素或指令的属性。

{% tabs tab2, 1 %}
<!-- tab app.component.html -->
``` HTML
<!-- "The sum of 1 + 1 is 2." -->
<p>The sum of 1 + 1 is {{ 1 + 1 }}</p>
```
<!-- endtab -->
<!-- tab app.component.ts -->
``` TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.ts',
})
export class AppComponent { }
```
<!-- endtab -->
{% endtabs %}

### 模板表达式

不能使用具有或可能引发副作用的 JavaScript 表达式，包括：

- 赋值（=, += -=, ...）
- new、typeof、instanceof 等运算符
- 使用分号（;）或逗号（,）串联起来的表达式
- 自增和自减运算符：++ 和 --
- 一些 ES2015+ 版本的运算符

### 表达式上下文

典型的**表达式上下文**就是这个组件这个实例，它是各种绑定值的来源。

1. 引用组件属性

    {% tabs tab3, 1 %}
    <!-- tab app.component.html -->
    ``` TypeScript
    <h1>{{ title }}</h1>
    <img src="itemImageUrl">
    ```
    <!-- endtab -->
    <!-- tab app.component.ts -->
    ``` TypeScript
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
    })
    export class AppComponent {
      title: string = 'My Title';
      itemImageUrl: string = 'https://xxx.com/xxx.png';
    }
    ```
    <!-- endtab -->
    {% endtabs %}

2. 引用模板上下文属性

    {% tabs tab4, 1 %}
    <!-- tab app.component.html(template input value) -->
    ``` HTML
    <ul>
      <li *ngFor="let customer of customers">{{ customer.name }}<li>
    </ul>
    ```
    <!-- endtab -->
    <!-- tab app.component.html(template reference value) -->
    ``` HTML
    <label>Type something:
      <input #customInput>{{ customInput.value }}
    </label>
    ```
    <!-- endtab -->
    {% endtabs %}

{% note info %}
  模板表达式不能引用全局命名空间中的任何东西，比如 `window` 或 `document`。它们也不能调用 `console.log` 或 `Math.max`。它们只能引用表达式上下文中的成员。
{% endnote %}

## 模板语句

模板语句用来响应由绑定目标（如 `HTML` 元素、组件或指令）触发的事件。

``` HTML app.component.html
<button (click)="deletePerson()">Delete person</button>
```

下列 `JavaScript` 语法在模板语句中是不被允许的：

- `new` 运算符
- 自增和自减运算符：`++` 和 `--`
- 操作并赋值，例如： `+=` 和 `-=`
- 位运算符 `|` 和 `&`

{% note info %}
  模板语法同样不能引用全局命名空间的任何东西。比如不能引用 `window` 或 `document`，也不能调用 `console.log` 或 `Math.max`。
{% endnote %}

``` HTML 模板上下文和组件上下文中变量名的优先级
<button (click)="onSave($event)">Save</button>
<button *ngFor="let person of persons" (click)="deletePerson(person)">{{ person.name }}</button>
<form #personForm (ngSubmit)="onSubmit(heroForm)">...</form>
```

模板上下文中变量名的优先级高于组件上下文中的变量名。上面 `deletePerson(person)` 中， `person` 是一个模板输入变量，而不是组件中的 `person` 属性。

模板语句中，常规的做法是函数调用或者属性赋值，要避免写复杂的模板语句。模板表达式也要遵循这个原则。

## 绑定语法：概览

`Angular` 提供了多种数据绑定方式。绑定类型可分为三类，按数据流向方向可分为：

- 从**数据源到视图**
- 从**视图到数据源**
- 双向：**视图到数据源到视图**

1. 单向，从数据源到视图
    1. 绑定类型
        - 插值
        - 属性
        - Attribute
        - CSS 类
        - 样式
    2. 语法
        - `{{ expression }}`
        - `[target]="expression"`
        - `bind-target="expression"`
2. 单项，从视图到数据源
    1. 绑定类型
        - 事件
    2. 语法
        - `(target)="statement"`
        - `on-target="statement"`
3. 双向，从视图到数据源到视图
    1. 绑定类型
    2. 语法
        - `[(target)]="expression"`
        - `bindon-target="expression"`
