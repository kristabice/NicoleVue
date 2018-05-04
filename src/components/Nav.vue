
<template>
 <div class="nav-container container" id="Nav"> 
        <b-navbar toggleable="md" type="dark" variant="info" v-bind:class="['navColor', 'align-items-end', 'pull-right', 'active']" v-on:click.prevent>

        <b-navbar-toggle target="nav_collapse" data-toggle></b-navbar-toggle>

        <div class="logo-container">
            <b-navbar-brand href="#"><img src="img/ogo.jpg" alt="wi9 logo"></b-navbar-brand>
        </div>
        <b-collapse is-nav id="nav_collapse" class="flex-row-reverse">

            <b-navbar-nav >
            <b-nav-item class="items Home" v-on:click="makeActive('Home')"><b-link :to="{ path: 'home' }">Home</b-link></b-nav-item>
            <b-nav-item-dropdown class="About" text="About" right>
            <b-dropdown-item class="Artist" v-on:click="makeActive('Artist')">Artist Statement</b-dropdown-item>
            <b-dropdown-item>About Wi9</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" class="items">Contact</b-nav-item>
            <b-nav-item href="#" class="items">Consultations</b-nav-item>      

            <b-nav-item-dropdown text="Gallery" right>
            <b-dropdown-item href="#">Family</b-dropdown-item>
            <b-dropdown-item href="#">Senior Photos</b-dropdown-item>
            <b-dropdown-item href="#">Special Events</b-dropdown-item>
            <b-dropdown-item href="#">Wedding Day</b-dropdown-item>
            <b-dropdown-item href="#">Engagements</b-dropdown-item>
            <b-dropdown-item href="#">Bridals</b-dropdown-item>
            <b-dropdown-item href="#">Missionary</b-dropdown-item>
            <b-dropdown-item href="#">Models</b-dropdown-item>
            <b-dropdown-item href="#">Extended Family</b-dropdown-item>
            <b-dropdown-item href="#">Newborn</b-dropdown-item>
            <b-dropdown-item href="#">Maternity</b-dropdown-item>
        </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
        </b-navbar>
        <div> you chose : {{active}}</div>
        <div v-if="active === 'Home'"><home></home></div>
        <div v-if="active === 'Artist'"><about></about></div>
 </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue'
import BootstrapVue from 'bootstrap-vue'




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

<style>

</style>