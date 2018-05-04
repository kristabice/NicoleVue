<template>
  <div v-if=""></div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Nav from './components/Nav.vue'


Vue.use(BootstrapVue);

    export default {
        name: 'Nav',
        data: function() {
            return {
            active: 'Home',
            }
        },

        methods:{
            makeActive: function(items){
            this.active = items;
            },
        }
               
              }
              

</script>
