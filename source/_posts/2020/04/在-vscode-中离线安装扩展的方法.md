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

按照以下步骤在离线环境下安装 vscode 扩展：

1. 在有网络连接的计算机中访问 vscode 扩展/插件市场 [https://marketplace.visualstudio.com/vscode](https://marketplace.visualstudio.com/vscode)；

2. 找到需要的扩展/插件，下载 .vsix 格式的扩展/插件到本地；

3. 将扩展/插件传输到离线环境的计算机中；

4. 进入 vscode 安装目录下的 bin 目录，在终端执行以下命令安装离线扩展/插件：

    ``` bash
      $ code --install-extension /your/extension/file
    ```
5. 安装成功后打开或重启 vscode 查看已安装的扩展/插件。
