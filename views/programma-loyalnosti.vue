<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import Partners from '../components/blocks/partners/partners.vue'


export default {
  name: 'App',
  components: {
    Layout,
    container,
    Breadcrumbs,
    Banner,
    Partners
  },
  data() {
        return {
            partnersItems:[
                {
                    title: 'Ремонт, дизайн',
                    items: [
                        {
                            img: '/images/1.jpg',
                            name: 'Правильные перевозки',
                            tel: '+7 (800) 500-18-90 ',
                            place: 'г. Ульяновск, 2-й переулок Ярославского 9',
                            speacial: 'Транспортно-логистическая компания',
                            href: 'tel:+78005001890',
                            sale: '-12%'
                        },
                        {
                            img: '/images/1.jpg',
                            name: 'Правильные перевозки',
                            tel: '+7 (800) 500-18-90 ',
                            place: 'г. Ульяновск, 2-й переулок Ярославского 9',
                            speacial: 'Транспортно-логистическая компания',
                            href: 'tel:+78005001890',
                            sale: '-12%'
                        },
                        {
                            img: '/images/1.jpg',
                            name: 'Правильные перевозки',
                            tel: '+7 (800) 500-18-90 ',
                            place: 'г. Ульяновск, 2-й переулок Ярославского 9',
                            speacial: 'Транспортно-логистическая компания',
                            href: 'tel:+78005001890',
                            sale: '-12%'
                        },
                    ],
                },
                {
                    title: 'Мебель, сантехника',
                    items: [
                        {
                            img: '/images/1.jpg',
                            name: 'Правильные перевозки',
                            tel: '+7 (800) 500-18-90 ',
                            place: 'г. Ульяновск, 2-й переулок Ярославского 9',
                            speacial: 'Транспортно-логистическая компания',
                            href: 'tel:+78005001890',
                            sale: '-12%'
                        },
                        {
                            img: '/images/1.jpg',
                            name: 'Правильные перевозки',
                            tel: '+7 (800) 500-18-90 ',
                            place: 'г. Ульяновск, 2-й переулок Ярославского 9',
                            speacial: 'Транспортно-логистическая компания',
                            href: 'tel:+78005001890',
                            sale: '-12%'
                        },
                        {
                            img: '/images/1.jpg',
                            name: 'Правильные перевозки',
                            tel: '+7 (800) 500-18-90 ',
                            place: 'г. Ульяновск, 2-й переулок Ярославского 9',
                            speacial: 'Транспортно-логистическая компания',
                            href: 'tel:+78005001890',
                            sale: '-12%'
                        },
                    ],
                }
            ],

            bannerBtns: [
                {
                    path: '/test.pdf',
                    title: "Скачать листовку (PDF 3.1 Мб)"
                }
            ],
            fetchedText: '<div class="seo-text"><p>Когда сделка с недвижимостью уже завершена и есть результат, становятся актуальными вопросы: где купить товары для дома, мебель или как организовать переезд? Для вас мы подобрали надежных партнеров, которым доверяем сами. Наши партнеры - ведущие компании в области строительства, отделки, дизайнерского оформления, грузоперевозок, продажи мебели и товаров для дома, а также обучающие и медицинские центры.</p><p>Скидки и бонусы от наших партнеров доступны каждому клиенту, совершившему сделку в АН «Аякс».</p></div>',
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Программа лояльности")
    Banner(title="Программа лояльности «АЯКС»" src="/images/loyalty-bg.jpg" bannerBlur :bannerBtns="bannerBtns" )
    Partners( :partnersItems="partnersItems")
    container
        .text( v-html="fetchedText" )
</template>
