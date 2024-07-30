<template>
  <h1>Home</h1>
  <p>Employee Name : {{ employeeName }}</p>
  <p>Age : {{ age }}</p>
  <p>Is Married : {{ isMarried }}</p>
  <button @click="buttonClick">log</button>
  <button @click="sayhello">sayhello</button>
  <button @click="sayhello2">sayhello2</button>
</template>

<script setup>
import { sayhello,sayhello2 } from '../helpers';
let employeeName = 'mary';
let age = 50;
let isMarried = true;
const buttonClick = () => {
  console.log("employeeName:"+employeeName)
  console.log("age:" + age)
  console.log("isMarried?"+ isMarried)
};
</script>


