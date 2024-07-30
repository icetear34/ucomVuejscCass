<template>
  <h1>Home</h1>
  <div ref="div">
    <p>Employee Name : {{ employeeName }}</p>
    <p>Age : {{ age }}</p>
    <p>Is Married : {{ isMarried }}</p>
  </div>
  <button @click="buttonClick">Click</button>
  <hr />
  <div>
    Employee Name : <input type="text"  /> <br />
    age : <input type="number"  /><br />
    isMarried : <input type="checkbox"  /><br />
  </div>
</template>

<script setup>
import { ref } from "vue";

const employeeName = ref("mary");
const age = ref(50);
const isMarried = ref(true);
const div = ref( null );

const buttonClick = () => {
  employeeName.value = "candy";
  age.value = 60;
  isMarried.value = false;
  console.log(employeeName.value);
  console.log(age.value);
  console.log(isMarried.value);
  div.value.style.backgroundColor = "yellow";
};
</script>
