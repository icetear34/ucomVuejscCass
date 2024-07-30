<template>
  <h1> Home </h1>
  <p> Employee Name :{{ employName }} </p>
  <p> Age : {{ age }} </p> 
  <p> Is Married :{{ isMarried }}  </p>
</template>
<script>
export default {

  setup() {
    let employName = "John";
    let age = 30;
    let isMarried = true;
    return {
      employName,
      age,
      isMarried
    };
  }
};
</script>

