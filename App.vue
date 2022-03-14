<script>
import Layout from "./components/layout/layout";
import container from './components/layout/container'
import Breadcrumbs from './components/blocks/breadcrumbs/breadcrumbs.vue'
import Profitably from './components/blocks/profitably/profitably-tab.vue'
import Consultation from './components/blocks/consultation/consultation.vue'
import News from './components/blocks/news/news.vue'
import ServiceAgency  from './components/blocks/service-agency/service-agency.vue'
import ProductTabs from "./components/blocks/product-tabs/product-tabs"
import FastTags from "./components/blocks/fast-tags/fast-tags.vue"
import Title from './components/layout/title'
import FilterMain  from "./components/blocks/filter/filter.vue"

export default {
    name: 'App',
    components: {
        container,
        Layout,
        Title,
        Breadcrumbs,
        Profitably,
        Consultation,
        News,
        ServiceAgency,
        ProductTabs,
        FastTags,
        FilterMain
    },
    props: {
        title: String,

    },
    data() {
        return {
            tabsProfit: ["Покупка", "Продажа"],
            tabsService: [ "Покупка" ,"Продажа"],
            tabProfit: ["Покупка" ,"Продажа"],
            tabs: ["Покупка", "Оценка", "Юридические вопросы", "Коммерческая недвижимость", "Ипотека"],
            fetchedText: '<div class="seo-text"><h2>Агентство недвижимости «Аякс»</h2><p>Мы – агентство, с которым выгодно продают, совершают обмены, арендуют или&nbsp;покупают недвижимость в Краснодаре и его пригороде. В базе&nbsp;более 10000 объявлений.</p><h3>Мы предлагаем:</h3><ul><li>быстрый подбор до 20&nbsp;предложений;</li><li>купить&nbsp;недвижимость на первичном рынке Краснодара без комиссии;</li><li>помощь в получении ипотеки под низкий %, грамотное использование материнского капитала;</li><li>проверку, оформление документов, оценку, сопровождение;</li><li>объекты от надежных, проверенных партнеров-застройщиков агентства;</li><li>скидки и бонусы от партнеров.</li></ul><h3>Как купить через АН «Аякс»?</h3><p>Всё просто. Шаг №1. Выбираете недвижимость, которую хотите купить,&nbsp;отправляете заявку. Сделать это можно по телефону, в онлайн-чате или отправив запрос в форме обратной связи. Агент&nbsp;перезвонит в течение 30 минут, назначит встречу.</p><p>Шаг №2. После подбора&nbsp;вариантов, осмотра на месте, выбора и достижения договоренности по цене,&nbsp;составляем&nbsp;документацию. Юристы&nbsp;ответят на вопросы.</p><p>Шаг №3. Сделка. После этапов подготовки остается только подписать договор с владельцем, провести оплату и забрать ключи.</p><p>Сделку вы можете заключить сами или, заказать&nbsp;в агентстве&nbsp;услугу "под ключ".</p><h2>Продаёте? Поможем решить задачу</h2><p>Сайт компании посещают более 180 000 пользователей за квартал. Эти люди интересуются недвижимым имуществом в самом городе, пригороде.</p><p>Что требуется для продажи:</p><ul><li>по запросу предоставить всю документацию;</li><li>предоставить доступ оценщику для осмотра&nbsp;(проводится бесплатно);</li><li>указать цену.</li></ul><p>После этого менеджеры проверят информацию. Пробьют документы и она будет выставлена на продажу. Отвечать на входящие звонки по объявлению будут наши специалисты.</p><p>Как видите, схема работы прозрачна. Нет никаких скрытых комиссий за квадратные метры покупаемые или продаваемые через агентство недвижимости в Краснодаре «Аякс», процесс заточен на получение результата по вашим условиям.</p>                                </div>',

            newsItems:[
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
            ],
            productItems: [ //не больше 8 в каждом!
                {
                    prod: [
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 650 000',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                                photos: [
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                ]
                            },
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 650 000',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар',
                                photos: [
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                ]
                            }
                        ],
                    totalItems: 231,
                    link: '#'
                },
                {
                    prod: [
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 32132',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                                photos: [
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                ],
                                views : 0
                            },
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 123',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар',
                                photos: [
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                    'https://picsum.photos/500',
                                ],
                                views : 0,
                            }
                        ],
                    totalItems: 12333,
                    link: '#'
                }
            ],
            fastTagsItem:[
                {
                    tagTitle: 'Квартиры',
                    tagTitleNum: 213,
                    items: [
                        {
                            title: 'Студии',
                            link: '#',
                            qty: 123
                        },
                        {
                            title: '1 комнатные',
                            link: '#',
                            qty: 333
                        },
                        {
                            title: '2 комнатные',
                            link: '#',
                            qty: 1512
                        },
                        {
                            title: '3 комнатные',
                            link: '#',
                            qty: 311
                        },
                        {
                            title: '4 комнатные',
                            link: '#',
                            qty: 31
                        },
                        {
                            title: 'В новостройке',
                            link: '#',
                            qty: 79
                        },
                    ]
                },
                {
                    tagTitle: 'Квартиры',
                    tagTitleNum: 213,
                    items: [
                        {
                            title: 'Студии',
                            link: '#',
                            qty: 123
                        },
                        {
                            title: '1 комнатные',
                            link: '#',
                            qty: 333
                        },
                        {
                            title: '2 комнатные',
                            link: '#',
                            qty: 1512
                        },
                        {
                            title: '3 комнатные',
                            link: '#',
                            qty: 311
                        },
                        {
                            title: '4 комнатные',
                            link: '#',
                            qty: 31
                        },
                        {
                            title: 'В новостройке',
                            link: '#',
                            qty: 79
                        },
                    ]
                },
            ],
            cartTagItem:[
                {
                    tagTitle: 'Региональное партнерство',
                    img: 'https://www.ayax.ru/local/includes/tpl/images/bg-item-01.jpg'
                },
                {
                    tagTitle: 'Аренда недвижимости',
                    img: 'https://www.ayax.ru/local/includes/tpl/images/bg-item-02.jpg',
                    items: [
                        {
                            title: 'Студии',
                            link: '#',
                            qty: 123
                        },
                        {
                            title: '1 комнатные',
                            link: '#',
                            qty: 333
                        }
                    ]
                }
            ],
            tabsSlider: [
               {
                   slider: [
                        {
                            id: 1,
                            name: 'Екатерина ',
                            position: 'Старший',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 2,
                            name: 'Екатерина ',
                            position: 'Старший ',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 3,
                            name: 'Екатерина',
                            position: 'Старший ',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                    ],
               },
               {
                   slider: [
                        {
                            id: 1,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 2,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 3,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                    ],
               }
            ],
        }
    },
}
</script>

<template lang="pug">
    Layout
        FilterMain(main)
        FastTags(:fastTagsItem="fastTagsItem" :cartTagItem="cartTagItem" title="Недвижимость в Краснодаре от АН Аякс")
        //- Title()
        ProductTabs(title="Лучшие предложения" flatView)
        ServiceAgency( :tabsService="tabsService" title="Услуги агентства")
        Profitably(:tabsProfit="tabsProfit" title="Схема работы" extraClass="section_padding")
        Consultation(:tabs="tabs" :tabsSlider="tabsSlider" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию")
        News(title="Новости агентства")
        container
            .text( v-html="fetchedText" )
</template>
