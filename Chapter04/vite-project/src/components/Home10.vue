<template>
  <h1> Home </h1>
  keyword : <input type="text" v-model="keyword" />
  <p>filter Keyword - </p>
  <hr/>
  <p> Employee Name : </p>
  <div>
    <p v-for="employee in filterResult" :key="employee"> {{ employee }} </p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const keyword = ref("");
const employeeList = ref([
  "mary",
  "candy",
  "lulu",
  "cindy",
  "joy",
  "christine",
]);
const filterResult = computed(() => {
  return employeeList.value.filter((employee) => {
    return employee.includes(keyword.value);
  });
},)
</script>


