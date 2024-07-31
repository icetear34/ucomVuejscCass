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
//建議用camocase命名
const props = defineProps(['employeeList']);
const Count = computed(() => {
  return `${props.employeeList.length}`;
})
</script>
<style>
</style>
