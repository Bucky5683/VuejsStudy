<template>
    <div v-for="(a, i) in postingData" :key="i">
        <PostView :name="a.name" :userImage="a.userImage" :postImage="a.postImage" :likes="a.likes" :date="a.date"
            :liked="a.liked" :content="a.content" :filter="a.filter" />
    </div>
</template>

<script>
import PostView from './PostView.vue'

export default {
    name: 'ContainerView',
    props: {
        postingData: Array
    },
    components: {
        PostView
    }
}
</script>