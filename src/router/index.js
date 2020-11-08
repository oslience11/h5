import Vue from 'vue'
import VueRouter from 'vue-router'
import Schedule from "@/components/Schedule";
import s2 from "@/components/s2";
import Schedule11 from "@/components/Schedule11";

Vue.use(VueRouter)

const routes = [
    {
        path: '/s2',
        name: 's2',
        component: s2
    },{
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },{
        path: '/s12',
        name: 'Schedule',
        component: Schedule11
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
