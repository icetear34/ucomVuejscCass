import { createRouter ,createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
export default createRouter({
    linkActiveClass: "active",
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
    });