---
title: 使用 Docker 部署 WordPress
tags:
  - WordPress
categories:
  - [技术, Docker]
abbrlink: 11d50f65
date: 2020-01-19 02:17:46
comments: true
---

Docker 是一个应用容器引擎，可以将应用运行时环境打包到一个容器中，打包后的容器可移植到任何一个 Linux 环境下运行，能有效避免繁琐的配置步骤，下面是使用 Docker 搭建 WordPress 博客的具体操作。

<!-- more -->

## 安装 Docker

以 Ubuntu 为例，安装 Docker 执行：

``` bash
sudo apt-get install docker.io
```

其他发行版或平台，请参考 [Docker 官网](https://docs.docker.com/)安装指南。

## 安装 WordPress 和 MySQL

使用 WordPress 前需要先安装 MySQL 数据库，先将 MySQL 数据库镜像拉取到本地：

``` bash
docker pull mysql:5.7
```

这里指定了 MySQL 数据的版本为 5.7，然后拉取 WordPress 镜像：

``` bash
docker pull wordpress
```

将 MySQL 和 WordPress 下载到本地后，首先开启 MySQL 服务：

``` bash
docker run -d --name db.wordpress -e MYSQL_ROOT_PASSWORD=admin mysql:5.7
```

`run`: 启动一个容器
`-d`: 启动的容器在后台运行
`--name`: 给启动的容器起个名字，这里叫做 db.wordpress
`-e MYSQL_ROOT_PASSWORD`: 这里是设置 MySQL 的 root 密码
`:5.7`: 指定 MySQL 的版本

启动 MySQL 容器后可执行 `docker logs -f db.wordpress` 查看容器运行日志。

之后，启动一个 WordPress 容器，将 db.wordpress 容器连接到 WordPress 容器即可：

```bash
docker run -d -p 8080:80 --name wordpress --link db.wordpress:mysql wordpress
```

`-p`: 这里是指定 WordPress 容器的访问端口，在浏览器中打开 http://localhost:8080/ 即可预览 WordPress 站点
`--link`: 意思是将 db.wordpress 容器挂载到 mysql，这样 WordPress 就能通过 mysql 访问到 db.wordpress 数据库了

至此，基于 Docker 的 WordPress 博客便搭建完成。Happy blogging!
