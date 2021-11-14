# 微信小程序——查询小程序

[https://github.com/redhat123456/Tanger_query](https://github.com/redhat123456/Tanger_query)

微信小程序查询小程序，长期维护版本，欢迎大家踊跃提交奉献代码；

预览：请扫描下方二维码

<p align="center"> <img src="https://i.loli.net/2021/11/06/H1yMevCq8d4PUzJ.jpg"></img> </p>

## 预览

<div style="float: left;width: 100% " align="center"> 
<img src="https://github.com/redhat123456/pohots/blob/master/2.png?raw=true"></img>
     </div>           
          上面是首页和快递查询页面
<div style="float: left;width: 100%" align="center">
<img src="https://github.com/redhat123456/pohots/blob/master/1.png?raw=true"></img>
</div>

以上就是图片预览 🎈✨

## 简介

该项目无需后端直接`clone`在本地就可以使用了，本项目借用了第三方的API接口（好像现在挺流行用别人写好的接口），

## 初心

事情还要从一个梦说起，那时候的我暑假留校做了个奇怪的梦，那天只记得在做了个微信小程序可以做快递查询的小程序，后面发现可以更多的东西就相当于扩展业务，也就多弄了几个，当然我们还可以继续扩展，将这个小程序的功能进行扩大化，后端我没有大数据不知道怎么写，欢迎任何想要对本项目有想法、有更新的人对该项目拉个 pull-request。

## 使用说明

本项目的后端使用第三方后端提供数据 👉[进制数据](https://www.binstd.com/)👈，只需要注册然后登录，将上面的 appkey 复制下来

![1.jpg](https://i.loli.net/2021/11/06/cwBdQvCX1JnWPzg.jpg)

然后回到你 clone 到你电脑的本地项目将`./app.js`中的 `appid` 改为你刚刚复制的内容就行了，

```
// app.js
App({
  onLaunch(){

  },
  globalData: {
   myurl:'https://api.binstd.com',
   //在这里👇写进制数据的appkey
   appid:'XXX',
  },
})

```

其实用那家公司的 api 接口都不重要，主要是这个页面的布局，这种设计思路，可以为你的微信小程序提供一点的设计思路，如果能在你的茫茫项目中能提供上我的一点思路，我的一点方案，我觉得这个项目就算值了，感谢你对本项目的支持。

## 计划

- [ ] UI 美化
- [ ] 添加其他更多的查询功能

## 最后

最后的最后如果喜欢的话不妨给个小小的 Star ， 支持一下开发者！！🎃
