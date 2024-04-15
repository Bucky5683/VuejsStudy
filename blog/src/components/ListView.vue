<template>
    <div class="row">
        <div v-for="(a, i) in listData" :key="i" class="col-lg-6">
            <ListCardView :card_date="a.date" :card_title="a.title" :card_contents="a.content" :number_id="a.number" />
        </div>
    </div>
</template>

<script>
import ListCardView from './ListCardView.vue';

export default {
    name: 'CardList',
    components: {
        ListCardView
    },
    props: {
        listData: Array
    }
}

</script>