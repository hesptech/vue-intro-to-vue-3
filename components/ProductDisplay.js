app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            
            <!-- image -->
            <!-- CLASS Binding , IMAGE Binding-->
            <a v-bind:href="url" class="">
            <img 
                v-bind:src="image" 
                :class="{ 'out-of-stock-img': !inStock }">
            </a>
        </div>
        <div class="product-info">
            
            <!-- BINDING Attribute -->
            <h1>{{ title }}</h1>
            <h5>{{ brand + ' ' + product }}</h5>
            
            <p>Shipping: {{shipping}}</p>
            
            <!-- description stock -->
            <!-- CONDITIONAL Rendering -->
            <p v-if="inStock">
            In Stock: 
            <span v-if="inventory > 10">{{ inventory }} left!</span>
            <span v-else="inventory <= 10">{{ inventory }} only left</span>
            </p>
            <p v-else>Out of Stock</p>
            <p v-if="onSaleBadge">{{brand }} are on sale</p>
            

            <!-- description details -->
            <!-- LIST Rendering -->
            <!-- COMPONENTS & PROPS -->
            <product-details :details="details"></product-details>


            <!-- EVENT Binding -->
            <!-- CLASS Binding -->
            <!-- <div 
            v-for="variant in variants" 
            :key="variant.id" 
            @mouseover="updateImage(variant.image)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }">
            <span class="variant-name">{{ variant.color }}</span>
            </div> -->

            <!-- color circles -->
            <!-- CLASS & STYLE BINDING , COMPUTED Properties -->
            <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }">
            <span class="variant-name">{{ variant.color }}</span>
            </div>


            <!-- buttons add/substract -->
            <!-- EVENT Handling -->
            <button 
            class="button" 
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart(1)">Add to cart</button>
            <!-- SHORTHAND: v-on:click="addToCart" -->
            <button class="button" @click="addToCart(-(1))" style="margin-left: 5px">- from cart</button>
        </div>
        </div>
    </div>`,
    data() {
        return {
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
        addToCart(todo) {
            if (todo == 1) {
                this.$emit('add-to-cart', todo)
            } else {
                this.$emit('substract-to-cart', todo)
            }
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
        },
        shipping() {
            if (this.premium) {
                return 'free'
            }
            return 2.99
        }
    }
})