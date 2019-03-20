<template>
    <div class="container newsl_container">
        <h2>Join to our newsletter</h2>
        <form @submit.prevent="subscribe"
        class="form">
            <input type="text" v-model="email">
            <button type="submit">Subscribe</button>
        </form>
        <div class="error_label">
            <div>{{error}}</div>
        </div>
        <div class="success_label">
            <div>{{success}}</div>
        </div>
        <div class="small">
            <p>Ancient and still more majestic Samarkand is impeccable. To get an idea of a powerful city, you need to visit this ancient place. Not for nothing that the city was recognized as one of 50 cities in the world that should be visited.</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            error: '',
            success: ''
        }
    },
    methods: {
        validate(email){
            let valid = [true, ''];
            const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            if (!this.email) {
                valid = [false, "It's empty"];
            }else if(!emailReg.test(email)){
                valid = [false, "Enter a valid email"];
            }
            return valid;
        },
        subscribe(){
            let valid = this.validate(this.email);
            if(valid[0]){
                this.error = '';
                this.addEmail(this.email);
            }else{
                this.error = valid[1];
            }
        },
        addEmail(email){
            this.$http.get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
                .then((result) => {
                    if(Object.getOwnPropertyNames(result.body).length === 0){
                        this.$http.post('users.json', {email: this.email})
                            .then( response => {
                            this.success = 'Thank you!';
                            this.email = '';
                            })
                    }else{
                        this.success = 'Already on the list';
                    }
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}
</script>

<style>

</style>
