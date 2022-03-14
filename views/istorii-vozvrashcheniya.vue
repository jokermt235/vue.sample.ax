<script> 
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import specialistHistory from "../components/blocks/return/return.vue" 
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
  name: 'App',
  components: {
    Layout, 
    Banner,
    Banner,
    container,
    Breadcrumbs,
    specialistHistory,
  },
  data() {
        return {
            returnItems: [
                {
                    image: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Акулов Владимир Геннадьевич',
                    skill: 'Эксперт',
                    text: '<p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p><p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p>'
                },
                {
                    image: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Акулов Владимир Геннадьевич',
                    skill: 'Эксперт',
                    text: '<p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p><p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p>'
                }
            ],
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Истории возвращения")
    Banner(title="Истории возвращения" src="images/success-bg.jpg")
    container
        .specialist-history
            .row
                .col
                    .specialist-history--title.title
                        h2 Истории возвращения сотрудников в компанию
        specialistHistory(:returnItems="returnItems")
</template>