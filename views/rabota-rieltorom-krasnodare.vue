<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Form from '../components/blocks/form/form.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Layout,
        Form,
        Profitably,
        Breadcrumbs,
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
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<p>Покупка или продажа недвижимого имущества – важный шаг. Далеко не каждый владеет необходимыми знаниями, чтобы проверить юридическую безопасность, осуществить сделку на выгодных условиях. Для этого нужен тот, кто уже зарекомендовал себя среди риэлторов, а главное провел тысячи сложнейших переговоров.</p><p>«АЯКС» предоставляет риэлторские услуги по поиску, купле-продаже <a href="#">домов</a> и <a href="#">квартир</a>, обмену, аренде жилой, коммерческой недвижимости, земельных участков. Наша база содержит более 20 000 предложений для Краснодарского края.</p>',
            fetchedText2: '<div class="seo-text plaintext-maxwidth"><p>Если вы целеустремленны, коммуникабельны, хотите развиваться, профессионально расти и управлять своим доходом — мы ждем вас в агентстве недвижимости "АЯКС"!</p><p>Для получения дополнительной информации и записи на собеседование нужно связаться со специалистами отдела персонала по номеру <strong>+7 918 287-52-46</strong>.</p></div>',
            profitablyItem: [
                {
                    number: '1',
                    text: 'Полная занятость'

                },
                {
                    number: '2',
                    text: 'Образование: предпочтительно высшее'
                },
                {
                    number: '3',
                    text: 'Уверенные навыки пользования ПК'
                },
                {
                    number: '4',
                    text: 'Активность и коммуникабельность'
                }
            ],
            fetchedText: '<div class="seo-text"><p>Интересует работа риэлтором в Краснодаре? В агентстве недвижимости "АЯКС" всегда есть отличные вакансии: <a title="Все об агентстве недвижимости &quot;АЯКС-Риэлт&quot;" href="/agentstvo-nedvizhimosti-krasnodar/">наша компания</a> неустанно развивается, расширяет географию и сеть офисов, поэтому без новых сотрудников не обойтись!</p><p>Вакансии риэлторов ищут постоянно, но немногие понимают, что эта работа может стать настоящим прорывом к вершинам. Менеджер по недвижимости — вакантная должность не просто для быстрого заработка, это способ обучиться многому и стать высококвалифицированным специалистом, даже если у вас нет диплома о высшем образовании.</p><p>Агент по недвижимости — это еще юрист, переговорщик, бухгалтер, исследователь, психолог. В "АЯКС" вам будет предоставлена возможность научиться всему: у нас есть собственный обучающий центр.</p><p>Если вы решили кардинально изменить жизнь, звоните или пишите нам прямо сейчас!</p></div>',


        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Работа риэлтором")
        Banner(title="Помоги найти дом мечты!" src="images/realtor-bg.jpg")
        container
            .title
                h2 Работа риэлтором в Краснодаре
            .seo-text( v-html="fetchedText" )
        Profitably(:profitablyItem="profitablyItem" title='Условия работы в агентстве недвижимости "АЯКС"')
        container
            .text.text-center( v-html="fetchedText2" )
        container
            .big-form
                Form(:inputs="inputs" :checkboxes="checkboxes" title="Хочу у вас работать" fileName="resume-upload" subtitle="Отправьте своё резюме, и мы постараемся вам помочь!")
        container
            .film
                .row
                    .col
                        .film-title.title
                            h2 Фильм о работе в компании "АЯКС"
                .row
                    .col
                        .film-box
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/SFjgQ45gFOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>
