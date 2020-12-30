<template>
  <div>
    <div class="box">
      <h2>注册</h2>
      <input
        type="text"
        style="margin-top: 10px"
        id="userName"
        placeholder="账号"
        v-model="name"
      />
      <input
        type="paddword"
        id="userPassword"
        placeholder="密码"
        v-model="pas"
      />
      <input type="button" value="注册" @click="add" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pas: "",
    };
  },
  methods: {
    add: function () {
      localStorage.name = this.name;
      localStorage.pas = this.pas;
      alert("注册成功");
      this.$router.push({ name: "signIn" });
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