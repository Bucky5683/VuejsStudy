<template>

  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <button @click="ifClickedClosedButton">닫기</button>
      <h4>{{ 원룸들[누른거].title }}</h4>
      <img :src="원룸들[누른거].image">
      <p>{{ 원룸들[누른거].price }}</p>
      <p>{{ 원룸들[누른거].content }}</p>
    </div>
  </div>

  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i"> {{ 작명 }}</a>
  </div>

  <div class="products">
    <div v-for="(a, i) in 원룸들" :key="i">
      <img :src="a.image" class="room-img">
      <h4 @click="ifClickedDetailPage(i)">{{ a.title }}</h4>
      <p>{{ a.price }}</p>
    </div>
  </div>

  <Discount />
</template>

<script>
import data from './oneroom.js'
import Discount from './components/Discount.vue'

export default {
  name: 'App',
  data() {
    return {
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ['Home', 'Shop', 'About']
    }
  },
  components: {
    Discount,
  },
  methods: {
    increase(i) {
      this.신고수[i] += 1
    },

    ifClickedDetailPage(i) {
      this.모달창열렸니 = true;
      this.누른거 = i;
    },

    ifClickedClosedButton() {
      this.모달창열렸니 = false

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

img {
  padding: 10px;
  width: 80%;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
