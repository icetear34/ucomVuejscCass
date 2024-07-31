<template>
    <div>
        <h3> Post </h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="p in getAllPosts" v-bind:key="p.id">                
                <strong> Id:</strong>{{ p.id }} <br/>
                <strong> userId:</strong>{{ p.userId }} <br/>
                <strong> title:</strong>{{ p.title }} <br/>
                <strong> body:</strong>{{ p.body }} <br/> 
                <div class="mt-3 ">
                    <button 
                    data-bs-toggle="modal" data-bs-target="#myModal"
                    @click="removePostAction(p.id)" type="button" class="btn btn-danger">Delete</button>
                    <router-link :to="`/edit/${p.id}`" class="btn btn-success">Edit</router-link>
                </div>               
            </li>           
        </ul>
    </div>
    <teleport to="#mydialog">
        <!-- Modal -->
         <modal v-show="showModal" @close="showModal=false">
            <h1>msg</h1>
            <p>刪除成功222</p>
         </modal>
    </teleport>
</template>

<script setup>
import { computed ,ref } from "vue";
import Modal from "@/components/Modal.vue";
const showModal = ref(false);
import { usePostStore } from "@/store/PostStore.js";
import router from "@/router";
const store = usePostStore();

if(store.getAllPosts.length <= 0){
    store.getPostAction();
}
function removePostAction(id){
    showModal.value = true;
    store.removePostAction(id);
}

const getAllPosts = computed(() =>  store.getAllPosts)

</script>


<style  scoped>
.list-group-item{
    color: brown;
}
</style>