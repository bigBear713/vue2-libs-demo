<template>
  <div>
    <div>
      <div>导航</div>
      <router-link v-for="(item,i) in menuList" :key="i" :to="item.link">{{ item.name }}</router-link>
    </div>
    <div>
      <h3>示例</h3>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "docs",
  data() {
    return {
      menuList: []
    };
  },
  mounted() {
    const config = this.$route.params.config;
    this.menuList = config.menuData;
  }
};
</script>
<style lang="scss" scoped>
</style>
