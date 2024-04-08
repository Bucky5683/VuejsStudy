<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <button @click="ifClickedClosedButton">닫기</button>
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
    </div>
  </div>
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i"> {{ 작명 }}</a>
  </div>
  <div class="products">
    <div v-for="(a, i) in 원룸들" :key="i">
      <img :src="a.image" class="room-img">
      <h4 @click="모달창열렸니 = true">{{ a.title }}</h4>
      <p>{{ a.price }}</p>
    </div>
  </div>
</template>

<script>
import data from './oneroom.js'

export default {
  name: 'App',
  data() {
    return {
      원룸들: data,
      모달창열렸니: true,
      신고수: [0, 0, 0],
      메뉴들: ['Home', 'Shop', 'About']
    }
  },
  methods: {
    increase(i) {
      this.신고수[i] += 1
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
