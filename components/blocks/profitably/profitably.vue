<script>
import container from '../../layout/container.vue'


export default {
    props: {
        title: String,
        profitablyItem: Array,
        classes: String,
        small: Boolean,
        vertical: Boolean,
        extraClass: String
    },
    components: {
        container
    },
    data() {
        return {
            rowClasses: 'row-cols-4',
            itemsClasses: ''
        }
    },
    mounted() {
        if(this.classes) {
            this.rowClasses = this.classes
        }
        if(this.vertical) {
            this.itemsClasses += ' profitably-box--vertical'
        }
        if(this.small) {
            this.itemsClasses += ' profitably-box--small'
        }
    }
}
</script>
<template lang="pug">
    //- container(extraClass="profitably")
    container(:class="extraClass")
        .col(v-if="!vertical")
            .profitably-title.title
                h2 {{ title || "Почему вам выгодно работать с нами?" }}
        .row.gy-3(:class="rowClasses")
            .col-12(v-for="(item, index) in profitablyItem" class="col-sm-6 col-md-2 col-md-3")
                .profitably-box(:class="itemsClasses")
                    .profitably-number {{ index + 1}}
                    .profitably-info
                        .profitably-name(v-if="item.name")
                            p {{ item.name }}
                        .profitably-text
                            p {{ item.text }}
</template>
