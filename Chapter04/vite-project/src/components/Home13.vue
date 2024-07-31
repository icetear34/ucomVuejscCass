<template>
  <h1> Home </h1>
  <employees  :employee-list/>
</template>
<script setup>
import { ref } from "vue";
import Employees from "./Employees.vue";
  const employeeList = ref([
  { employeeId: 1, employeeName: "mary", age: 50 },
  { employeeId: 2, employeeName: "candy", age: 60 },
  { employeeId: 3, employeeName: "lulu", age: 40 },
]);
</script>
