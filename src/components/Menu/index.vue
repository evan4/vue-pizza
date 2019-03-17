<template>
    <div class="conyainer menu_container">
        <div class="top">
            <h2>Menu</h2>
        </div>
        <div class="buttons">
            <md-button
            v-for="(button, index) in buttons" 
            :key="index"
            :class="button.active ? 'md-raised' : ''"
            @click="changeMenu(button.name)">
            {{button.name}}
            </md-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            buttons: [
                {
                    name: 'pizza',
                    active: true
                },
                {
                    name: 'burgers',
                    active: false
                },
                {
                    name: 'salat',
                    active: false
                },
                {
                    name: 'dessert',
                    active: false
                }
            ],
            products: []
        }
    },
    methods: {
        changeMenu(name){
            for (let index = 0; index < this.buttons.length; index++) {
                const element = this.buttons[index];
                if(element.name === name){
                    element.active = true
                }else{
                    element.active = false
                }
                
            }
        }
    },
    created(){
        this.$http.get('products.json')
        .then((response) => response.json())
        .then((data) => {
            let list = [];

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    list.push({
                        ...element,
                        id: key
                    })
                }
            }
            this.products = list;
        })
        .catch((err) => {
            
        });
    }
}
</script>

<style>

</style>
