---
title: JavaScript 设计模式：通用的单例模式 
comments: true
categories:
  - - 前端开发
    - 设计模式
abbrlink: ae6965e
date: 2020-02-05 12:25:22
tags:
  - JavaScript
  - 设计模式
  - 单例模式
---


一般网站中的登录弹框，在整个页面中是唯一的，无论我们单击多少次登录按钮，登录弹框总是创建一次。下面的代码使用单例模式解决了类似的问题：

``` JavaScript
const getSingle = function(fn) {
  let result;
  return function() {
    return result || (result = fn.apply(this, arguments));
  };
};

const createLayer = function() {
  let div = document.createElement('div');
  div.textContent = 'I am a layer.';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};

const createSingleLayer = getSingle(createLayer);

document.querySelector('.login').onclick = function() {
  const loginLayer = createSingleLayer();
  loginLayer.style.display = 'block';
};
```
