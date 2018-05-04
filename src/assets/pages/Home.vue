<template>
    <div class="row" id="Home">
        <home-slider></home-slider>
        <div>Hello World</div>
    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);

// Home.vue
export default {
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params
      console.log($route.params)
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}

</script>

<style>

 
</style>