<template>
  <h1>Home</h1>

  keyword : <input type="text" v-model="keyword" />
  <p>filter Keyword - {{ keyword }}</p>
  <hr />
  <p>Employee Name :</p>
  <div>
    <p v-for="employee in filterResult" :key="employee">{{ employee }}</p>
  </div>
</template>
<script setup>
import { ref, computed,watch,watchEffect } from "vue";
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
  return employeeList.value.filter((name) => name.startsWith(keyword.value));
});
//第一次渲染时，watchEffect会立即执行
watchEffect(() => {
  console.log("watchEffect - keyword : ", keyword.value);
});

watch(keyword, (newValue, oldValue) => {
  console.log(newValue, ">",oldValue);
  console.log("watch - keyword : ", keyword.value);
});

</script>