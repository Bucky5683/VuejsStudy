<template>
    <div class="card mb-4">
        <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
        <div class="card-body">
            <div class="small text-muted">{{card_date}}</div>
            <h2 class="card-title h4">{{card_title}}</h2>
            <p class="card-text">{{card_contents}}</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
        </div>
    </div>
</template>

<script>
export default {
    name : "blog-card",
    props: {
        card_date: String,
        card_title: String,
        card_contents: String,
        number_id: Number,
    }
}
</script>

<style></style>