<template>
  <ModalView @closeModal="모달창열렸니 = false" :원룸들="원룸들" :모달창열렸니="모달창열렸니" :누른거="누른거" />
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i"> {{ 작명 }}</a>
  </div>
  <div>
    <a>
      <button @click="sortPrice()">가격 정렬</button>
      <button @click="sortName()">이름 정렬</button>
      <button @click="sortId()">추천 정렬</button>
    </a>
  </div>
  <p>지금 결제하면 {{ amount }}% 할인</p>
  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸들="원룸들" />
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
      원룸들: [...data],
      원룸들원본: [...data],
      모달창열렸니: false,
      isSortPrice: false,
      isSortName: false,
      신고수: [0, 0, 0],
      메뉴들: ['Home', 'Shop', 'About'],
      amount: 30,
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

    },

    sortPrice() {
      this.isSortPrice = !this.isSortPrice; // 토글
      this.원룸들.sort((a, b) => {
        console.log("가격 내림차순" + this.isSortPrice);
        let result = a.price - b.price;
        return this.isSortPrice ? result : -result;
      });
    },

    sortName() {
      this.isSortName = !this.isSortName; // 토글
      this.원룸들.sort((a, b) => {
        let result = a.title.localeCompare(b.title);
        return this.isSortName ? result : -result;
      });
    },

    sortId() {
      this.원룸들 = [...this.원룸들원본];
    }
  },
  mounted() {
    setInterval(() => {
      this.amount--;
    }, 1000);
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
