<template>
    <section>
        <div class="container mt-4">
            <div v-for="post in posts" :key="post.id">
                <PostCard :post="post" />
                <div class="d-flex justify-content-end mb-5">
                    <router-link class="btn btn-info" :to="{ name: 'post-detail', params: { id: post.id } }">Info
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PostCard from './PostCard'
export default {
    name: 'PostsList',
    components: { PostCard },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        fetchPosts() {
            axios.get('http://localhost:8000/api/posts')
                .then(res => {
                    this.posts = res.data
                })
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>