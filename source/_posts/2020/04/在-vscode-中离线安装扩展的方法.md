---
title: 在 vscode 中离线安装扩展的方法
comments: true
abbrlink: b874373c
date: 2020-04-29 10:40:44
tags: vscode
categories:
  - - 前端开发
    - vscode
---

明明可以在线安装 vscode 扩展，为什么要使用离线的方式安装呢？在线安装它不香嘛～

在线安装虽然香，但是遇到下面这种情况，它就香不起来啦。

<!-- more -->

现在许多企业把本地的开发环境搞到了云端，既能保证开发环境的一致性还能为开发人员提供强大的硬件性能。同时，为了项目安全性考虑，云端的开发环境是没有办法上网的，这种情况下怎么使用 vsocde 提供的扩展呢？下面手把手教你如何在离线环境下安装 vscode 插件。

## 到 vscode 插件市场下载需要的扩展

下面我们以安装简体中文语言包为例。访问 vscode 插件市场（[https://marketplace.visualstudio.com](https://marketplace.visualstudio.com)），搜索 chinese 找到我们需要的简体中文语言包。

![VSCode 插件市场](https://i.loli.net/2020/06/05/3PMAIxut5jGFJmn.png)

上面红框中的结果就是我们要的简体中文语言包扩展文件。点进去，在页面右侧有一个 **Download Extension** 按钮，点击这里下载中文语言包文件。

![简体中文语言包](https://i.loli.net/2020/06/05/c3IzVuEWLvtjpOD.jpg)

确认下载的文件是否是以 .vsix 为扩展的文件。

![扩展文件](https://i.loli.net/2020/06/05/wqUxcoQNrVhGjuR.png)

## 离线安装扩展

将扩展文件放到 vscode 安装目录下的 bin 目录。windows 下的 bin 目录很好找，在 vscode 安装目录下一眼就可以找到：

![Windows 下 bin 目录位置](https://i.loli.net/2020/06/05/hw9AdX5Lsex83yQ.png)

对于 mac 用户来说，要找到 bin 目录要稍微麻烦一点。打开 Finder，找到 vscode 应用程序，双指轻按触控板，选择弹出框的 显示包内容 选项。

![Mac 下显示包内容](https://i.loli.net/2020/06/05/fW6Y3eXvyBxpcqE.png)

依次打开 Contents -> Resources -> app 即可找到 bin 目录：

![Mac 下 bin 目录位置](https://i.loli.net/2020/06/05/FcqagUehb13zJGl.png)

我们看到 bin 目录下有一个名为 code 的可执行文件，我们需要在命令行工具中执行这个可执行文件。随便找个命令行工具，比如 windows 的 cmd 或者 mac 的 item 都可以，在命令行工具中 cd 到 bin 目录：

![终端执行命令](https://i.loli.net/2020/06/05/irqcvsBgH1aItw2.png)

在命令行中执行以下命令：

``` bash
code --install-extension ./MS-CEINTL.vscode-language-pack-zh-hans-1.46.0.vsix
```

到这里我们就成功安装上简体中文离线扩展包文件啦～ 安装其他扩展也是同样的步骤。遇到任何问题欢迎在下方留言讨论哦 ^_^

----

> 文章首发于微信公众号【iCoder】，欢迎关注 ^_^
