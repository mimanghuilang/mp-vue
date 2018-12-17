<!--计数页面-->
<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p class="haha">
      <button class="xixi" @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/login/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.haha{
  background-color: green;
  .xixi{
    height: 99px;
  }
}
</style>
