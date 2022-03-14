<script>

import Form from '../form/form.vue'
import Slider from '../slider/slider'
import faq from '../faq/faq.vue'

export default {
  components: {
        Form,
        Slider,
        faq
    },
    props: {
        tabs: Array,
        faqTabs: Array,
        consultationTitle: String,
        consultationText: String,
        title: String
    },


    data() {
        return {
            tabActive: 0,
            filterFaq: ''
        }
    },
    methods: {
        changeSlider: function(index) {
            this.tabActive = index
        },
    }, 
}
</script>
<template lang="pug">
section.section
    .container
        .faq-big--box
            template(v-if="tabs")
                .faq-tab--list
                    template(v-for="(item, index) in tabs")
                        span.faq-tab--item(@click="changeSlider(index)" :class="index === tabActive ? 'active' : '' ") {{ item }}
                    .faq-search
                        input(type="text" placeholder="Поиск" v-model="filterFaq" )
                .question__title.title
                    h2 Вопрос – ответ
                template(v-for="(item, index) in faqTabs")
                    .faq-info(:class="index === tabActive ? 'active' : '' ")
                        template(v-for="(fitem, i) in item.faq")
                            template(v-if="filterFaq != '' ? fitem.question.toLowerCase().includes(filterFaq.toLowerCase()) || fitem.answer.toLowerCase().includes(filterFaq.toLowerCase()) : true ")
                                faq(
                                    :filtered="filterFaq"
                                    :faq="fitem"
                                    :index="i"
                                    :key="i")
</template>
