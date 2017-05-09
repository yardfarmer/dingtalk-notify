# dingtalk-robot

## 功能
  - 支持通过API发消息到钉钉群。
  - 支持gitLab的webhook功能发消息到钉钉群。

## 使用方式

### 发布纯文本消息
```
let robot = new DingTalkRobot('accessToken')

robot.sendText('hello world')
robot.sendText('hello ding talk', true) // 抄送所有人
```

### 发布链接消息
```
// 发送链接，消息点击后跳转
robot.sendLink({
  text: 'hello dingtalk',
  title: 'hello wold',
  picUrl: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=FreeGroup.org+Cool&w=800&h=600',
  messageUrl: 'http://baidu.com'
})
```

### 发布 markdown 消息

```
robot.sendMarkdown({
  title: ' 注意了! 注意了!',
  "text": `
    > 说点啥呢。。。
   ![必须要截图](http://image.jpg)
   [点击看详情](http://www.taobao.cn/)
  `
})
```

#### 支持的 markdown
```
标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
 
引用
> A man who stands for nothing will fall for anything.
 
文字加粗、斜体
**bold**
*italic*
 
链接
[this is a link](http://name.com)
 
图片
![](http://name.com/pic.jpg)
 
无序列表
- item1
- item2
 
有序列表
1. item1
2. item2

```