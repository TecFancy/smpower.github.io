---
title: 在 Github 上添加 SSH key
date: 2018-07-05 15:55:07
tags:
  - SSH
  - Github
categories:
  - 笔记
---

## 检查本地是否存在 SSH Key

Windows 下运行 Git Bash，Linux 下打开 Terminal：

``` bash
$ cd ~/.ssh
$ ls
```

如果之前设置过 SSH Key 的话会列出 id_rsa 和 id_rsa.pub 这两个文件，如果没有的话，再创建一个新的 SSH Key。

<!-- more -->

## 创建 SSH Key

``` bash
$ ssh-keygen -t rsa -C 'email@example.com'
```

上面代码中参数的含义是：
`-t` 指定秘钥类型，默认是 rsa，可以省略
`-C` 设置注释文字，比如邮箱

之后在提示输入一个文件名时，回车使用默认文件名就好：

``` bash
$ Generating public/private rsa key pair.
# Enter file in which to save the key (~/.ssh/id_rsa): [Press Enter]
```
