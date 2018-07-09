<template>
  <div>
    <h1>Product</h1>
    <router-link to="/">back to Home</router-link>
    <Products />
  </div>
</template>

<script>
import Products from '../modules/products'

export default {
  name: 'Product',
  components: {
    Products
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
