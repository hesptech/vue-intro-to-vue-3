const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            //image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            //inStock: true,
            inventory: 9,
            details: ['50% cotton', '25% wool', '25%polyster'],
            variants: [
                { id: 22, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 23, color: 'blue', image: './assets/images/socks_blue.jpg', qunatity: 0}
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
        updateVariant(index ) {
            this.selectedVariant = index
        },
        substarctFromCart() {
            if(this.cart >= 1)this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleBadge() {
            return this.onSale
        }
    }
})
