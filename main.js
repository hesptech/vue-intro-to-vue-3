const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            inStock: true,
            inventory: 9,
            details: ['50% cotton', '25% wool', '25%polyster'],
            variants: [
                { id: 22, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 23, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        substarctFromCart() {
            if(this.cart >= 1)this.cart -= 1
        }
    }
})
