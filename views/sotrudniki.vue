<script>
import benefitCard from '../components/blocks/internal-brokery/internal-brokery'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import bannerSelect from '../components/blocks/bannerSelect/bannerSelect.vue'
const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};
export default {
  name: 'App',
  components: {
    Layout,
    Banner,
    benefitCard,
    Breadcrumbs,
    container,
    bannerSelect,
  },
  data() {
        return {
            selects: ['Все сотрудники', '1','2'],
            internalCardItems: [
                {
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    personLink: 'person-link',
                    postLink: 'postLink',
                    postLinkText: 'Офис',
                }

            ],
            input: {
                name: 'search-rieltor',
                title: 'Фамилия или имя',
                required: true,
            },
            pageOfItems: this.internalCardItems,
            customLabels,
        }
    },

    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Сотрудники ")
        Banner( src="images/employee-bg.jpg")
            bannerSelect(:selects="selects" :input="input" selected="Все сотрудники")
        benefitCard( :internalBrokery="pageOfItems" title="Сотрудники агентства")
        jw-pagination(:items="internalCardItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
</template>
