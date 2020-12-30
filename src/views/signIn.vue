<template>
  <div>
    <div class="box">
      <h2>账户登录</h2>
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
      <input type="button" value="登录" @click="sign" />
      <div>
        <router-link to="/signUp" tag="p" class="a">去注册</router-link>
        <router-link to="/forget" tag="p" class="b">忘记密码</router-link>
      </div>
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
    sign: function () {
      if (this.name != localStorage.name) {
        alert("账号错误，若未注册请先注册");
      } else {
        if (this.pas != localStorage.pas) {
          alert("密码错误");
        } else {
          alert("登录成功");
          this.$router.push({ path: '/Home' });
        }
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
.a {
  float: left;
  margin-left: 40px;
}
.b {
  float: right;
  margin-right: 40px;
}
p:hover {
  text-decoration: underline;
}
</style>