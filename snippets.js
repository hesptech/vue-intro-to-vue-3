app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input type="text" id="name">

        <label for="review"></label>
        <textarea name="" id="review" v-model="review" cols="30" rows="10"></textarea>

        <label for="rating" v-model="rating"></label>
        <select name="" id="rating" v-model.number="rating">
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
        </select>

        <input type="submit" class="button">

    </form>` 
    ,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
})