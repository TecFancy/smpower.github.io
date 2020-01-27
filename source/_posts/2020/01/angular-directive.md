---
title: Angular 指令 (directive)
comments: true
abbrlink: c268290c
date: 2020-01-27 21:41:13
tags:
  - Angular
  - Directive
categories:
  - [技术, Angular]
---

一个可以修改 `DOM` 结构或修改 `DOM` 和组件数据模型中某些属性的类。 指令类的定义紧跟在 `@Directive()` 装饰器之后，以提供元数据。

指令类几乎总与 HTML 元素或属性 (attribute) 相关。 通常会把这些 HTML 元素或者属性 (attribute) 当做指令本身。 当 Angular 在 HTML 模板中发现某个指令时，会创建与之相匹配的指令类的实例，并且把这部分 `DOM` 的控制权交给它。

指令分为三类：

组件使用 `@Component()`（继承自 `@Directive()`）为某个类关联一个模板。

属性型指令修改页面元素的行为和外观。

结构型指令修改 `DOM` 的结构。

Angular 提供了一些以 `ng` 为前缀的内置指令。你也可以创建新的指令来实现自己的功能。 你可以为自定义指令关联一个选择器（一种形如 `<my-directive>` 的 HTML 标记），以扩展模板语法，从而让你能在应用中使用它。
