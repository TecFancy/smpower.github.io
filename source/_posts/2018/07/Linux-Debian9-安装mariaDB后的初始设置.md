---
title: Linux(Debian9) 安装 MariaDB 后的初始设置
tags:
  - Linux
  - Software
  - MariaDB
categories:
  - [How]
abbrlink: a08c9071
date: 2018-07-04 16:10:54
---

## 创建用户

1. 创建用户

``` shell
mysql> insert into mysql.user(Host,User,Password) values('localhost','admin',password('admin'));
```

2. 刷新系统权限表

``` shell
mysql> flush privileges;
```

<!-- more -->

## 在 root 权限下创建数据库

1. 创建数据库

``` shell
mysql> create database mydb;
```

2. 授权 admin 用户用户 mydb 数据库的所有权

``` shell
grant all privileges on mydb.* to admin@localhost identified by 'admin';
```

3. 刷新系统权限表

``` shell
mysql> flush privileges;
```

## 删除用户

1. 删除用户

``` shell
@> mysql -uroot -p
@> password
mysql> DELETE FROM user WHERE User='admin' and Host='localhost';
mysql> flush priviledges;
```

2. 删除用户的数据库

``` shell
mysql> DROP DATABASE mydb;
```

## 修改指定用户的密码

``` shell
@> mysql -uroot -p
@> password
mysql> update mysql.user set password=password('new password') where User='admin' and Host = 'localhost';
mysql> flush privileges;
```
