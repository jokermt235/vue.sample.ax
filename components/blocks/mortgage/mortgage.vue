<script>
import container from '../../layout/container.vue'


export default {
    props: {
      title: String,
      mortgageItems: Array
    },
    data(){
        return{

        }
    },
    components: {
        container,
    }
}
</script>
<template lang="pug">
    container(extraClass="section_grey")
        .cottage-mortgage
            .row
                .col
                    .cottage-mortgage__title.title_m
                        h2 {{ title || 'Купить дом просто'}}
            .row.row-cols-3
                .col(v-for="item in mortgageItems")
                    .cottage-mortgage__card
                        span {{item.name}}

</template>


