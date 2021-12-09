app.component('product-details', {
    props: {
        details: {
            type: Array
        }
    },
    template:
    /* html */
    `
            <!-- description details -->
            <!-- LIST Rendering -->
            <div class="">
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            </div>
    `
})