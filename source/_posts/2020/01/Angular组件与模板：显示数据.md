---
title: Angular 组件与模板：显示数据
comments: true
abbrlink: 9897f818
date: 2020-01-27 16:46:25
tags:
  - Angular
  - TypeScript
categories:
  - - 前端开发
    - Angular
---

在 Angular 应用中，可以通过把 HTML 模板中的控件绑定到 Angular 组件的属性来显示数据。

<!-- more -->

## 使用差值显示组件属性

要在页面上显示组件中的某个属性值，最简单的一种方式便是使用差值来绑定属性名——把属性名包裹在双花括号中放进视图模板，如 `{{name}}}`。

到 `app.component.ts` 文件中声明一个属性 `name` 并到 `app.component.html` 模板中绑定该属性名：

{% tabs tab,1 %} 名字为 tab，默认在第 1 个选项卡，如果是 -1 则隐藏
<!-- tab app.component.ts -->
``` TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  // 变量赋值
  name: string = 'Olive';
}
```
<!-- endtab -->

<!-- tab app.component.html -->
``` HTML
<p>{{ name }}</p>
```
<!-- endtab -->
{% endtabs %}

Angular 会自动从组件中提取 `name` 属性的值，并把值插入到浏览器中。当属性值发生变化时，Angular 就会自动刷新显示。

默认情况下，Angular CLI 命令 `ng generate component` 在生成组件时会带有模板文件，也就是上面的 `app.component.html` 文件。如果想要使用内联（inline）模板，只需将 `templateUrl` 指定的路径换成由一对反引号（`）包裹的模板内容即可：

``` TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // 模板文件内容是包在反引号（`）中的一个多行字符串
  templateUrl: `
    <p>{{ name }}</p>
  `,
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  name: string = 'Olive';
}
```

## 使用构造函数初始化

上面的 `app.component.ts` 使用的是变量赋值来初始化的组件，还可以通过构造函数来初始化组件：

``` TypeScript
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'Olive';
  }
}
```

## 使用 `ngFor` 显示数组属性

上面在 `app.component.html` 模板文件中显示了一个名为 `name` 的变量，如果要显示一个数组属性就要用到 `ngFor` [指令](/programming/angular/directive.html)了。将 `name` 重定义为数组中的第一个名字：

``` TypeScript
export class AppComponent {
  classmates: [] = ['Olive', 'Amy', 'Jack', 'Join'];
  name: string = classmates[0];
}
```

在模板文件 `app.component.html` 中使用 `ngFor` 指令来显示 `classmates` 中的每个元素：

``` HTML
<p>{{ name }}</p>
<ul>
  <li *ngFor="let person of classmates">
    {{ person }}
  </li>
</ul>
```

模板元素中的 `ngFor` 是 Angular 中的”迭代“指令，它将 `<li>` 元素及其子集标记为”迭代模板“：

``` HTML
<li *ngFor="let person of classmates">
  {{ person }}
</li>
```

## 为数据创建一个类

上面代码中，直接将数据定义在了组件内部。在真正开发一个应用时，这显然不是最佳实践。而且，上面 `name` 属性类型是一个字符串，真是的应用中，大多数是对象的绑定。要将此字符串绑定转换为对象绑定，需要把这个名字数组转换成名字对象。首先通过 Angular CLI 命令创建一个类：

``` bash
ng generate class classmates
```

代码如下：

``` TypeScript
export class Classmates {
  constructor(
    // 1. 声明了两个构造函数参数 id 及其类型
    // 2. 声明了一个同名的公共属性
    // 3. 当创建该类的第一个实例时，把该属性初始化为相应的参数值
    public id: number,

    // 1. 声明了两个构造函数参数 name 及其类型
    // 2. 声明了一个同名的公共属性
    // 3. 当创建该类的第一个实例时，把该属性初始化为相应的参数值
    public name: string
  ) {}
}
```

这个 `Classmates` 类具有一个构造函数和两个属性： `id` 和 `name`。

### 导入 `Classmates` 类

导入 `Classmates` 类后，组件的 `classmates` 属性就可以返回一个**类型化的** `person` 对象数组了。

{% tabs tab2,1 %}
<!-- tab app.component.ts(use class) -->
``` TypeScript
import { Component } from '@angular/core';
import { Classmates } from './Classmates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Classmates';
  classmates: [Classmates] = [
    new Classmates(1, 'Olive'),
    new Classmates(13, 'Amy'),
    new Classmates(15, 'Jack'),
    new Classmates(20, 'Join')
  ];
  person: string = this.classmates[0];
}
```
<!-- endtab -->

<!-- tab app.component.html(use class) -->
``` HTML
<h1>{{title}}</h1>
<h2>My favorite classmate is: {{person.name}}</h2>
<p>Classmates:</p>
<ul>
  <li *ngFor="let classmate of classmates">
    {{ classmate.name }}
    </li>
</ul>
```
<!-- endtab -->
{% endtabs %}

## 通过 `ngIf` 进行条件显示

有时，需要在特定情况下显示视图或视图的一部分。Angular 的 `ngIf` 指令会根据一个布尔值来显示或移除一个元素，比如当 `classmates` 数组长度大于 3 时，显示一句 `There are many classmates!`：

``` HTML
<p *ngIf="classmates.length > 3">THere are many classmates!</p>
```

## 小结

这里，主要总结了在 Angular 中显示数据的方法，并结合 `ngFor` 和 `ngIf` 指令的用法，达到显示一个列表、按条件显示数据的方法。
