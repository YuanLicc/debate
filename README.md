# debate
如果你是辩论赛主持人，那么这就是你所需要的辩论赛html页面，只需要简单的打开index.html，你就可以使用一个默认辩论赛流程（你值得拥有）。

### 介绍
- 可配置  
支持自定义流程，可配置。
- 动画  
支持炫酷的页面切换动画效果。
### 配置
可对js/main.js中开头的debate对象进行配置，达到自己想要的效果，下面是默认的debate配置：
``` JavaScrip
var debate = {
  title : "辩论赛", //主页头部标题
  positive : "工作中遇到碧池要以牙还牙", //正方观点
  negative : "工作中遇到碧池还是不跟TA一般计较", //反方观点
  startback : "images/start.jpg", //主页背景图片，你可以放置图片到images文件夹下，再在这里使用。
  end : "完毕", //结束页感谢语
  endback : "images/start.jpg", //结束页背景图片
  animationTime : 1, //页面切换动画时间（单位秒）
  startAnimation : { //主页页面切换动画，可在css/annimation.css中进行定义，再在此处使用。
    centerToLeft : "centerToLeft", // 向左移出屏幕的动画，此处配置的动画可在css/annimation.css中找到，是一个平移的动画。
    leftToCenter : "leftToCenter" // 向右移入屏幕的动画。
  },
  endAnimation : { //结束页页面切换动画
    rightToCenter : "rightToCenter",
    centerToRight : "centerToRight"
  },
  pages : [// 辩论赛流程页（数组），一般一个流程定义为一个页面，也就是此数组的一个元素。
    {
      title : "开篇立论", //流程页title
      desc : "双方陈诉己方的观点，由正方开始", //流程的描述语。
      back : "images/back.jpg", //流程页背景图片
      timers : [ //流程页计时器（数组）
        {
          time : 150 //计时器秒数
        },
        {
          time : 150
        }
      ],
      animation : { //流程页动画
        leftToCenter : "leftToCenter", //从左移入屏幕的动画
        centerToRight : "centerToRight", // 其它自行理解
        rightToCenter : "rightToCenter", 
        centerToLeft : "centerToLeft" 
      }
    },
    {
      title : "攻辩",
      desc : "正方二辩选择反方二辩或三辩进行一对一攻辩",
      back : "images/back.jpg",
      timers : [
        {
          time : 105,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    },
    {
      title : "攻辩",
      desc : "反方二辩选择正方二辩或三辩进行一对一攻辩",
      back : "images/back.jpg",
      timers : [
        {
          time : 105,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    },
    {
      title : "攻辩",
      desc : "正方三辩选择反方二辩或三辩进行一对一攻辩",
      back : "images/back.jpg",
      timers : [
        {
          time : 105,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    },
    {
      title : "攻辩",
      desc : "反方三辩选择正方二辩或三辩进行一对一攻辩",
      back : "images/back.jpg",
      timers : [
        {
          time : 105,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    },
    {
      title : "攻辩",
      desc : "正方一辩进行攻辩小结，反方一辩进行攻辩小结",
      back : "images/back.jpg",
      timers : [
        {
          time : 90,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    },
    {
      title : "自由辩论",
      desc : "由正方开始",
      back : "images/back.jpg",
      timers : [
        {
          time : 480,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    },
    {
      title : "总结陈词",
      desc : "反方四辩开始",
      back : "images/back.jpg",
      timers : [
        {
          time : 180,
        }
      ],
      animation : {
        leftToCenter : "leftToCenter", 
        centerToRight : "centerToRight",
        rightToCenter : "rightToCenter",
        centerToLeft : "centerToLeft"
      }
    }
  ]
}
```
### 注意
必须配置动画效果，因为在设置动画时，配置了：
``` css
animation-fill-mode : forwards;
```
该配置意思为，当动画结束时，保持动画时结束的状态，也就是在动画里配置了从left:0%到left:100%,那么当动画结束时，动画影响的元素的left就是100%。
