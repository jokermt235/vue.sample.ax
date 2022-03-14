<script>
// import func from 'vue-editor-bridge'
import Form from '../form/form.vue'
import Slider from '../slider/slider'
// import { tabs, tab } from "vue-material-tabs";

export default {
  components: {
        Form,
        Slider,
        // tabs,
        // tab,
    },
    props: {
        tabs: Array,
        tabsSlider: Array,
        consultationTitle: String,
        consultationText: String,
        title: String,
        scrollClass: {
            type: String,
            default: ''
        },
    },
     computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },


    data() {
        return {
            tabActive: 0,
            inputs: [
                {
                    name: 'name',
                    title: 'Имя',
                    required: false
                },
                {
                    name: 'email',
                    title: 'Email',
                    type: 'email',
                    required: true
                }
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }

            ],

            sliderOptions: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
        }
    },
    methods: {
        changeSlider: function(index) {
            this.tabActive = index
        }
    }
}
</script>
<template lang="pug">
section.section
    .container
        h2.consultation--title {{ title }}
        .consultation
            template(v-if="tabs")
                .consultation-tab
                    ul.consultation-tab--list
                        template(v-for="(item, index) in tabs")
                            li.consultation-tab--name(@click="changeSlider(index)" :class="index === tabActive ? 'active' : '' ") {{ item }}
            .consultation-box
                .consultation-list
                    .consultation-item
                        .consultation-left
                            template(v-for="(item, index) in tabsSlider")
                                .consultation-slider(:data-tab-slider="index" :class="index === tabActive ? 'active' : '' ")
                                    Slider(v-if="index === tabActive" :sliderOptions="sliderOptions" :slides="item.slider " :sliderId="index + 'consult'" arrowClass="consult-arrow")
                        .consultation-right
                            .consultation-form
                                .banner-form(:class='scrollClass')
                                    .banner-form--title
                                        h3 {{ consultationTitle }}
                                    .banner-form--text
                                        p {{ consultationText }}
                                    Form(:inputs="inputs" :checkboxes="checkboxes" horizontal)
</template>
