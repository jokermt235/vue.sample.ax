<script>
import container from '../../layout/container.vue'

export default {
    props: {
        title: String,
        btn: String,
    },
    components: {
        container
    },
    mounted(){
        this.getNews();
    },
    methods : {
        getMonth(str){
            let dt = Date.parse(str);
            let date = new Date(dt);
            return date.getMonth();
        },
        getDay(str){
            let dt = Date.parse(str);
            let date = new Date(dt);
            return date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
        },
        getNews(){
            this.$store.dispatch('homenews/httpFetch');
        }
    },
    computed : {
        newsItems(){
            let monthes = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
            console.log(monthes);
            return  this.$store.getters['homenews/records'].map(item=>{
                return {
                    day : this.getDay(item.created_at),
                    month : monthes[this.getMonth(item.created_at)],
                    text : item.text,
                    href : item.url
                };
            });
        }
    }
}
</script>

<template lang="pug">
    container
        .internal-news
            .row
                .col
                    .internal-news--title.title
                        h2 {{ title || 'Новости ипотеки Краснодара'}}
            .row.row-cols-4.g-5
                .col-12.col-sm-6.col-md-6.col-lg-3(v-for="item in newsItems")
                    .internal-news--card
                        .internal-news--date
                            span {{ item.day }}
                            span {{ item.month }}
                        .internal-news--text
                            p {{ item.text }}
                        a( :href="item.href").internal-news--btn
                            span {{ btn || 'Подробнее' }}
</template>
