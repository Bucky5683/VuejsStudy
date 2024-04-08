<template>
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i"> {{ 작명 }}</a>
  </div>
  <div class="products">
    <div v-for="(제목, i) in products" :key="i">
      <h4>{{ 제목 }}</h4>
      <p>50만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      메뉴들: ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
