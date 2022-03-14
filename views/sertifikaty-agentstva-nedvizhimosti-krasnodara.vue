<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

// import fancyBox from 'vue-fancybox';
export default {
  name: 'sertificates',
  components: {
    Layout,
    Banner,
    // fancyBox,
    Breadcrumbs,
    container,
  },
  props: {
  },
  data() {
    return {
      galleries: [
          {
            title: 'Сертификаты',
            imageList: [
              {title: '1Свидетельство от Кубанской Палаты Недвижимости', images: [{w: 1200,h: 900, src: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG', thumbnail: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG' }]},
              {title: '2Свидетельство от Кубанской Палаты Недвижимости', images: [{w: 1200,h: 900, src: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG', thumbnail: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG' }]},
              {title: '3Свидетельство от Кубанской Палаты Недвижимости', images: [{w: 1200,h: 900, src: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG', thumbnail: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG' }]},
              {title: '4Свидетельство от Кубанской Палаты Недвижимости', images: [{w: 1200,h: 900, src: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG', thumbnail: 'https://www.ayax.ru/upload/resize_cache/iblock/c40/268_378_1/c409aa03fc379c8b20a19ba7ab7165cb.jpg' }]},
              {title: '5Свидетельство от Кубанской Палаты Недвижимости', images: [{w: 1200,h: 900, src: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG', thumbnail: 'https://www.ayax.ru/upload/resize_cache/iblock/f85/800_487_1/f858583974e2ae39018b88612e260030.JPG'}] }
            ]
          }
        ],
        fetchedText: '<div class="seo-text"><p>Сертификаты для <a title="Информация об агентстве недвижимости &quot;АЯКС-Риэлт&quot;" href="/agentstvo-nedvizhimosti-krasnodar/">агентств недвижимости</a>&nbsp;имеют огромное значение. В городе работают не менее 3 000 риэлторов, на рынке представлены более 100 профильных компаний, потому выбирать нужно тщательно. А различные сертификаты и награды позволяют определить самых надежных представителей отрасли. У "АЯКС-Риэлт" сейчас уже свыше 30 различных дипломов, свидетельствующих о высокой квалификации персонала компании, прекрасной динамике развития бизнеса, активном участии в развитии и совершенствовании сектора риэлторских сервисов.</p><p>Будучи членом ТПП Краснодарского края, Российской Гильдии Риэлторов и других профорганизаций, сервис недвижимости "АЯКС" не только помогает развивать рынок недвижимости, но еще регулярно участвует в конференциях и форумах, получая доступ к наиболее современным инструментам и технологиям работы.</p><p>Наше агентство уже много раз становилось отраслевым лидером по различным показателям. Сервис недвижимости "АЯКС" неоднократно признавали лучшей брокерской компанией юга России и даже страны, а также отмечали в числе лучших работодателей Кубани. Основатель и руководитель "АЯКСа" Александр Кутченко также получил десятки разных дипломов и благодарственных писем от крупных компаний и профорганизаций. Кроме того, сайт ayax.ru назвали лучшим среди сетевых ресурсов региональных агентств недвижимости. На этой страничке вы можете ознакомиться с подробным перечнем наших достижений.</p></div>',
      //   items: [{
      //     src: 'http://via.placeholder.com/600x400',
      //     thumbnail: 'http://via.placeholder.com/64x64',
      //     w: 600,
      //     h: 400,
      //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      //   },
      //   {
      //     src: 'http://via.placeholder.com/1200x900',
      //     thumbnail: 'http://via.placeholder.com/64x64',
      //     w: 1200,
      //     h: 900
      //   }
      // ]
    }
  },
    // methods: {
    //     open (e) {
    //   fancyBox(e.target, this.imageList);
    // }
    // }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Сертификаты и награды")
    Banner(title="Сертификаты и награды" src="images/certificates-bg.jpg")
    container
        .title
            h2 Сертификаты и награды "АЯКС"

        template(v-for="gallery in galleries")
            .gallery.row.gy-4
            h2.gallery--title {{ gallery.title }}
            .col-12.col-md-4.col-lg-3(v-for="(item, index) in gallery.imageList" :key="index")
                vue-picture-swipe(:items="item.images")
                p {{ item.title }}
    container
        .text( v-html="fetchedText" )
</template>
