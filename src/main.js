import Vue from 'vue'
import Router from 'vue'
import App from './App.vue'
import Carousel from './components/Carousel.vue'
import Nav from './components/Nav.vue'
import Home from './assets/pages/Home.vue'
import About from './assets/pages/About.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(Router)

Vue.component('my-nav', Nav);
Vue.component('home-slider', Carousel);
Vue.component('home', Home);
Vue.component('about', About);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

