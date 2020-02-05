---
title: JavaScript 动态创建命名空间 
comments: true
categories:
  - - 技术
    - JavaScript
keywords:
  - 博客
  - 若非的博客
  - 技术博客
  - 空间周边
  - 技术
  - JavaScript
abbrlink: d4abee5a
date: 2020-02-05 12:51:36
tags:
---

``` JavaScript
let App = {};
App.namespace = function(name) {
  let parts = name.split('.');
  let current = App;
  for (let i in parts) {
    if (!current[parts[i]]) { current[parts[i]] = {}; }
    current = current[parts[i]];
    }
  };
​App.namespace('event');
App.namespace('configMap.html');
```

上面的代码等价于

``` JavaScript
let App = {
  event: {},
  configMap: {
    html: {}
  }
};
```
