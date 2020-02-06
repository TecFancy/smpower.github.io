---
title: Hexo 添加粒子时钟
comments: true
tags:
  - Hexo
  - NexT
  - 粒子时钟
categories:
  - Hexo
abbrlink: 26884a10
date: 2020-02-06 11:54:38
---

与本站所展示的类似，在侧边栏的 `sidebar` 部分标签云底部添加粒子时钟效果。本站粒子时钟效果基于 Hexo 博客的 NexT 主题，其他主题的配置方式也可以参考这篇文章。

## 配置主题

为便于维护，通过修改主题配置文件（主题根目录的 `_config.yml` 文件）实现。打开主题目录下的 `_config.yml` 文件，新增以下代码片段：

``` YML 主题根目录 _config.yml
# 侧栏粒子时钟
diy_clock:
  clock: true # 为 true 时开启粒子时钟，为 false 时关闭粒子时钟
  runtime: true
```

<!-- more -->

## 自定义粒子时钟脚本

主题目录下新增文件 `source/js/custom/clock.js` 文件。`NexT` 主题默认没有 `custom` 文件夹，需要自己新建。在 `clock.js` 文件中填入以下代码：

``` JavaScript source/js/custom/clock.js
(function () {
  var digit =
    [
      [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
      ],//0
      [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
      ],//1
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ],//2
      [
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//3
      [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1]
      ],//4
      [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//5
      [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//6
      [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0]
      ],//7
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//8
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0]
      ],//9
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]//:
    ];

  var canvas = document.getElementById('canvasDiyBlock');

  if (canvas.getContext) {
    var cxt = canvas.getContext('2d');
    //声明canvas的宽高
    var H = 100, W = 700;
    canvas.height = H;
    canvas.width = W;
    cxt.fillStyle = '#f00';
    cxt.fillRect(10, 10, 50, 50);

    //存储时间数据
    var data = [];
    //存储运动的小球
    var balls = [];
    //设置粒子半径
    var R = canvas.height / 20 - 1;
    (function () {
      var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
      //存储时间数字，由十位小时、个位小时、冒号、十位分钟、个位分钟、冒号、十位秒钟、个位秒钟这7个数字组成
      data.push(temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]);
    })();

    /*生成点阵数字*/
    function renderDigit(index, num) {
      for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
          if (digit[num][i][j] == 1) {
            cxt.beginPath();
            cxt.arc(14 * (R + 2) * index + j * 2 * (R + 1) + (R + 1), i * 2 * (R + 1) + (R + 1), R, 0, 2 * Math.PI);
            cxt.closePath();
            cxt.fill();
          }
        }
      }
    }

    /*更新时钟*/
    function updateDigitTime() {
      var changeNumArray = [];
      var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
      var NewData = [];
      NewData.push(temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]);
      for (var i = data.length - 1; i >= 0; i--) {
        //时间发生变化
        if (NewData[i] !== data[i]) {
          //将变化的数字值和在data数组中的索引存储在changeNumArray数组中
          changeNumArray.push(i + '_' + (Number(data[i]) + 1) % 10);
        }
      }
      //增加小球
      for (var i = 0; i < changeNumArray.length; i++) {
        addBalls.apply(this, changeNumArray[i].split('_'));
      }
      data = NewData.concat();
    }

    /*更新小球状态*/
    function updateBalls() {
      for (var i = 0; i < balls.length; i++) {
        balls[i].stepY += balls[i].disY;
        balls[i].x += balls[i].stepX;
        balls[i].y += balls[i].stepY;
        if (balls[i].x > W + R || balls[i].y > H + R) {
          balls.splice(i, 1);
          i--;
        }
      }
    }

    /*增加要运动的小球*/
    function addBalls(index, num) {
      var numArray = [1, 2, 3];
      var colorArray = ["#3BE", "#09C", "#A6C", "#93C", "#9C0", "#690", "#FB3", "#F80", "#F44", "#C00"];
      for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
          if (digit[num][i][j] == 1) {
            var ball = {
              x: 14 * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
              y: i * 2 * (R + 1) + (R + 1),
              stepX: Math.floor(Math.random() * 4 - 2),
              stepY: -2 * numArray[Math.floor(Math.random() * numArray.length)],
              color: colorArray[Math.floor(Math.random() * colorArray.length)],
              disY: 1
            };
            balls.push(ball);
          }
        }
      }
    }

    /*渲染*/
    function render() {
      //重置画布宽度，达到清空画布的效果
      canvas.height = 100;
      //渲染时钟
      for (var i = 0; i < data.length; i++) {
        renderDigit(i, data[i]);
      }
      //渲染小球
      for (var i = 0; i < balls.length; i++) {
        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, R, 0, 2 * Math.PI);
        cxt.fillStyle = balls[i].color;
        cxt.closePath();
        cxt.fill();
      }
    }

    clearInterval(oTimer);
    var oTimer = setInterval(function () {
      //更新时钟
      updateDigitTime();
      //更新小球状态
      updateBalls();
      //渲染
      render();
    }, 50);
  }
})();
```

上面这段 `js` 代码就是粒子时钟的具体实现。

## 自定义视图

接下来在主题下新增一个视图文件 `layout/_custom/clock.swig`，用这个文件来引入上面的 `js` 代码。`NexT` 主题默认没有 `_custom` 文件夹，需自行创建。通常情况下，自定义的所有视图统一放置在 `_custom` 目录下。

``` YML layout/_custom/clock.swig
<div>
  <canvas id="canvasDiyBlock" style="width:60%;">当前浏览器不支持canvas，请更换浏览器后再试</canvas>
  {{- next_js('custom/clock.js') }}
</div>
```

代码中的第 3 行，`next_js()` 方法是 `NexT` 主题内置的用来引入 `js` 的通用方法，该方法将 `source/js/` 目录作为相对路径，所以上面的 `custom/clock.js` 其实就是主题目录中的 `source/js/custom/clock.js` 文件。

{% note warning %}
  因粒子时钟的实现是用现代浏览器支持的 `canvas` 绘图实现的，在 `IE` 等浏览器上可能无法正常显示，这时，页面上就会显示*当前浏览器不支持canvas，请更换浏览器后再试*。
{% endnote %}

## 导入视图

至此，在页面上任意位置引入上面的 `layout/_custom/clock.swig` 文件即可实现粒子时钟了。比如放在页面的侧边栏，既美观又不影响网站的易用性。打开主题目录下的 `layout/_macro/sidevar.swig` 文件，找到 `class` 为 `sidebar-inner` 的 `div` 元素，在该元素中最后位置引入上面的 `clock.swig` 文件：

``` SWIG
{%- if theme.diy_clock.clock %}
  {%- include '../_custom/clock.swig' %}
{%- endif %}
```

当主题配置中的 `diy_clock.clock` 为 `true` 时，页面加载粒子时钟。

## 小结

这篇文章介绍了如何在页面引入粒子时钟方法，按照类似的思路，任何第三方或自定义的任意功能都可以根据这个思路来实现。关于 `NexT` 主题的详细文档参考[官网](https://hexo.io/)，也可在[本站](/)浏览相关页面。
