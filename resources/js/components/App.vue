<template>
    <AppHeader :title="title" />
</template>

<script>
import AppHeader from './AppHeader.vue'
export default {
  components: { AppHeader },
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