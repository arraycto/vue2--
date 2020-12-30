<template>
  <div>
    <div class="box">
      <h2>忘记密码</h2>
      <input
        type="text"
        class="name"
        v-model="name"
        placeholder="请输入您的用户名"
      />
      <input type="button" value="一键找回" @click="changePas" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    changePas: function () {
      if (this.name != "") {
        localStorage.name = this.name;
        localStorage.pas = "123456";
        alert(`已将账号修改为${localStorage.name},密码为${localStorage.pas}`);
        this.$router.push({ name: "signIn" });
      } else {
        alert("请填写账号");
      }
    },
  },
  mounted() {
    document.body.classList.add("bodyactive");
  },
  beforeDestroy() {
    document.body.classList.remove("bodyactive");
  },
};
</script>
<style scoped>
.box {
  width: 400px;
  height: 300px;
  border: 3px solid gray;
  border-radius: 30px;
  text-align: center;
  margin: 0px auto;
  position: relative;
  top: 100px;
}
input {
  width: 220px;
  height: 30px;
  border: 2px solid gray;
  margin-top: 20px;
  border-radius: 10px;
  outline: none;
}
</style>