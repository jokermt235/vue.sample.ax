<script>

import container from '../../layout/container'
import ProductCard from '../product-card/product-card'

export default {
    components: {
    ProductCard,
    container,

    },
    props: {
        title: String,
        nobanner: Boolean,
        flatView: Boolean
    },
    data() {
        return {
            tabsProduct: [ "Квартиры" ,"Дома", "Земельные участки", "Коммерчекая недвижимость"],
            tabActive: 0,

        }
    },
    methods: {
        changeSlider: function(index) {
            this.tabActive = index
            this.getBestByTab(index  + 1);
        },
        getBestByTab(index){
            this.$store.dispatch('hometab/httpFetch', index);
        }
    },
    mounted() {
        this.getBestByTab(1);
        console.log( this.flatView)
    },
    computed : {
        productItems(){
            console.log("product-tabs.computed",this.$store.getters['hometab/records']);
            return this.$store.getters['hometab/records'].map((item)=>{
                return {
                    name: item.title, //'3-комнатная квартира, 72.1 м²',
                    price: item.price,
                    cost: item.price_per_square,
                    mortgage: '51 364',
                    square: 90,
                    floor: '4/24 этаж',
                    views: item.views,
                    place: `${item.address.locality.type.name} ${item.address.locality.name}, р-н ${item.address.district.name}, ${item.address.street.type.short}, ${item.address.house_number}`,//'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                    photos: [
                        'https://picsum.photos/500',
                        'https://picsum.photos/500',
                        'https://picsum.photos/500',
                        'https://picsum.photos/500',
                    ]
                };
            });
        }
    },
}
</script>
<template lang="pug">
div.section
    container(extraClassRow="row-cols-4" v-if="tabsProduct" extraClass="section-nopadding")
        h2.title {{ title }}
        .consultation
            template(v-if="tabsProduct")
                .consultation-tab
                    ul.consultation-tab--list
                        template(v-for="(item, index) in tabsProduct")
                            li.consultation-tab--name(@click="changeSlider(index)" :class="index === tabActive ? 'active' : '' ") {{ item }}
    container(:extraClassRow="flatView ? 'row-cols-4 gy-4' : 'row-cols-1 gy-4' ")
        template(v-for="(single,index) in productItems")
            ProductCard(
                :sliderId="index"
                :viewType="flatView"
                :prodname="single.name"
                :price="single.price"
                :cost="single.cost"
                :mortgage="single.mortgage"
                :square="single.square"
                :floor="single.floor"
                :place="single.place"
                :productPhotos="single.photos",
                :views="single.views"
            )
        .col(v-if="!nobanner")
            .product-card.product-card--banner(:class="flatView ? '' : 'product-strip--banner' ")
                .product-card--img
                    img(src="https://picsum.photos/500" alt="")
                .product-card--name
                    span Не нашли нужного варианта?
                .product-card--text
                    span Подберем до 20 объектов по вашим параметрам
                a(href="").product-card--btn
                    span Связаться с риэлтором
        //- template(v-for="(item, index) in productItems" v-if="index === tabActive")
            //- .consultation-slider(:data-tab-slider="index" )
                //- Slider(v-if="index === tabActive" :sliderOptions="sliderOptions" :slides="item.slider" :sliderId="index" arrowClass="consult-arrow")
        .col-12.flex.justify-content-center(v-if="!nobanner")
            a(href="/kvartiry" class="internal-news--btn btn--wide") Ещё {{productItems.length}} объекта
</template>
