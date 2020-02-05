---
title: JavaScript 动态创建命名空间 
comments: true
categories:
  - - 前端开发
    - JavaScript
abbrlink: d4abee5a
date: 2020-02-05 12:51:36
tags:
  - JavaScript
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
