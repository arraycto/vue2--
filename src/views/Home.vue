<template>
  <div class="home">
    <side></side>
    <router-view></router-view>
  </div>
</template>

<script>
import side from "../components/aside";
export default {
  name: "Home",
  components: {
    side,
  },
};
</script>
<style>
body{
  padding-left: 150px;
}
</style>
