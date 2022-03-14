<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Form from '../components/blocks/form/form.vue'
import cardImg from '../../assets/images/pages/ipoteka-krasnodare/internal-card-chel.png'
import requisitesItem from '../components/blocks/requisites/requisites.vue'
import contactNav from '../components/blocks/contactNav/contactNav.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
export default {
    name: 'App',
    components: {
        container,
        requisitesItem,
        Layout,
        Form,
        cardImg,
        Breadcrumbs,
        contactNav
    },
    props: {
        title: String,

    },
    data() {
        return {
            selectsSearch: ['Администрация', '1','2'],
            searchDefault: 'Администрация',
            selects: ['Квартира','Дом' ],
            selestcValues: [
                {
                    title: 'ОТДЕЛ КОНТРОЛЯ КАЧЕСТВА',
                    address: 'ул. Рашпилевская, 179/1, 3 этаж',
                    workTime: 'с 9:00 до 19:30',
                    phone: '7000000000',
                    imgSrc: 'https://www.ayax.ru/upload/resize_cache/iblock/06b/300_200_1/06bf3eb2267089b346278eda0aa00174.jpeg'
                },
                {
                    title: 'ОТДЕЛ КОНТРОЛЯ КАЧЕСТВА2',
                    address: 'ул. Рашпилевская, ',
                    workTime: 'с 7:00 до 19:30',
                    phone: '9000000000',
                    imgSrc: 'https://www.ayax.ru/upload/resize_cache/iblock/ce6/300_200_1/ce68f52c38abcca220828ac75d260c8e.jpeg'
                },
                {
                    title: 'ОТДЕЛ КОНТРОЛЯ КАЧЕСТВА3',
                    address: 'ул. Рашпилевская, 178',
                    workTime: 'с 8:00 до 19:30',
                    phone: '8000000000',
                    imgSrc: 'https://www.ayax.ru/upload/resize_cache/iblock/06b/300_200_1/06bf3eb2267089b346278eda0aa00174.jpeg'
                }
            ],
            selectsActive: 0,
            inputs: [

                {
                    name: 'email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<p>Покупка или продажа недвижимого имущества – важный шаг. Далеко не каждый владеет необходимыми знаниями, чтобы проверить юридическую безопасность, осуществить сделку на выгодных условиях. Для этого нужен тот, кто уже зарекомендовал себя среди риэлторов, а главное провел тысячи сложнейших переговоров.</p><p>«АЯКС» предоставляет риэлторские услуги по поиску, купле-продаже <a href="#">домов</a> и <a href="#">квартир</a>, обмену, аренде жилой, коммерческой недвижимости, земельных участков. Наша база содержит более 20 000 предложений для Краснодарского края.</p><h2>Тестовый заголовок</h2><ul><li><em>поможем определиться с&nbsp;жильём, подберем как на первичном, так и на вторичном рынках;</em></li><li><em>полную проверку с юридической точки зрения;</em></li><li><em>сопровождение сделки купли-продажи;</em></li><li><em>помощь в получении ипотечных займов под низкий процент;</em></li><li><em>риэлторские услуги без комиссионных сборов (если купить новостройку).</em></li></ul><p><h2>Тестовый заголовок</h2></p><ol><li><ins>поможем определиться с&nbsp;жильём, подберем как на первичном, так и на вторичном рынках;</ins></li><li><strong>полную проверку с юридической точки зрения;</strong></li><li><del>сопровождение сделки купли-продажи;</del></li><li>помощь в получении ипотечных займов под низкий процент;</li><li>риэлторские услуги без комиссионных сборов (если купить новостройку).</li></ol>',
            
            contactNav:[
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                },
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                },
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                },
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                }
            ]


        }
    },
    methods: {
        changeActiveSelects(val) {
            this.selectsActive = this.selectsSearch.indexOf(val)
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Контакты")
        .title Контакты агентства недвижимости "АЯКС"

        //- .contact-page--mobile
            container
                .col
                    .map-box
                        .map-title
                            p АН «АЯКС»
                            p Отдел контроля качества
                        .map-place
                            p ул. Рашпилевская, 179/1, 3 этаж
                        .map-time
                            span График работы:
                            span пн-пт с 9:00 до 18:00
                        a(href="tel:+79184416393").map-tel +7 918 441-63-93
                        a(href="tel:+79883699767").map-tel +7 988 369-97-67
                        .map-img
                            img(src="https://picsum.photos/400")
                        .map-copy
                            span Комиссия 3% от стоимости недвижимости, но не менее 100 тыс.руб.
                        .map-btn.btn-default
                            span Написать нам
        .map.map-contact--page
            container
                .map-box
                    .single-select.flex.form-banner-select
                        v-select(:options="selectsSearch" v-model="searchDefault" :clearable="false" @input="changeActiveSelects")  
                    .map-title
                        p АН «АЯКС»
                        p {{ selestcValues[selectsActive].title }} 
                    .map-place
                        p {{ selestcValues[selectsActive].address }}
                    .map-time
                        span График работы:
                        span пн-пт {{ selestcValues[selectsActive].workTime }}
                    a(:href="'tel:' + selestcValues[selectsActive].phone").map-tel {{ selestcValues[selectsActive].phone }}
                    .map-img
                        img(:src="selestcValues[selectsActive].imgSrc")
                    .map-copy
                        span Комиссия 3% от стоимости недвижимости, но не менее 100 тыс.руб.
                    .map-btn.btn-default.js-scroll-form
                        span Написать нам

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>
        contactNav(:contactNav="contactNav")
        container
            requisitesItem
        container
            .big-form
                Form(:inputs="inputs" :selects="selects" :selectPlaceholder="selects[0]" :checkboxes="checkboxes" title="Напишите нам прямо сейчас" subtitle="Хотите сотрудничать с нами?" subText="Оставьте заявку, и наш специалист свяжется с вами в ближайшее время.")
</template>
