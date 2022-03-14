<script> 

export default {
    components: {

    },
    data: function(){
        return{
            inStore: 0,
        }
    },
    methods: {
       
    },
    mounted() {
        let storage = localStorage.getItem('itemsInFavorite') 
        let counter = 0; 
        if(storage) {
            storage.split(',').map(item => {
                if(item != '' && item != undefined && item != null) {
                    counter++ 
                }
            }) 
            this.inStore = counter
        }

    }
}

</script>


<template lang="pug">
    a(href="/favorite").header-top--link.icon-favorites {{ inStore }}
</template>
