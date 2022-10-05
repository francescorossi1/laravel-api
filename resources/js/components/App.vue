<template>
    <div>
        <AppHeader :title="title" class="mb-4" />
        <main class="container">
            <HomePage />
        </main>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import HomePage from './pages/HomePage.vue'
export default {
  components: { AppHeader, HomePage },
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