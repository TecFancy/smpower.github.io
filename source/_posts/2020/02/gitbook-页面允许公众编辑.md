---
title: gitbook 页面允许公众编辑
comments: true
tags:
  - Gitbook
  - gitbook-plugin-edit-link
  - 插件
categories:
  - Gitbook
abbrlink: f1c3df68
date: 2020-02-10 22:35:06
---

如果希望 Gitbook 页面允许公众编辑，可以引用 `edit-link` 插件，详细文档参见 [`edit-link` 插件](https://github.com/rtCamp/gitbook-plugin-edit-link)。

要启用该插件，在 `book.json` 中添加以下配置字段：

<!-- more -->

``` json
{
  "plugins": ["edit-link"],
  "pluginsConfig": {
    "edit-link": {
      "base": "https://github.com/smpower/supermemo/blob/gitbook",
      "label": "编辑本页"
    }
  }
}
```

然后安装该插件：

``` bash
$ gitbook install
```
