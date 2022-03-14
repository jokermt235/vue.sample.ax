<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import mapContact from "../components/blocks/mapContact/mapContact.vue"
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        container,
        Layout,
        Breadcrumbs,
        mapContact,
    },
    props: {
        title: String,

    },
    data() {
        return {
            fetchedText: '<div class="seo-text"><p><strong>Карта районов Краснодара</strong> с цветовыми обозначениями границ районов и микрорайонов, улиц и домов с номерами, позволяет быстро сориентироваться и получить полноценную информацию о самой локации, территории города и пригорода в целом.</p><p>Используя изменение масштаба, можно более четко определить границы районов, а клик по участку карты позволит познакомиться с выбранным районом подробнее. Подробный обзор, фотографии, инфраструктура, ну и конечно подборки недвижимости по микрорайонам. Вы сможете <a title="Все квартиры от Аякса" href="https://www.ayax.ru/kvartiry/">купить квартиру в Краснодаре</a> по выбранным требованиям.</p></div>',
            fetchedText2: '<p>Познакомьтесь с районами, выберете на карте Краснодара более подходящий, задайте интересующие вопросы, а мы не только вас проконсультируем, но и быстро подберем любую недвижимость.</p>',


        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Карта районов Краснодара" )
    mapContact(title="Районы Краснодара на карте с улицами и домами")
    container(extraClass="section-padding")
        .text( v-html="fetchedText" )
    container
        .districts
            ul.districts-list
                li.districts-item
                    .districts-box
                        .districts-name
                            span А
                        a(href="/district-detail").districts-link мкр. Авиагородок
                        a(href="/district-detail").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
                    .districts-box
                        .districts-name
                            span А
                        a(href="#").districts-link мкр. Авиагородок
                        a(href="#").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
                    .districts-box
                        .districts-name
                            span А
                        a(href="#").districts-link мкр. Авиагородок
                        a(href="#").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
                li.districts-item
                    .districts-box
                        .districts-name
                            span Б
                        a(href="#").districts-link мкр. Авиагородок
                        a(href="#").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
                    .districts-box
                        .districts-name
                            span Б
                        a(href="#").districts-link мкр. Авиагородок
                        a(href="#").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
                    .districts-box
                        .districts-name
                            span Б
                        a(href="#").districts-link мкр. Авиагородок
                        a(href="#").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
                li.districts-item
                    .districts-box
                        .districts-name
                            span В
                        a(href="#").districts-link мкр. Авиагородок
                        a(href="#").districts-link аул Афипсип
                        a(href="#").districts-link п. Агроном
                        a(href="#").districts-link мкр. Авиагородок
    container
        .text( v-html="fetchedText2" )
</template>
