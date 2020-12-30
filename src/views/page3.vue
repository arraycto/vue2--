<template>
  <div>
    <table>
      <tr>
        <td>时间显示</td>
        <td>金额</td>
        <td>备注</td>
        <td>操作人员</td>
      </tr>
      <tr>
        <td v-for="(item, index) in this.$store.state.show" :key="index">
          <input type="checkbox" @input="ch(index)" :checked="item" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ch: function (index) {
      this.$store.commit('c',index);
    },
  },
};
</script>
<style scoped>
td {
  width: 100px;
  text-align: center;
}
</style>