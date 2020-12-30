<template>
  <div>
    <div id="data">
      <select v-model="type">
        <option>收入</option>
        <option>支出</option>
      </select>
      <input v-if="$store.state.show[0]" type="text" v-model="time" />
      <input v-if="$store.state.show[1]" type="text" v-model.number="num" placeholder="输入金额" />
      <input v-if="$store.state.show[2]" type="text" v-model="other" placeholder="填写订单备注" />
      <input v-if="$store.state.show[3]" type="text"  v-model="author" placeholder="操作人" />

      <button @click="submit">提交信息</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "收入",
      num: "",
      other: "",
      a: 0,
      author:''
    };
  },
  computed: {
    time: function () {
      let a = this.a;
      var date = new Date();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentDate =
        date.getFullYear() +
        "-" +
        month +
        "-" +
        strDate +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      return currentDate;
    },
  },
  methods: {
    submit: function () {
      this.a++;
      // if (this.type == "" || this.time == "" || this.num == "") {
        // alert("请将必填信息填写完整");
      // } else {
        // localStorage.clear()
        if (localStorage.data == undefined) {
          localStorage.data = JSON.stringify({ data: [] });
        }
        let obj = JSON.parse(localStorage.data);
        obj.data.push({
          type: this.type,
          time: this.time,
          num: this.num,
          other: this.other,
          author:this.author
        });
        localStorage.data = JSON.stringify(obj);
        alert("添加成功");
        this.num = "";
        this.other = "";
        this.a++;
      // }
    },
  },
};
</script>
<style scoped>
#data {
  margin-top: 40px;
  margin-left: 30px;
}
select {
  width: 100px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
}
input {
  width: 150px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 20px;
  outline: none;
}
button {
  width: 80px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  margin-left: 30px;
}
</style>