<template>
    <div>
        <h3>
            Add post
        </h3>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter title" 
                v-model="form.title" >
            </div>
            <div class="mb-3">
                <label for="userId">User Id</label>
                <input type="text" class="form-control" id="userId" placeholder="Enter user id"
                v-model="form.userId">
            </div>
            <div class="mb-3">
                <label for="body">Body</label>
                <textarea class="form-control" id="body" placeholder="Enter body"
                v-model="form.body"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form> 
    </div>
</template>

<script setup>
import { usePostStore } from "@/store/PostStore";
import { reactive } from "vue";

const store = usePostStore();
const form = reactive({
    title: "",
    userId: "",
    body: ""
});
function onSubmit(){
    store.addPostAction(form);
    form.title= ""
    form.userId= ""
    form.body= ""
}
</script>

<style lang="scss" scoped>

</style>