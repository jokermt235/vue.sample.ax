<script> 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  

export default({
    components: {
        swiper,
        swiperSlide
    },
    props: { 
        slides: Array,
        sliderOptions: Object,
        sliderId: String,
        arrowClass: String
    },
    setup() {
        
    },
})
</script>

<template lang="pug">  

swiper(:options="sliderOptions" )
    swiper-slide.slider-item(v-for="item in slides" :key="item.id")
        .slider-box
            .consultation-img
                img(:src="item.photo", :alt="item.name")
            .consultation-name
                span {{item.name}}
            .consultation-direction
                span {{item.position}}
    .swiper-button-prev(slot="button-prev" :data-button-id="sliderId" :class="arrowClass")
    .swiper-button-next(slot="button-next" :data-button-id="sliderId" :class="arrowClass") 
</template>