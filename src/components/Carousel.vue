
<template>
 <div class="carousel-container row" id="Carousel">
                  <b-carousel id="carousel1"
                              style="text-shadow: 1px 1px 2px #333;"
                              controls
                              indicators
                              background="#ababab"
                              :interval="7000"
                              img-width="1024"
                              img-height="0"
                              v-model="slide"
                              @sliding-start="onSlideStart"
                              @sliding-end="onSlideEnd"
                  >
              
                    <!-- Text slides with image -->
                    <b-carousel-slide class="align-self-start"  img-src="img/slider.jpg"
                    ></b-carousel-slide>
              
                    <!-- Slides with custom text -->
                    <b-carousel-slide class="align-self-start" img-src="img/slider2.jpg">
  
                    </b-carousel-slide>
              
                    <!-- Slides with image only -->
                    <b-carousel-slide class="align-self-start"   img-src="img/slider3.jpg">
                    </b-carousel-slide>

                    <!-- <b-carousel-slide  class="align-self-start"  img-src="img/slider5.jpg">
                    </b-carousel-slide> -->


                    <!-- Slides with image only -->
                    <b-carousel-slide  class="align-self-start" img-src="img/slider4.jpg">
                    </b-carousel-slide>
                  </b-carousel>
                </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);

    export default {
        name: 'Carousel',
                data () {
                  return {
                    slide: 0,
                    sliding: null
                  }
                },
                methods: {
                  onSlideStart (slide) {
                    this.sliding = true
                  },
                  onSlideEnd (slide) {
                    this.sliding = false
                  }
                }
              }

</script>

<style>
  /* // STYLING FOR CAROUSEL */
  .carousel-item{
      height: 450px;
      width: 100%;
  }
</style>