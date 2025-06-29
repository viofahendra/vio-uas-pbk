import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '@/views/Dashboard.vue'
import Laporan from '@/views/Laporan.vue'
import MenuRouter from "./MenuRouter";
import TransaksiRouter from "./TransaksiRouter";

const BaseRouter = [
    {path: '/', name: 'dashboard', component: Dashboard},
    {path: '/laporan', name: 'laporan', component: Laporan},
]

const routes = [
    ...MenuRouter,
    ...TransaksiRouter,
    ...BaseRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;