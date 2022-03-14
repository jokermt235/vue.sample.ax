<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'

import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import FaqTabs from '../components/blocks/faq-tab/faq-tab.vue'

export default {
    name: 'App',
    components: {
        Banner,
        container,
        Layout,
        Breadcrumbs,

        FaqTabs,

    },
    data() {
        return {
            bannerBtns: [
                {
                    title: 'Задать вопрос',
                    link: '#'
                }
            ],
            tabs: ['Покупка','Аренда'],
            faqTabs: [
                {
                    faq: [
                        {
                            id: 1,
                            question: 'Сколько стоит оценка?',
                            answer: 'Оценка квартиры в черте города Краснодар стоит от 4 000 до 5 000 рублей, оценка дома на земельном участке – от 8 000 до 9 000 р., оценка автомобиля – от 3 000 до 5 000 р.',
                            open: false
                        },
                        {
                            id: 2,
                            question: 'Срок выполнения работы?',
                            answer: 'Срок выполнения работы по оценке квартиры 1-2 дня, по оценке дома на земельном участке 3-4 дня, с момента предоставления всех необходимых документов.',
                            open: false
                        },
                        {
                            id: 3,
                            question: 'Аккредитованы в банке?',
                            answer: 'Наша организация аккредитована во многих крупнейших банках. Например, Сбербанк, Россельхозбанк, Открытие, Уралсиб, Газпромбанк и многие другие.',
                            open: false
                        },
                        {
                            id: 4,
                            question: 'Можете предварительно прикинуть стоимость объекта?',
                            answer: 'Предварительный расчет стоимости объекта возможен в виде диапазона. Для этого необходимо направить несколько фотографий квартиры/дома и документы, описывающие актуальные характеристики объекта оценки.',
                            open: false
                        }
                    ],
               },
               {
                    faq: [
                        {
                            id: 1,
                            question: 'Сколько стоит оценка?',
                            answer: 'Оценка квартиры в черте города Краснодар стоит от 4 000 до 5 000 рублей, оценка дома на земельном участке – от 8 000 до 9 000 р., оценка автомобиля – от 3 000 до 5 000 р.',
                            open: false
                        },
                        {
                            id: 2,
                            question: 'Сколько стоит оценка?',
                            answer: 'Оценка квартиры в черте города Краснодар стоит от 4 000 до 5 000 рублей, оценка дома на земельном участке – от 8 000 до 9 000 р., оценка автомобиля – от 3 000 до 5 000 р.',
                        },
                        {
                            id: 3,
                            question: 'Сколько стоит оценка?',
                            answer: 'Оценка квартиры в черте города Краснодар стоит от 4 000 до 5 000 рублей, оценка дома на земельном участке – от 8 000 до 9 000 р., оценка автомобиля – от 3 000 до 5 000 р.',

                        },
                    ],
               }
            ],
        }
    },
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Вопрос-ответ")
        Banner( :bannerBtns="bannerBtns" src="/images/vopros-otvet.jpg" title="FAQ" bannerBlur)
        container(extraClass="line")
            .question
                FaqTabs(:tabs="tabs" :faqTabs="faqTabs")

</template>

