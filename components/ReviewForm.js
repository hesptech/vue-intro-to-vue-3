app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">

        <label for="review"></label>
        <textarea name="" id="review" v-model="review" cols="30" rows="10"></textarea>

        <label for="rating"></label>
        <select name="" id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input type="submit" class="button">

    </form>
    
    <form class="reccomend-form" @submit.prevent="onSubmitReccomend">
        <h3>Would you reccomewnd this product</h3>
        

        <input style="width: unset; height: unset;" id="yes" type="radio" name="reccomend" v-model="reccomend" value="yes"><label for="yes">yes</label>
        <input  style="width: unset; height: unset;" id="no" type="radio" name="reccomend" v-model="reccomend" value="no"><label>no</label>   
        <input type="submit" class="button">

    </form>

    
    ` 
    ,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            reccomend: ''
        }
    },
    methods: {
        emits: ['review-submitted', 'reccomend-submitted'],
        onSubmit() {
            if ( this.name === null || this.review === null || this.rating === null) {
                alert('missing info')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        },
        onSubmitReccomend() {
            console.log(this.reccomend)
            this.$emit('reccomend-submitted', this.reccomend) 
        }
    }
})