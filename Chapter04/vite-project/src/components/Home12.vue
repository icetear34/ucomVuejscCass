<template>
  <h1>Home</h1>
  keyword : <input type="text" v-model="keyword" />
  <p>filter Keyword - {{ keyword }}</p>
  <hr />
  <p>Employee Name :</p>
  <div>
    <p v-for="employee in filterResult" :key="employee">{{ employee }}</p>
  </div>
  <p>
    <button @click="disableAllWatch">Disable All Watch</button>
  </p>
</template>
<script setup>
import { ref, computed, watch, watchEffect } from "vue";
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
  return employeeList.value.filter((name) =>
    name.startsWith(keyword.value)
  );
});

const disablewatch = watch(keyword, () => {
  // console.log(` watch  `);
  console.log(` watch : ${keyword.value} `);
});
const  disablewatchEffect = watchEffect(() => {
  // console.log( ` watchEffect ` );
  console.log(` watchEffect : ${keyword.value} `);
});

const disableAllWatch = () => {
  disablewatch();
  disablewatchEffect();
};

</script>

