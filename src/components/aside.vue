<template>
  <div id="aside">
    <router-link to="/Home">录入信息</router-link>
    <router-link to="/page2">查看收支信息</router-link>
    <router-link to="/page3">系统设置</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
#aside {
  width: 150px;
  height: 100vh;
  background: rgb(122, 153, 209);
  position: fixed;
  top: 0px;
  left: 0px;
}
a {
  height: 50px;
  display: block;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: white;
    background: rgb(122, 153, 209);

}
a:hover{
  background: rgb(106, 140, 204);
}
.router-link-active{
    background: rgb(71, 122, 218);
}
</style>