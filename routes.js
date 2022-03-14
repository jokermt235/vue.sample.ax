const routeOptions = [
    {
        name: 'Недвижимость',
        path: '/kupitzhilye',
        items: [
            {
                path: '/apartments',
                name: 'Квартиры',
                classes: 'header-icons-additional ',
                icon: 'kvartiry',
            },
            {
                path: '/snyatzhilye',
                name: 'Аренда недвижимости',
                classes: 'header-icons-additional ',
                icon: 'kvartiry',
                items: [
                    {
                        name: 'Подпункт',
                        path: '#path'
                    },
                    {
                        name: 'Подпункт',
                        path: '#path'
                    },
                    {
                        name: 'Подпункт',
                        path: '#path'
                    },
                ]
            },
            {
                path: '/kottedzhnyeposelki',
                icon: 'kottedzh',
                name: 'Коттеджные посёлки',
            }
        ]
    },
    {
        name: 'Услуги',
        path : '',
        items: [
            {
                path: '/rieltorskie-uslugi',
                icon: 'rieltor',
                name: 'Риэлторские услуги'
            },
            {
                path: '/prodat-nedvizhimost',
                icon: 'prodatnedvizhimost',
                name: 'Продать недвижимость'
            },
            {
                path: '/ipoteka-krasnodare',
                icon: 'ipotekakrasnodare',
                name: 'Сопровождение ипотеки'
            },
            {
                path: '/yuridicheskie-uslugi-krasnodare',
                icon: 'yuridicheskieuslugi',
                name: 'Юридические услуги',
            },
            {
                path: '/otsenka-krasnodare',
                icon: 'otsenkakrasnodare',
                name: 'Оценка',
            }
        ]
    },
    {
        name: 'Клиентам',
        path : '',
        items: [
            {
                path: '/skidki-nedvizhimost-krasnodara',
                icon: 'skidkinedvizhimost',
                name: 'Акции',
            },
            {
                path: '/programma-loyalnosti',
                icon: 'programmaloyalnosti',
                name: 'Программа лояльности',
            },
            {
                path: '/kachestvo-obsluzhivaniya-klientov-krasnodare',
                icon: 'kontrolkachestvo',
                name: 'Контроль качества',
            },
            {
                path: '/obrabotka-personalnyh-dannyh',
                icon: 'obrabotkapersonalnyhdannyh',
                name: 'Обработка персональных данных'
            },
            {
                path: '/karta-rayonov-krasnodara',
                icon: 'kartarayonovkrasnodara',
                name: 'Карта районов Краснодара',
            },
            {
                path: '/vopros-otvet',
                icon: 'voprosotvet',
                name: 'Вопрос - ответ'

            }
        ]
    },
    {
        name: 'Карьера',
        path : '',
        items: [
            {
                path: '/vakansii-nedvizhimosti-krasnodara',
                icon: 'vakansiinedvizhimosti',
                name: 'Вакансии'
            },
            {
                path: '/rabota-rieltorom-krasnodare',
                icon: 'rabotarieltorom',
                name: 'Работа риэлтором'
            },
            {
                path: '/obuchenie-rieltorov-krasnodare',
                icon: 'obuchenierieltorov',
                name: 'Обучение'
            },
            {
                path: '/istorii-uspekha',
                icon: 'istoriiuspekha',
                name: 'Истории успеха                '
            },
            {
                path: '/istorii-vozvrashcheniya',
                icon: 'istoriivozvrashcheniya',
                name: 'Истории возвращения'
            },
        ]
    },
    {
        name: 'О Компании',
        path : '',
        items: [
            {
                name: 'История компании',
                icon: 'about',
                path: '/agentstvo-nedvizhimosti-krasnodar'
            },
            {
                path: '/novosti-nedvizhimosti-krasnodara',
                icon: 'newsnedvizhimost',
                name: 'Новости'
            },
            // {
            //     path: '/poleznyestati',
            //     icon: 'poleznyestati',
            //     name: 'Полезные статьи'
            // },
            {
                path: '/stati',
                icon: 'poleznyestati',
                name: 'Полезные статьи'
            },
            {
                path: '/rieltory-krasnodara',
                icon: 'rieltors',
                name: 'Риэлторы'
            },
            {
                path: '/sotrudniki',
                icon: 'sotrudniki',
                name: 'Сотрудники'
            },
            {
                path: '/otzyvy-ayaks-rielt-krasnodar',
                icon: 'reviews',
                name: 'Отзывы о нашей работе'
            },
            {
                path: '/partnery-kompanii-nedvizhimosti-krasnodara',
                icon: 'partners',
                name: 'Партнёры'
            },
            {
                path: '/sertifikaty-agentstva-nedvizhimosti-krasnodara',
                icon: 'sertificates',
                name: 'Сертификаты и награды'
            },
            {
                path: '/partnerstvo-agentstvom-nedvizhimosti-krasnodara',
                icon: 'agenstva',
                name: 'Региональное партнёрство'
            },
            {
                path: '/standards-of-ethics',
                icon: 'standarts',
                name: 'Стандарты этики и взаимодействия'
            }
        ]
    },
    {
        name: 'Контакты',
        path: '/kontakty',
    }

];

export default routeOptions
