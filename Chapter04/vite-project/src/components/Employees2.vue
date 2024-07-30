<template>
  <div v-for="emp in employeeList" :key="emp.employeeId">
    <h3> {{ emp.employeeId }} </h3>
    {{ emp.employeeName }}
    {{ emp.age }}
  </div>
</template>

<script setup>

const props = defineProps(['employeeList'])

</script>

<style>

</style>

