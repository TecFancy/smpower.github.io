---
title: Hexo 添加标签云
comments: true
abbrlink: a602c461
date: 2020-02-05 22:33:43
tags:
  - Hexo
  - NexT
  - 标签云
categories:
  - Hexo
---

## 安装插件

打开站点根目录下的 `package.json` 文件，添加依赖 `"hexo-tag-cloud": "2.*"` 后执行 `npm i`。或者直接使用命令行安装：

``` bash
npm i hexo-tag-cloud --save
```

<!-- more -->

## 配置插件

打开博客根目录的配置文件 `_config.yml` 并添加以下代码片段：

``` YML
# hexo-tag-cloud 标签云 | see https://github.com/MikeCoder/hexo-tag-cloud
tag_cloud:
  textFont: Trebuchet MS, Helvetica # 字体
  textColor: '#555' # 字体颜色
  textHeight: 25 # 字体高度
  outlineColor: '#E2E1D1' # 字体背景色
  maxSpeed: 0.1 # 标签云最大移动速度
```

之后在主题目录下修改视图。主题不同，需要修改的文件也不同，此处以 NexT 主题为例，其他主题请参考[插件文档](https://github.com/MikeCoder/hexo-tag-cloud/blob/master/README.ZH.md)。

打开 `layout/_macro/sidevar.swig` 文件，找到类名为 `sidebar-inner` 的 `div` 元素，在该元素中最后位置添加以下代码片段：

``` SWIG
{% if site.tags.length > 1 %}
<script type="text/javascript" charset="utf-8" src="{{ url_for('/js/tagcloud.js') }}"></script>
<script type="text/javascript" charset="utf-8" src="{{ url_for('/js/tagcanvas.js') }}"></script>
<div class="widget-wrap">
    <div id="myCanvasContainer" class="widget tagcloud">
    <canvas width="220" height="250" id="resCanvas" style="width=100%">
        {{ list_tags() }}
    </canvas>
    </div>
</div>
{% endif %}
```

## 本地预览

完成上面步骤后，在终端执行：

``` bash
hexo clean && hexo s
```

即可预览效果。
