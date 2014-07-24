---
layout: post
title: 前端工种未来演变之猜想
tagline: 
category: 随想

---

这篇文章完全是我个人的抖机灵，分享分享我对前端工种的思考。考虑到我的文章

我自身的经历是做了接近两年的java后端，偏业务，然后转成了1年多前端，本身是学嵌入式专业的。

我讨厌废话太多，直接先说答案：我认为，前端最终会成为分裂成**业务工程师**和**纯前端**。

下面解释一下我怎么想

#### 何为前端

先说说现在前端现状，我认为有3种：

1. 重构，只写css+html
2. 前端，负责css+html+js+各类系统的模板层
3. node，基本全js，node为主，由第二种人的狂热分子进化所得

乍一看，其实挺奇怪的，为什么都叫前端，做的事情好像差距挺大，其实我觉得有挺多原因：

前端领域在整个技术深度相对比较浅，是整个互联网最表层的领域，也是绝大部分非互联网领域人员进入互联网技术领域的最佳途径。这样代表了什么呢，代表前端人员知识深度的差距很可能比较大，能够完成的事情也相对有限。而且对于前端发展的困境是，前端知识虽相对较浅，但是却极其宽泛，模板语言就几十种，各类的组件，mvc框架使用，性能优化的点，动画设计，前端工程等等。更加使得前端的知识分化比较严重。

#### node应该放在那里？

假如没有node，就没有我这篇文章，前端就做着前端活，没有革命性的改变。所以我们来看看node在整个互联网工程中到底什么地位。

首先node是什么，node是后端服务的一种，node其他后端的服务差别在哪里呢？没错，就是js，我们可以用js来写后端服务了。

我们先来看看玉伯最出名的一张图片：

![image](http://www.open-open.com/bbs/uploadImg/20140122/20140122094927_596.png)

这是讨论全栈工程师的时候产生一张图片，同时玉伯指出了node这种后端服务可能所在的位置。

为什么时间又来了，现在java服务哪里不好呢？为什么要加插中间一层？根据我前后端的经验是，后端为主导的设计的业务数据模型，往往是不利于前端UI，更多是服务业务之间的交换。意味着，前端无论怎样，都要有个地方来把后端获取的数据，转换成显示的方便的模型之后再输出。

现在这个工作再哪里做呢？一般在模板层，当然现在流行的MVC框架也是很好的选择。而现在更是多了第三种选择：**node**。

#### 为什么是业务工程师？


有了node之后，我们继续看看上面那张图，我继续想讨论一个成本的问题：我们给整个逻辑加一层，整个系统的复杂度上升了，那我们在哪些地方减少了成本？除了前端工程师有了更多自由度来控制显示模型，和后端可以减少注意力数据模型在对展示影响，专注做数据api之外。我们有个不能不用的node有个天然的特性：异步。

![image](http://image.beekka.com/blog/201212/bg2012122102.png)

上面那张图展现出来的优势非常明显，假如我先要做一个业务逻辑是a+b+c，假设a，b，c没有互相依赖，使用同步的我们要获取a，b，c的时间是T = T(get(a))+T(get(b))+T(get(c))，试用node的话时间就可以变成上图一样完成a+b+c只需要它们3个获取世界的最大值，也就是T = Max( T(get(a)), T(get(b)), T(get(c)))，从而有可能极大的提升用户体验。

好，接下来就到业务工程师的地方了，如果要做到上面要做的事情，这就要求node工程师对业务非常的了解，能够梳理数据接口之间的关系，最大程度的优化数据获取上的时间。这无疑对工程师的要求非常的高，回观我之前说的第一点，由于人员知识体系分化严重，必然会导致分工，node工程师逐渐变成业务设计+UI的完成，而非这种体系的前端，将会继续以纯前端的形式继续。

#### 最后

我写完这篇文章，裕波大正好发了一张图片跟我想得差不多，真是一图胜千言……

![image](http://devconf.qiniudn.com/font-end-designer-dev.png)

我这篇文章完全是出于我自己对前端这工种未来的猜想，如果有什么不对希望大家直接指出就好，如果觉得我说的不对，那就呵呵当看一篇瞎猜好了。哈哈