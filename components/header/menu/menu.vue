<script> 
import routes from '../../../routes.js'

export default {
    data() {
    return {
        routes,
        location: '/' + window.location.pathname.split('/').reverse()[0], 
    }
  }, 
}  

</script>


<template lang="pug">

    ul.menu
        li.menu-list(v-for="item in routes" )
            a(:href="item.path" :class="location === item.path ?' active' : ''" ) {{ item.name }} 
            template(v-if="item.items")
                ul.submenu
                    li.submenu-title-mob Недвижимость 
                    li.submenu-list(v-for="firstSub in item.items" )
                        //- template(v-if="location === item.path ? item.classes += ' active' : ''")
                        a(:href="firstSub.path" :data-nav-icon="firstSub.icon" :class=" 'submenu-link ' + firstSub.classes + (location === firstSub.path ? item.classes += ' active' : '')") {{ firstSub.name }}  
                        template(v-if="firstSub.items")
                            span.sumbenu--arrow 
                            ul.submenu-sub
                                li.submenu-item(v-for="itemsub in firstSub.items")
                                    a(:href="itemsub.path" :class="location === itemsub.path ?' active' : ''" ) {{ itemsub.name }} 
</template>