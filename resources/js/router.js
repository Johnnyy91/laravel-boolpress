import Vue from "vue";
import VueRouter from "vue-router";
import ListPostComponent from './components/ListPostComponent';
import DetailsComponent from './components/DetailsComponent';


Vue.use(VueRouter);
const router = new VueRouter({
    routes:[{
        path:'/posts',
        name:'Listposts',
        component:ListPostComponent,
    },
    {
        path: '/posts/:id',
        name: 'Detailspost',
        component: DetailsComponent,
    }
]
})

export default router
