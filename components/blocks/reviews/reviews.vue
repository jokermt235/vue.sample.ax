<script>
const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};

export default {
    props: {
        title: String,
        reviewsItem: Array,
    },
     data() {
        return { 
            pageOfItems: this.reviewsItem,
            customLabels
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<template lang="pug">
    .container
        .reviews
            .row
                .col
                    .reviews-title.title
                        h2 Отзывы наших клиентов
            .row.row-cols-3.gy-5
                .col(v-for=" (item, index) in pageOfItems ")
                    .reviews-card
                        .reviews-card--info
                            .reviews-card--date
                                //- span {{ item.day + index }}
                                span {{ index }}
                                span {{ item.month }}
                            .reviews-card--name  {{ item.title }}
                        .reviews-card--text
                            p {{ item.text }}
                            p {{ item.name }}
        jw-pagination(:items="reviewsItem" @changePage="onChangePage" :labels="customLabels" :pageSize="6")
</template> 
