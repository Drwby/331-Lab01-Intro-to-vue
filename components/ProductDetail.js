const productDetails = {
    props:{
        details:{
            type: Array,
            required: true
        }
    }, template: `
<ul>
<li v-for="detail in details">{{detail}}</li>
</ul>
`
}