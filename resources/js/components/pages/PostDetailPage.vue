<template>
    <section>
        <PostCard :post="post" />
        <div class="justify-content-end d-flex">
            <router-link class="btn btn-info" :to="{ name: 'home' }">
                Torna alla Home
            </router-link>
        </div>
    </section>
</template>

<script>
import PostCard from '../posts/PostCard'
export default {
    name: 'PostDetailPage',
    components: { PostCard },
    data() {
        return {
            post: null
        }
    },
    methods: {
        fetchPost() {
            axios.get('http://localhost:8000/api/posts/' + this.$route.params.id)
                .then(res => {
                    this.post = res.data
                })
        }
    },
    mounted() {
        this.fetchPost();
    }
}
</script>

<style>

</style>