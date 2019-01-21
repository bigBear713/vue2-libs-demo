# v-shade组件：
## 说明
- 这是一个遮罩组件，实现在指定区域内显示遮罩。显示遮罩时，边无法对区域内的内容进行操作。

## 使用示例
`<v-shade>// 这是要显示遮罩的内容... </v-shade>`

## API接口：
- :vShow - Boolean - 控制是否显示遮罩。true表示显示，false表示不显示；
- @vShowChange - $emit - 获取当前是否显示遮罩的状态。获取的值为true时，表示内容上会显示遮罩；获取的值为false时，表示内容上没有显示遮罩；
- :vClickAutoHide - Boolean - 点击遮罩时是否自动隐藏。true时表示自动隐藏，false时表示不自动隐藏；
- :vColor - String - 遮罩的颜色，支持以下类型的值：'black','#000','rgb(0,0,0)','rgba(0,0,0,1)';
- :vOpacity - Number - 遮罩的透明度，值为0~1之间；
- :vZIndex - Number - 遮罩层级。

## 效果
![效果图](/static/app/shade-demo/img/effect.png)