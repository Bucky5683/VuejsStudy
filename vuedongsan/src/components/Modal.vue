<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
        <div class="white-bg">
            <button @click="$emit('closeModal')">닫기</button>
            <h4>{{ 원룸들[누른거].title }}</h4>
            <img :src="원룸들[누른거].image">
            <p>{{ 원룸들[누른거].price }}</p>
            <p>{{ 원룸들[누른거].content }}</p>
            <input v-model="month">
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
    },

    data() {
        return {
            month: 1
        }
    },
    watch: {
        month() {
            if (this.month > 12) {
                this.month = 12
                alert('12보다 클 수 없습니다.')
            }
            if (isNaN(this.month)) {
                this.month = 1
                alert('숫자를 입력해주세요')
            }
        }
    },
    beforeUpdate() {
        if (this.month == 2) {
            alert('2개월은 너무 적음.. 안팝니다')
        }
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