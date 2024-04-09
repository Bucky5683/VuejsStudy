<template>
  <ModalView :원룸들="원룸들" :모달창열렸니="모달창열렸니" :누른거="누른거"/>
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i"> {{ 작명 }}</a>
  </div>
  <Card :원룸들="원룸들"/>
  <Discount />
</template>

<script>
import data from './oneroom.js'
import Discount from './components/Discount.vue'
import ModalView from './components/Modal.vue'
import Card from './components/CardView.vue'

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
    ModalView,
    Card,
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
