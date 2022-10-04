<template>
    <div>
        <AppHeader :title="title" />
        <PostsList />
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import PostsList from './posts/PostsList.vue'
export default {
  components: { AppHeader, PostsList },
    name: 'App',
    data(){
        return {
            title: 'Laravel API'
        }
    }
    
}
</script>

<style>

</style>