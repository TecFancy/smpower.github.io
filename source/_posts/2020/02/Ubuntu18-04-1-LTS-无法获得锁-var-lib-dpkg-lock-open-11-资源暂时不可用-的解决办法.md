---
title: 'Ubuntu18.04.1 LTS - 无法获得锁  /var/lib/dpkg/lock - open (11: 资源暂时不可用)的解决办法'
comments: true
tags:
  - How
  - Linux
  - Ubuntu
categories:
  - - How
    - Linux
abbrlink: ba30127f
date: 2020-02-01 12:41:47
---


因未正常关机——直接切断电源，再开机后安装软件时提示下面错误：

``` bash
E: 无法获得锁 /var/lib/dpkg/lock-frontend - open (11: 资源暂时不可用)
E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), is another process using it?
```

查了下资料，因为直接切断电源导致资源没有释放。解决方法是直接结束被占用进程：

``` bash
sudo rm /var/lib/dpkg/lock-frontend
sudo rm /var/lib/dpkg/lock
```
