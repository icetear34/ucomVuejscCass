import {defineStore} from 'pinia'
import axios from 'axios'
export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
    }),
    actions: {
        async getPostAction() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            this.posts = response.data
        },
         async addPostAction(post) {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/Posts`, post)
            this.posts.unshift(response.data)
        },
    },
    // Add a getter to retrieve all posts
    getters: {
        getAllPosts: (state) => {
            return state.posts
        },
    }
})