<template>
  <h1> Home </h1>
  keyword : <input type="text" />
  <p>filter Keyword - </p>
  <hr/>
  <p> Employee Name : </p>
  <div>
    <p v-for="employee in employeeList" :key="employee"> {{ employee }} </p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const employeeList = ref([
  "mary",
  "candy",
  "lulu",
  "cindy",
  "joy",
  "christine",
]);
</script>


