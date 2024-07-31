<template>
    <div>
        <h1 class="display-3">Posts App </h1>
        <!--lorem-->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, recusandae? Reprehenderit repudiandae quam minus, officia quae tempore a explicabo ratione nam qui? Obcaecati, consequuntur neque. A in praesentium officiis fugiat!
    </div>
    <p>
        {{ copyrigth }}
    </p>
</template>
<script setup>
import { inject } from 'vue';
const copyrigth = inject('copyright');
</script>