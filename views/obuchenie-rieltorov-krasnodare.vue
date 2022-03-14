<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Layout,
        Form,
        Breadcrumbs,
        Profitably
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
                    title: 'Добрый день! Я хочу узнать...',
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
            fetchedText: '<p>Обучение риэлторов в Краснодаре - распространенная услуга, ведь здесь постоянно востребованы хорошие агенты.</p><p>В агентстве недвижимости "АЯКС" понимают: успешная продажа недвижимости без обучения невозможна. Поэтому работа в агентстве всегда сопряжена с образовательным процессом. У нас учатся те, кто уже давно в отрасли, и новички.</p><p>Можно сказать, что <a title="Работа риэлтором в Краснодаре в АЯКС-Риэлт" href="/rabota-rieltorom-krasnodare/">работа риэлтором в Краснодаре</a> - обучение нон-стоп. В нашей компании стать высококлассным специалистом могут люди любых профессий и возрастов. Наши сотрудники говорят, что агент - это, в первую очередь, состояние души. Когда человек нацелен на личностный рост, ему многое интересно, он не упустит шанса подняться по карьерной лестнице. А столица Кубани - один из лучших городов для достижения этой цели.</p><p>Ищете себя в продажах? Обещаем, у нас вы найдете все необходимое! Приходите, пройдите курсы, и вам не захочется быть кем-то, кроме риэлтора!</p>',

        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Обучение")
        Banner(title="Начни новую карьеру. Начни успешную жизнь" src="images/learn-bg.jpg")
        container
            .title
                h2 Обучение риэлторов в Краснодаре
            .seo-text( v-html="fetchedText" )
        container
            .big-form.scroll-block
                Form(:inputs="inputs" :checkboxes="checkboxes" title="Хочу узнать подробности про обучение риэлтора" subtitle="Сделайте успешную карьеру вместе с ''АЯКС''!" )
</template>
