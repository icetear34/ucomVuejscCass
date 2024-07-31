<template>
    <div>
        <h3> Post </h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="p in getAllPosts" v-bind:key="p.id">                
                <strong> Id:</strong>{{ p.id }} <br/>
                <strong> userId:</strong>{{ p.userId }} <br/>
                <strong> title:</strong>{{ p.title }} <br/>
                <strong> body:</strong>{{ p.body }} <br/>                
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { usePostStore } from "@/store/PostStore.js";
const store = usePostStore();

if(store.getAllPosts.length <= 0){
    store.getPostAction();
}

const getAllPosts = computed(() =>  store.getAllPosts)

</script>


<style  scoped>
.list-group-item{
    color: brown;
}
</style>