<template>
  <div class="container">
    <h1 class ="display-3">Posts App </h1>
    <h1 class="h6">Seeing all posts</h1>
    <add-post />
    <Posts />
  </div>
</template>

<script setup>
//@ is an alias for /src
import Posts from '@/components/Posts.vue';
import AddPost from './components/AddPost.vue';
</script>

<style >
#app {  
  color: #2c3e50;
  padding: 50px;  
  background-color: rgb(252,233,198);
}
body {
  background-color: #f0f0f0 !important; 
}
</style>