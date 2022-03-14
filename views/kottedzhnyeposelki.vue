<script>
import Layout from "../components/layout/layout";
import KottedzhItem from '../components/blocks/cards/KottedzItem'
import container from '../components/layout/container.vue'
import dimg from '../../assets/images/pages/kupit-zhilye/banner-form.jpg'
import BannerBox from '../components/blocks/banner/bannerBox.vue'
import Form from '../components/blocks/form/form.vue'
import mortgage from '../components/blocks/mortgage/mortgage.vue'
import formSection from '../components/blocks/formSection/formSection.vue'

export default {
  name: 'App',
  components: {
    Layout,
    BannerBox,
    KottedzhItem,
    container,
    mortgage,
    Form,
    formSection
  },
  data() {
      return {
        dimg: dimg,
        cottage: [
            {
                photo: 'https://www.ayax.ru/upload/resize_cache/iblock/c12/379_241_2/c1268a78f95523b733938abda2bc0e07.JPG',
                title: 'Золотой город',
                commission: '0',
                path: '/kottedzhnyeposelki-detail',
                price: 'от 3,1 млн. ₽',
            },
            {
                photo: 'https://www.ayax.ru/upload/resize_cache/iblock/296/379_241_2/2964ed3c43eae6ed141d919dcd74ef94.JPG',
                title: 'Золотой город',
                commission: '0',
                path: '#',
                price: 'от 3,1 млн. ₽',
            },

        ],
        bannerItems: [
            {
                src: '/images/pages/kupit-zhilye/banner-form.jpg',
                imgTitle: '',
                title: 'Коттеджные поселки Краснодара',
                text: 'Забронируй свой дом'
            }
        ],
        inputs: [
            {
                name: 'name',
                title: 'Имя',
                required: true
            },
            {
                name: 'phone',
                title: 'Телефон',
                type: 'number',
                required: true
            },
        ],
        checkboxes: [
            {
                name: 'agree',
                title: 'Даю согласие на обработку персональных данных в соответствии с ',
                link: 'some.com',
                linkText: 'политикой конфиденциальности',
            }
        ],
        mortgageItems:[
            {
                name: 'РАССРОЧКА 0%'
            },
            {
                name: 'ИПОТЕКА ОТ 8,5%'
            },
            {
                name: 'СКИДКИ И БОНУСЫ'
            }
        ],
        formSection:[
            {
                title: 'Получите бесплатную консультацию',
                text: 'Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение.'
            }
        ],
        fetchedText: '<p> Хотите купить жильё в Краснодаре? В этом разделе&nbsp;вы можете посмотреть базу бесплатных объявлений. Перейдя в нужный подраздел, вы найдете недвижимость, которая соответствуют критериям, независимо от того, дома это или&nbsp;квартиры.</p><p> АН «АЯКС» гарантирует актуальность, юридическую чистоту выставленных объектов. Мы поможем с поиском, с проверкой документов, с совершением сделки.</p><p> В самостоятельной покупке жилья нет ничего сложного, но нужно понимать и быть готовым к рискам, которые ожидают будущего владельца на любом из этапов сделки. Решение этих задач лучше поддается риэлторам работающим уже много лет.</p>',

      }
  }
}

</script>

<template lang="pug">
Layout(classes="section_grey")
    BannerBox(:bannerItems="bannerItems" bannerClass="banner-big" breadcrumbTitle="Коттеджные поселки")
        .banner-form
            Form(:inputs="inputs" :checkboxes="checkboxes" horizontal hideRequirementMess)

    section.section.cottage
        .container
            .row
                .col
                    .cottage-mortgage__title.title_m
                        h2 Коттеджные поселки Краснодара
            .row.row-cols-4.g-4
                template(v-for="item in cottage")
                    KottedzhItem(:photo="item.photo"
                                :title="item.title"
                                :commission="item.commission"
                                :path="item.path"
                                :price="item.price")
    mortgage(:mortgageItems="mortgageItems")
    formSection(:formSection="formSection")
    container
        .text(v-html="fetchedText")
</template>
