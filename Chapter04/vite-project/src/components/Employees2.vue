<template>
  <div v-for="emp in employeeList" :key="emp.employeeId">
    <h3> {{ emp.employeeId }} </h3>
    {{ emp.employeeName }}
    {{ emp.age }}
  </div>
</template>

<script setup>

const props = defineProps(['employeeList'])
import { onMounted,onUnmounted,onUpdated } from 'vue';
onMounted(() => {
  console.log('mounted');
})
onUnmounted(() => {
  console.log('unmounted');
})  
onUpdated(() => {
  console.log('updated');
})
</script>

<style>

</style>

