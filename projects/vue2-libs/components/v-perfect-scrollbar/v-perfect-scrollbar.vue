<template>
  <div class="perfect-scrollbar-host">
    <div class="perfect-scrollbar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { VPerfectScrollbarService } from "./v-perfect-scrollbar.service.js";
import { EventListenService } from "./../../services";
export default {
  name: "VPerfectScrollbar",
  props: {
    vOptions: {
      type: Object,
      default: null
    },
    vRefresh: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      eventListen: new EventListenService(),
      instance: null,
      options: {},
      service: new VPerfectScrollbarService()
    };
  },
  mounted() {
    this.eventListen.resize(window, true, this.resizeWindow);
    this.initPerfectScrollbar();
  },
  beforeDestroy() {
    this.service.destroyPerfectScrollbar(this.instance);
    this.eventListen.resize(window, false, this.resizeWindow);
  },
  methods: {
    /** 初始化滚动条
     *
     *
     * @memberof VPerfectScrollbar
     */
    initPerfectScrollbar() {
      this.instance = this.service.initPerfectScrollbar(
        this.$el,
        this.options,
        this.instance
      );
    },
    instanceChange(value) {
      this.$emit("instanceChange", value);
    },
    /** 浏览器窗口改变时，更新滚动条
     *
     *
     * @memberof VPerfectScrollbar
     */
    resizeWindow() {
      if (this.instance) {
        this.instance.update();
      }
    },
    vRefreshChange(value) {
      this.$emit("vRefreshChange", value);
    }
  },
  watch: {
    instance: {
      handler(instance) {
        this.instanceChange(instance);
      },
      immediate: false
    },
    vOptions: {
      handler(options) {
        if (!options) {
          options = this.options;
        }
        this.options = options;
        if (this.$el) {
          this.initPerfectScrollbar();
        }
      },
      immediate: true
    },
    vRefresh: {
      handler(refresh) {
        if (refresh) {
          if (this.instance) {
            this.instance.update();
          }
          this.vRefreshChange(false);
        }
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.perfect-scrollbar-host {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.perfect-scrollbar {
  width: 100%;
  height: 100%;
  /** 在ie浏览器和Edge浏览器中，有时候会滚动条无法显示的异常，
    * 因为IE和Edge浏览器中默认将该属性设置为none，导致无法出现滚动条，
    * 通过手动设置该属性的值为auto可解决 
    */
  -ms-overflow-style: auto;
}
</style>

