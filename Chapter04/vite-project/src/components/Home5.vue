<template>
  <h1>Home</h1>
  <p>Employee Name : {{ employeeName }}</p>
  <p>Age : {{ age }}</p>
  <p>Is Married : {{ isMarried }}</p>
  <button @click="buttonClick">Click</button>
</template>

<script setup>
import { ref } from "vue";

const employeeName = ref("mary");
const age = ref(50);
const isMarried = ref(true);

const buttonClick = () => {
  employeeName.value = "candy";
  age.value = 60;
  isMarried.value = false;
  console.log(employeeName.value);
  console.log(age.value);
  console.log(isMarried.value);
};
</script>
