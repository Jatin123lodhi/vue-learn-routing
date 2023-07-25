import {createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import JobDetails from "../views/jobs/JobDetails.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/about',
        name:'About',
        component:()=>import('../views/About.vue') //lazy load
        // component: About
    },
    {
        path:'/jobs',
        name:'Jobs',
        component:()=>import('../views/jobs/Jobs.vue')
    },
    {
        path:'/jobs/:id',
        name:'JobDetails',
        component:JobDetails,
        props: true
    },
    //redirect
    {
        path:"/all-jobs",
        redirect:'/jobs'
    },
    //catch all 404
    {
        path:'/:catchAll(.*)',
        name:'NotFound',
        component: NotFound

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router