---
title: Hexo 图片懒加载方案
comments: true
tags:
  - Hexo
  - 图片懒加载
categories:
  - Hexo
abbrlink: b172d19b
date: 2020-02-05 21:28:51
---

如果博客文章中配置了很多图片后，页面加载速度会明显变慢，下面的图片懒加载方案就是解决这个问题的。

在站点根目录的配置文件中新增以下代码片段：

``` YML
lazyload:
  enable: true # 开启图片懒加载
  onlypost: false # 当为 true 时只针对 post 做图片懒加载，为 false 则应用到所有页面
  # loadingImg: # 不设置使用默认图片作为懒加载时的替代图片，设置后则使用该图片作为懒加载时显示的图片
```
