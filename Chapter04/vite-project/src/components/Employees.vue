<template>
  <div v-for="emp in employeeList" :key="emp.employeeId">
    <h3> {{ emp.employeeId }} </h3>
    {{ emp.employeeName }}
    {{ emp.age }}
  </div>
  <p>
    Total Count : {{ Count }}
  </p>
</template>

<script setup>
import { computed } from "vue";
const Count = computed(() => {
  return ``;
})
</script>
<style>
</style>
