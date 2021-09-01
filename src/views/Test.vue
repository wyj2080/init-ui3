<template>
<div>
  aaa this test
  <button @click="testClick">请求</button>
</div>
</template>

<script>
export default {
name: "Test",
  methods:{
    testClick(){

      this.$http.get("/api/mybatis-plus/list").then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>