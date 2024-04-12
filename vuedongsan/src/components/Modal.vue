<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
        <div class="white-bg">
            <button @click="$emit('closeModal')">닫기</button>
            <h4>{{ 원룸들[누른거].title }}</h4>
            <img :src="원룸들[누른거].image">
            <p>{{ 원룸들[누른거].price }}</p>
            <p>{{ 원룸들[누른거].content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: '모달창_상세페이지',

    props: {
        원룸들: Array,
        모달창열렸니: Boolean,
        누른거: Number,
    }
}
</script>

<style>
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