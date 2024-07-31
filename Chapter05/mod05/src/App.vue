<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>





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