<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import pagination from '../components/blocks/pagination/pagination'
import Form from '../components/blocks/form/form'
import Reviews from '../components/blocks/reviews/reviews'
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import bannerSelects from '../components/blocks/bannerSelect/bannerSelects.vue'


export default {
  name: 'singleprofile',
  components: {
    Layout,
    pagination,
    Reviews,
    Banner,
    Breadcrumbs,
    Form,
    container,
    bannerSelects,
  },
  props: {
  },
  data() {
        return {
            selectsOffices: ['(Все офисы)', '1','2'],
            selectsPerson: [

                [
                    {
                        label: 'Группа 1',
                        options: ['1', '2', '3']
                    },
                    {
                        label: 'Группа 2',
                        options: ['1', '2', '3']
                    },
                ]
            ],
            offices:  [
                {
                    label: 'Группа 1',
                    options: ['1', '2', '3']
                },
                {
                    label: 'Группа 2',
                    options: ['1', '2', '3']
                }
            ],
            inputs: [
                {
                    name: 'name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'usertext',
                    title: 'Ваш отзыв',
                    inputTextarea: true,
                    required: true

                },
                {
                    name: 'reviewRating',
                    title: 'Оценка',
                    rating: true,
                    required: true

                },
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
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            // selects: [
            //     {
            //         "header": "Besuch auf Betriebsgelände"
            //     },
            //     {
            //         "id": 2,
            //         "name": "Besuch auf Betriebsgelände",
            //         "upper_id": 0
            //     },
            //     {
            //         "id": 7,
            //         "name": "billiger Bauen",
            //         "upper_id": 0
            //     },
            //     {
            //         "header": "bautipps.de"
            //     },
            //     {
            //         "id": 42,
            //         "name": "bautipps.de",
            //         "upper_id": 4
            //     },
            //     {
            //         "header": "Baupraxis"
            //     },
            //     {
            //         "id": 69,
            //         "name": "Baupraxis",
            //         "upper_id": 7
            //     },
            //     {
            //         "id": 16,
            //         "name": "Bellevue",
            //         "upper_id": 7
            //     },
            //     {
            //         "id": 18,
            //         "name": "besser Bauen",
            //         "upper_id": 7
            //     }
            // ],
            selects:   [
                    {
                        label: 'Группа 1',
                        options: ['1', '2', '3']
                    },
                    {
                        label: 'Группа 2',
                        options: ['1', '2', '3']
                    },
                ],
            reviewsItem:[
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
            ],
            fetchedText: '<div class="seo-text"><h2>Отзывы о агентстве недвижимости «АЯКС»: читаем и оставляем свой</h2><p>Если вы хотите поблагодарить или высказаться о том или ином сотруднике&nbsp;агентства недвижимости «АЯКС»,оставьте&nbsp;отзыв, он не останется непрочитанным. За 22 года мы прошли долгий и сложный путь развития исамообразования. Сейчас в Краснодаре открыто 23 офиса по работе с клиентами, в которых&nbsp;за год проводитсяболее 11000 сделок с недвижимостью.</p><p>Есть какие-то пожелания или предложения&nbsp;тоже пишите, мы обязательно примем информацию к сведению – этоважно.</p><p style="text-align: right;"><img width="473" alt="Отзывы о АН Аякс" src="/images/pages/reviews/reviews-page-bg.png"height="605" title="Отзывы о АН Аякс" align="right"><br></p><h2>Где еще можно посмотреть отклики?</h2><p>Мнения клиентов можно увидеть, как на нашем сайте, так и набрав в Яндексе или Гугл "<em>аякс краснодар отзывы</em>". Вы увидите блок, в котором&nbsp;есть оценки каждого офиса и разные сайты, на которых естьоценка работы компании.</p><h2>Почему нужно оставить отзыв</h2><p>Ваши отклики&nbsp;это результат работы нашего агентства недвижимости. На их основе мы делаем аналитику,исправляем ошибки и просто радуемся за тех, кому помогли купить или продать <a title="Каталог жилья от АЯКСА" href="/kupit-zhilye/">жилье в Краснодаре</a>.</p><p>Мы благодарим каждого клиента&nbsp;кто выразил свое мнение о качестве предоставляемых нами услуг.</p></div>',

        }
    },
    mounted() {
//         const data = [
//   {
//     "id": 69,
//     "name": "Baupraxis",
//     "upper_id": 7
//   },
//   {
//     "id": 42,
//     "name": "bautipps.de",
//     "upper_id": 4
//   },
//   {
//     "id": 16,
//     "name": "Bellevue",
//     "upper_id": 7
//   },
//   {
//     "id": 18,
//     "name": "besser Bauen",
//     "upper_id": 7
//   },
//   {
//     "id": 2,
//     "name": "Besuch auf Betriebsgel\u00e4nde",
//     "upper_id": 0
//   },
//   {
//     "id": 7,
//     "name": "billiger Bauen",
//     "upper_id": 0
//   }
// ];

// // Create an intermediate object to hold categories.
// const groups = {};
// // const category = {}
// // category.name = '1'
// // Create array for each group to main subgroup list.
// data.forEach((x) => {
//   // create empty object if it doesn't exists.
//   groups[x.upper_id] = groups[x.upper_id] || { name: x.name, list: [] };

//   groups[x.upper_id].list.push(x);
// });
// console.log(groups)

// // The flattened list of items that holds items as well as unique headers
// const flattened = [];

// // Iterate over all the unique categories and
// // then flatten into a list that v-select needs.
// console.log(groups)
// Object.keys(groups).forEach((categoryId) => {
//   const category = groups[categoryId];
//   const categoryName = category.name;

//   // Create a group
//   flattened.push({ header: categoryName });

//   // Add all the items followed by category header
//   console.log(category.list)
//   flattened.push(...category.list);
// });

// console.log('flattened', flattened)
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Отзывы")
    Banner(src="images/review-bg.jpg")
        bannerSelects(:selects="selects" selected="Выбор офиса" :offices="offices" label="ntss")
    Reviews(:reviewsItem="reviewsItem")
    container
        .text( v-html="fetchedText" )
    container
        .big-form
            Form(:inputs="inputs" :checkboxes="checkboxes" :selects="selects" selectPlaceholder="Выберите сотрудника" title="Отправьте ваш отзыв прямо сейчас")
</template>
