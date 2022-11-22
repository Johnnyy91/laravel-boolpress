import Vue from "vue";
import VueRouter from "vue-router";
import ListPostComponent from './components/ListPostComponent';

Vue.use(router);
const router = new VueRouter({
    routes:[{
        path:'/', name:'Home', component:ListPostComponent
    }]
})
export default router
