# v-perfect-scrollbar组件：
## 说明
- 这是一个基于perfect-scrollbar封装的组件，实现当组件中的内容过长，超出组件父元素的宽度和高度时，显示滚动条的功能；
- 使用时，直接在main.js中引入整个vue2-libs组件库，或者在所需要的位置，将VPerfectScrollbar注入到组件的components中；
- 使用时，直接引入相应的模块，在相应的位置使用该组件，无需再引入perfect-scrollbar的js文件和css文件；

## 使用示例
`<v-perfect-scrollbar>// 这是要显示显示区域的内容。当内容过长时，（水平方向或者竖直方向）自动出现滚动条... </v-perfect-scrollbar>`

## API接口：
### v-perfect-scrollbar组件：限制滚动条中的内容显示区域。当滚动条内容中的区域超出滚动条外的区域限制，则出现滚动条；
- :vOptions - Object - perfect-scrollbar滚动条的配置信息，具体配置见官方说明（https://github.com/utatti/perfect-scrollbar.git）;
- :vRefresh - Boolean - 是否刷新滚动条。true表示刷新，false表示不刷新
- @vRefreshChange - $emit - 获取当前是否正在刷新滚动条。当值为false时表示不刷新或者已经刷新完毕；
- @instanceChange - $emit - 获取当前滚动条实例；
### SCROLL_DIRECTION:滚动方向枚举类型
- SCROLL_TOP - 'scrollTop' - 向top方向滚动；
- SCROLL_LEFT - 'scrollLeft' - 向left方向滚动；
### VPerfectScrollbarService：提供v-perfect-scrollbar组件相关功能的服务
#### animateScrolling(instance, target, value, speed):void - 滚动动画,流畅地滚动组件中的内容；
##### 参数
- instance - any - 必填 - 滚动条实例;
- target - SCROLL_DIRECTION - 必填 - 要执行的操作;
- value - number - 必填 - 滚动的距离值（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - 
#### destroyPerfectScrollbar(instance):void - 销毁滚动条实例；
##### 参数
- instance - any - 必填 - 滚动条实例;
##### 返回值
- void - 
#### initPerfectScrollbar(el, options, instance):any - 初始化滚动条；
##### 参数
- el - HTMLElement - 必填 - 要添加滚动条的html元素;
- options - Object - 必填 - 滚动条配置;
- instance - any - 选填 - 已经存在的滚动条实例；如果要初始化的元素已经初始化过，那么应该先将原来初始化的实例销毁;
##### 返回值
- any - 滚动条实例;
#### scrollTo(instance, x, y, speed):void - 将内容滚动到指定位置；
##### 参数
- instance - any - 必填 - 滚动条实例;
- x - number - 必填 - x轴方向滚动多长距离（以px为单位）;
- y - number - 选填 - y轴方向滚动多长距离（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToBottom(instance, offset, speed):void - 将内容滚动到底部指定位置（以px为单位）；
##### 参数
- instance - any - 必填 - 滚动条实例;
- offset - number - 选填 - y轴方向偏移底部多长距离（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToElement(instance, qs, offsetX, offsetY, speed):void - 滚动到指定dom元素的位置；
##### 参数
- instance - any - 必填 - 滚动条实例;
- qs - string - 必填 - 指定元素的选择器;
- offsetX - number - 选填 - x轴偏移量（以px为单位）;
- offsetY - number - 选填 -  y轴偏移量（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToLeft(instance, offset, speed):void - 将内容滚动到左边指定位置（以px为单位）；
##### 参数
- instance - any - 必填 - 滚动条实例;
- offset - number - 选填 - x轴方向偏移左边多长距离;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToRight(instance, offset, speed):void - 将内容滚动到右边指定位置（以px为单位）；
##### 参数
- instance - any - 必填 - 滚动条实例;
- offset - number - 选填 - x轴方向偏移左边多长距离;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToTop(instance, offset, speed):void - 将内容滚动到顶部指定位置（以px为单位）；
##### 参数
- instance - any - 必填 - 滚动条实例;
- offset - number - 选填 - y轴方向偏移顶部多长的距离（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToX(instance, x, speed):void - 将内容在x轴方向滚动到指定位置（以px为单位）；
##### 参数
- instance - any - 必填 - 滚动条实例;
- x - number - 必填 - x轴方向滚动多长距离（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;
#### scrollToY(instance, y, speed):void - 将内容在y轴方向滚动到指定位置（以px为单位）；
##### 参数
- instance - any - 必填 - 滚动条实例;
- y - number - 必填 - y轴方向滚动多长距离（以px为单位）;
- speed - number - 选填 - 滚动速度;
##### 返回值
- void - ;

## 效果
![Image text](/static/app/perfect-scrollbar-demo/img/effect.png)