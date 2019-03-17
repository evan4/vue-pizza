<template>
    <footer>
        <div class="container clear">
            <div>
                <img :src="logoIcon" alt="logo">
                <div class="contact">
                    <div>Call us</div>
                    <div>111-333</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '../../assets/images/logo.png';
export default {
    data(){
        return {
            logoIcon: Logo
        }
    }
}
</script>

<style>

</style>
