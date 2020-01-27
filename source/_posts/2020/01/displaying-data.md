---
title: Angular 组件与模板：显示数据
comments: true
abbrlink: 92bfa88f
date: 2020-01-27 16:46:25
tags:
categories:
  - [技术, Angular]
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
  name: string = 'Olive';
}
```
<!-- endtab -->

<!-- tab app.component.html -->
``` TypeScript
{{ name }}
```
<!-- endtab -->

{% endtabs %}
