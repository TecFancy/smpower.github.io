---
title: >-
  Ubuntu18.04.1 解决 Error: ENOSPC: System limit for number of file watchers
  reached, ...
abbrlink: a49f12f
tags:
categories:
  - [How]
---

在 Ubuntu 等 Linux 系统中执行某系任务时，控制台若抛出以下错误信息：

``` bash
Error: ENOSPC: System limit for number of file watchers reached, ...
```

说明当前系统最大监听文件数太小而导致的，解决方法是增加当前系统最大监听文件数量。

``` bash
$ sudo sysctl fs.inotify.max_user_watches=524288
$ sudo sysctl -p
```

{% note info %}
获取当前系统监听文件数量：

``` bash
$ cat /proc/sys/fs/inotify/max_user_watches
```
{% endnote %}
