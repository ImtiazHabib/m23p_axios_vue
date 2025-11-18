import { createMemoryHistory, createRouter } from 'vue-router'
import PostPage from '../pages/postPage.vue'
import AboutUs from '../pages/aboutUs.vue'




const routes = [
  {
    path:'/',
    component: PostPage,
    name:"postPage",
  },
  {
    path:'/about_us',
    component:AboutUs,
    name:"aboutUs",
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})