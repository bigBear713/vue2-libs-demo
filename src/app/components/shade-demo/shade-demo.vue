<template>
  <div>
    <div class="demo-item">
      <div style="width:500px;height:500px;">
        <v-shade :vShow="showShade1">简单用法，使用“vShow”属性控制是否显示遮罩</v-shade>
      </div>
      <button @click="changeShowShade(1)">切换遮罩的显示状态</button>
    </div>
    <div class="demo-item">
      <div style="width:500px;height:500px;">
        <v-shade
          :vShow="showShade2"
          @vShowChange="showShade2=$event"
          :vClickAutoHide="clickAutoHide"
        >简单用法，使用“vShow”属性控制是否显示遮罩。同时通过设置“vClickAutoHide”设置在显示遮罩的情况下，点击组件区域，自动隐藏遮罩的效果</v-shade>
      </div>
      <button @click="changeShowShade(2)">切换遮罩的显示状态</button>
    </div>
    <div class="demo-item">
      <div style="width:500px;height:500px;">
        <v-shade
          :vShow="showShade3"
          :vColor="shade3Color"
          :vOpacity="shade3Opacity"
          @vShowChange="showShade3=$event"
        >简单用法，使用“vShow”属性控制是否显示遮罩。同时通过设置“vColor”设置遮罩的颜色，设置“vOpacity”控制遮罩透明度</v-shade>
      </div>颜色设置：
      <input type="text" v-model="shade3Color">
      透明度设置：
      <input type="number" v-model="shade3Opacity">
      <button @click="changeShowShade(3)">切换遮罩的显示状态</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "shade-demo",
  data() {
    return {
      clickAutoHide: true,
      showShade1: false,

      showShade2: false,

      showShade3: false,

      shade3Opacity: 0.4,

      shade3Color: "blue"
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    changeShowShade(index) {
      if (1 === index) {
        this.showShade1 = !this.showShade1;
      } else if (2 === index) {
        this.showShade2 = !this.showShade2;
      } else if (3 === index) {
        console.log(this.shade3Color);
        console.log(this.shade3Opacity);
        this.showShade3 = !this.showShade3;
      }
    }
  }
};
</script>,
<style lang="scss" scoped>
.demo-item {
  display: inline-block;
  vertical-align: middle;
}
</style>

