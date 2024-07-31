<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/">Home</router-link> 
    </li>
    <li class="nav-item">|
      </li>
    <li class="nav-item">
      <router-link to="/about">About</router-link>
      </li>
    <div class="container">
      <router-view/>
    </div>
  </ul>
</template>

<script setup>
import { provide } from 'vue';
provide('copyright', '我是誰© 2024');
</script>



<style >
.nav-item {
  width: 33%;
  text-align: center;
}

#app {  
  color: #2c3e50;
  padding: 50px;  
  background-color: rgb(252,233,198);
}
body {
  background-color: #f0f0f0 !important; 
}
</style>