<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Form from '../components/blocks/form/form.vue'
import InternalCard from '../components/blocks/internal-brokery/internal-brokery.vue'
import cardImg from '../../assets/images/pages/ipoteka-krasnodare/internal-card-chel.png'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'


export default {
    name: 'App',
    components: {
        container,
        InternalCard,
        Layout,
        Form,
        Breadcrumbs,
        cardImg
    },
    props: {
        title: String,

    },
    data() {
        return {
            inputs: [

                {
                    name: 'name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'usertext',
                    title: 'Я хочу сообщить о',
                    inputTextarea: true,
                    required: true
                },
            ],
            selects: [
                ['Офис 1','Офис 2' ],
                ['Сотрудник 1','Сотрудник 2' ],
                // [
                //     {
                //         label: 'Группа 1',
                //         options: ['1', '2', '3']
                //     },
                //     {
                //         label: 'Группа 2',
                //         options: ['1', '2', '3']
                //     },
                // ]
            ],
            selectPlaceholder: ['Выберите офис', 'Выберите сотрудника'],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="seo-text"><p>Качество обслуживания клиентов в Краснодаре сейчас действительно выдвигается на передний план для большинства фирм. Вполне логично, что даже при схожем наборе сервисов и компетенций одни фирмы бывают гораздо успешнее других. Причина тривиальна: расходуются внушительные ресурсы для отладки системы контроля качества.</p><p>Предоставляемые во многих компаниях услуги далеко не всегда становятся первичным критерием для звонка клиента. Все хотят не просто воспользоваться сервисом, но и остаться довольным, что весьма справедливо. Для <a title="Немного об агентстве &quot;АЯКС-Риэлт&quot;" href="/agentstvo-nedvizhimosti-krasnodar/">агентства недвижимости Краснодара</a> "АЯКС" оценка качества обслуживания — ежедневная кропотливая работа.</p><p>Мало найти отличную квартиру. Нужно, чтобы у человека не осталось неразрешенных вопросов и неприятных впечатлений, сомнений. Мы внимательны к самым, казалось бы, малозначительным деталям и стремимся к тому, чтобы агенты компании соблюдали внутрикорпоративные стандарты.</p><p>В "АЯКСе" уверены: работу надо делать на 100%!</p></div>',
            internalBrokery:[
                {
                    src: cardImg,
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: cardImg,
                    name: 'Лидия Даниловна Слабченко',
                    post: 'Отдел контроля качества',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: cardImg,
                    name: 'Лидия Даниловна Слабченко',
                    post: 'Отдел контроля качества',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: cardImg,
                    name: 'Лидия Даниловна Слабченко',
                    post: 'Отдел контроля качества',
                    tel: '+7 918 197-01-97',
                },
            ],

        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Контроль качества")
        .map
            container
                .map-box
                    .map-title
                        p АН «АЯКС»
                        p Отдел контроля качества
                    .map-place
                        p ул. Рашпилевская, 179/1, 3 этаж
                    .map-time
                        span График работы:
                        span пн-пт с 9:00 до 18:00
                    .map-tels
                        a(href="tel:+79184416393").map-tel +7 918 441-63-93
                        a(href="tel:+79883699767").map-tel +7 988 369-97-67
                    .map-img
                        img(src="https://picsum.photos/400")
                    .map-copy
                        span Комиссия 3% от стоимости недвижимости, но не менее 100 тыс.руб.
                    a(href="#form-scroll").map-btn--large.btn-default
                        span Написать нам

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor" width="100%" height="880" frameborder="0"></iframe>
        container
            .title
                h2 Качество обслуживания клиентов "АЯКС"
            .text( v-html="fetchedText" )
        container
            InternalCard(:internalBrokery="internalBrokery" title="  ")
        container
            .big-form(id="form-scroll")
                Form(:inputs="inputs" :checkboxes="checkboxes" :selects="selects" :selectPlaceholder="selectPlaceholder" title="Жалоба на обслуживание" subtitle="Сообщите о вашей проблеме, и мы постараемся вам помочь как можно скорее!")
</template>
