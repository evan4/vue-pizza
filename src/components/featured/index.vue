<template>
    <div>
         <carousel :per-page="1" 
         :paginationEnabled="false">
            <slide v-for="(slide, index) in slides" :key="index">
                <div 
                class="slider_bck"
                :style="{ 'background': `url(${slide.bck})` }">
                    <div class="container slider-container">
                        <div class="text">{{slide.text}}</div>
                        <div class="image"><img :src="slide.img" :alt="slide.text"></div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import slideBck from '../../assets/images/slide_bck.jpg';
import slideBck2 from '../../assets/images/slide_bck2.jpg';

import pizzaOne from '../../assets/images/pizza_one.png';
import pizzaTwo from '../../assets/images/pizza_three.png';

export default {
     components: {
        Carousel,
        Slide
    },
    data(){
        return {
            slides : [
                {
                    text: '20% off on all pizzas',
                    bck: slideBck,
                    img: pizzaOne
                },
                {
                    text: 'buy two, get one three',
                    bck: slideBck2,
                    img: pizzaTwo
                },
            ]
        }
    }
}
</script>

<style>

</style>
