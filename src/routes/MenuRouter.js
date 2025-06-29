import AddMenu from '@/views/menu/AddMenu.vue'
import EditMenu from '@/views/menu/EditMenu.vue'
import Menu from '@/views/menu/Menu.vue'

export default [
    {path: '/menu', name: 'menu', component: Menu},
    {path: '/menu/add', name: 'addmenu', component: AddMenu},
    {path: '/menu/edit/:id', name: 'editmenu', component: EditMenu},
]