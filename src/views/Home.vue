<template>
  <div>
    <h1>Home</h1>
    <img src="../assets/logo.png">
    <router-link to="/product">Go to Product</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
h1 {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 3em;
  letter-spacing: 0.05em;
  color: #4b4b4b;
}
</style>
