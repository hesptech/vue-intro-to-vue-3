const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        updateCartAdd(todo) {
            this.cart += todo
        },
        updateCartSubstract(todo) {
            if(this.cart >= 1)this.cart += todo
        }

    }
})
