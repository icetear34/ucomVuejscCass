<template  >
    <div>
        <h1 class="display-3"> EditPost</h1>
        <form @submit.prevent="onSubmit">
             <div class="mb-3">
                <label for="eid" class ="form-label">Id</label>
                <input type="text" class="form-control" id="eid" placeholder="Enter title" v-model="form.id">
            </div>
            <div class="mb-3">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="form.title">
            </div>
            <div class="mb-3">
                <label for="userId">User Id</label>
                <input type="text" class="form-control" id="userId" placeholder="Enter user id" v-model="form.userId">
            </div>
            <div class="mb-3">
                <label for="body">Body</label>
                <textarea class="form-control" id="body" placeholder="Enter body" v-model="form.body"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script setup>
import { usePostStore } from '@/store/PostStore';
import { useRoute,useRouter } from 'vue-router';
import { computed,reactive,onMounted } from 'vue';
const store = usePostStore();
const route = useRoute();
const router = useRouter();
const form = reactive({});
const posts= computed(()=>store.posts);
function onSubmit(){
    store.editPostAction(form);
    router.push("/");
}
onMounted(()=>{
    const rid = +route.params.id,ar=posts.value,p=ar.find(p=>p.id===rid);
    form.id=p.id;
    form.title = p.title;
    form.userId = p.userId;
    form.body = p.body;
})
</script>
<style scoped>
</style>