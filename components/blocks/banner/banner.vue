<template lang="pug">
    section.section.section_banner(:class="classes")
        .banner.banner-default
            .banner-img(:class="noBlur ? 'banner-img-noblur' : ''")
                img(:src="src", :alt="imgAlt || title")
            .title.title_l
                h2 {{title}}
            .banner-text
                p {{ text }}
            template(v-if="bannerBtns")
                .banner-wrap
                    .banner-btn.btn.btn-white(v-for="(item, index) in bannerBtns" :key="index")
                        a(:href="item.path" :class="item.class") {{ item.title }}
            slot

</template>

<script>

export default {
  props: {
      src: String,
      title: String,
      imgAlt: String,
      text: String,
      bannerBtns: Array,
      bannerBlur: Boolean,
      noMargin: Boolean,
      noBlur: Boolean
  },
  data() {
      return {
          classes: ''
      }
  },
  mounted(){
      if(this.bannerBlur) {
          this.classes += "banner-blur "
      }
      if(this.noMargin) {
          this.classes += "m-0 "
      }
  }
}
</script>
