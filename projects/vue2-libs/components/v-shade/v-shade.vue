<template>
  <div class="v-shade-host">
    <slot></slot>
    <div
      v-if="show"
      class="v-shade"
      :style="{'opacity':opacity,'background-color':color,'z-index':zIndex}"
    ></div>
  </div>
</template>
<script>
export default {
  name: "VShade",
  props: {
    // 点击遮罩时是否自动隐藏
    vClickAutoHide: {
      type: Boolean,
      default: false
    },
    // 遮罩颜色
    vColor: {
      type: String,
      default: "#000"
    },
    // 透明度
    vOpacity: {
      type: Number,
      default: 0.4
    },
    // 是否显示遮罩
    vShow: {
      type: Boolean,
      default: false
    },
    // 遮罩层级
    vZIndex: {
      type: Number,
      default: 999
    }
  },
  data() {
    return {
      // 点击遮罩时是否自动隐藏
      clickAutoHide: false,
      // 遮罩颜色
      color: "#000",
      // 透明度
      opacity: 0.4,
      // 是否显示遮罩
      show: false,
      // 遮罩层级
      zIndex: 999
    };
  },
  mounted() {
    this.$el.addEventListener("click", this.onClick);
  },
  beforeDestroy() {
    this.$el.removeEventListener("click", this.onClick);
  },
  computed: {},
  methods: {
    /**  点击组件区域时触发
     *
     *
     * @memberof NgxShadeComponent
     */
    onClick($event) {
      if (this.clickAutoHide) {
        this.show = false;
        this.vShowChange(this.show);
      }
      // 让父组件也能监听到当前组件的click事件
      this.$emit("click", $event);
    },
    // ngShow值改变时触发，用于向父组件传递ngShow改变后的值
    vShowChange(value) {
      this.$emit("vShowChange", value);
    }
  },
  watch: {
    vClickAutoHide: {
      handler(clickAutoHide) {
        this.clickAutoHide = clickAutoHide;
      },
      immediate: true
    },
    vColor: {
      handler(color) {
        this.color = color;
      },
      immediate: true
    },
    vOpacity: {
      handler(opacity) {
        this.opacity = opacity;
      },
      immediate: true
    },
    vShow: {
      handler(show) {
        this.show = show;
      },
      immediate: true
    },
    vZIndex: {
      handler(zIndex) {
        this.zIndex = zIndex;
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.v-shade-host {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.v-shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

