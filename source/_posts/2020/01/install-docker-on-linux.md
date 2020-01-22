---
title: Linux 下安装 Docker
tags:
  - Docker
  - Linux
categories:
  - Docker
abbrlink: a9550548
isShow: true
date: 2020-01-18 23:48:21
---

安装 Docker 非常简单。任何一门编程语言，我们都是从 Hello World 开始，这里，我们的首要目标就是先把 Docker 跑起来。下面以 Ubuntu 为例看看我们是如何把 Docker 跑起来的。

<!-- more -->

Ubuntu 下安装 Docker 执行：
``` bash
sudo apt-get install docker.io
```

安装后，执行  `docker version` 查看版本：
``` bash
Client:
  Version:           18.06.1-ce
  API version:       1.38
  Go version:        go1.10.4
  Git commit:        e68fc7a
  Built:             Wed Sep 26 01:43:33 2018
  OS/Arch:           linux/amd64
  Experimental:      false

Server:
  Engine:
    Version:          18.06.1-ce
    API version:      1.38 (minimum version 1.12)
    Go version:       go1.10.4
    Git commit:       e68fc7a
    Built:            Mon Sep 24 22:42:19 2018
    OS/Arch:          linux/amd64
    Experimental:     false
```

如果出现权限出错的问题，执行 `sudo docker version`。下面就让 Docker 跑起来吧：
``` bash
docker run --name hello hello-world
```
上面这句话的意思是启动一个名为 hello 的容器，该容器用到的镜像是 hello-world，当本地没有该竟像时，会先从 Docker 官方仓库下载该镜像到本地，然后启动。不出意外会打印一下信息：
``` bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
     (amd64)
 3. The Docker daemon created a new container from that image which runs the
     executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
     to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
  $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
  https://hub.docker.com/

For more examples and ideas, visit:
  https://docs.docker.com/get-started/
```

假如，这里出现权限问题，仍然以 sudo 身份运行。如果相以当前登陆的用户运行 Docker 而不想在 run 一个容器时前面加上 sudo，可以通过一下办法来解决：
``` bash
sudo gpasswd -a ${USER} docker  # 将当前用户加入 Docker 用户组
sudo systemctl restart docker  # 重启 Docker 服务
```
执行完毕以后，要重启计算机哦。至此，便顺利地把 Docker 安装上了， Happy Dockering
