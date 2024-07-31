<template>
  <h1> Home </h1>
  <p> Employee Name : </p>
  <div>
    <p v-for="employee in employeeList" :key="employee">{{ employee }} </p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const employeeList = ref(["Mary", "Candy", "John"]);

</script>


