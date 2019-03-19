<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay: 200, scale: 2}">
                <h1>Hungry ?</h1>
            </div>
            <div class="second" v-scroll-reveal.reset="{delay: 200, afterReveal: () => {
                secondAnim = true;
            }}">
                <div v-if="secondAnim">
                    <comp-anim/>
                </div>
            </div>
            <div class="third" v-scroll-reveal.reset="{delay: 600, scale: 2}">
                <span>Five us a call</span> <span> 5555-3311</span>
            </div>
        </div>
    </div>
</template>

<script>
import compAnim from './anim';

export default {
    components:{
        compAnim
    },
    data(){
        return {
            secondAnim: false
        }
    }
}
</script>

<style>

</style>
