<template>
<div>
  aaa this test
  <button @click="testClick">请求</button>
  <button @click="login('d1','d1')">登录d1</button>
  <button @click="login('d2','d2')">登录d2</button>
</div>
</template>

<script>
export default {
name: "Test",
  data(){
    return{
      tenantId: '',
    }
  },
  methods:{
    testClick(){

      this.$https.get("/api/mybatis-plus/list",{params:{}, headers:{tenantId:this.tenantId}}).then((response) => {
        console.log(response)
      })
    },
    login(username,password){
      // let me = this;
      // let data = {
      //   username: username,
      //   password: password,
      // }
      this.$https.login(username, password);
      // this.$http.get("/api/sa-token/login",{params:{...data}}).then((response) => {
      //   me.tenantId = response.data;
      //   console.log(response)
      // })
    }
  }
}
</script>

<style scoped>

</style>