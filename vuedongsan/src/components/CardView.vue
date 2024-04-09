<template>
    <div class="products">
    <div v-for="(a, i) in 원룸들" :key="i">
      <img :src="a.image" class="room-img">
      <h4 @click="ifClickedDetailPage(i)">{{ a.title }}</h4>
      <p>{{ a.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: '상품목록_상품',
    props: {
        원룸들: Array,
    }
}
</script>

<style></style>