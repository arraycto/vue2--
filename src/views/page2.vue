<template>
  <div>
    <table border="1">
      <thead>
        <th>类型</th>
        <th v-if="$store.state.show[1]">金额</th>
        <th v-if="$store.state.show[0]">时间</th>
        <th v-if="$store.state.show[2]">备注</th>
        <th v-if="$store.state.show[3]">操作人</th>
        <th>删除</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td class="a">{{ item.type }}</td>
          <td v-if="$store.state.show[1]" class="b">{{ item.num }}</td>
          <td v-if="$store.state.show[0]" class="c">{{ item.time }}</td>
          <td v-if="$store.state.show[2]" class="d">{{ item.other }}</td>
          <td v-if="$store.state.show[3]" >{{ item.author }}</td>
          <td class="e">
            <input type="button" value="删除" @click="rem(index)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.data).data,
    };
  },
  methods: {
    rem: function (index) {
      let data = JSON.parse(localStorage.data);
      data.data.splice(index, 1);
      this.data.splice(index, 1);
      localStorage.data = JSON.stringify(data);
    },
  },
};
</script>
<style scoped>
table {
  margin: 0px auto;
  margin-top: 30px;
  border-collapse: collapse;
}
td {
  height: 30px;
}
.a {
  width: 100px;
}
.b {
  width: 80px;
}
.c {
  width: 250px;
}
.d {
  width: 150px;
}
</style>