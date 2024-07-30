<template>
  <h1>Home</h1>
  <p>Employee Name : {{ employeeName }}</p>
  <p>Age : {{ age }}</p>
  <p>Is Married : {{ isMarried }}</p>
  <button @click="buttonClick">Click</button>
</template>

<script setup>
import { ref } from 'vue';//import ref from vue
const employeeName =ref('mary') ;//建立響應式引用
const age =ref(50) ;
const isMarried =ref(true);

const buttonClick = () => {
  age.value++;
  console.log(employeeName.value);
  console.log(age.value);
  console.log(isMarried.value);
};
</script>


