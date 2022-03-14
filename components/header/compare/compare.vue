
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
        let storage = localStorage.getItem('itemsInCompare') 
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
    a(href="/comparison").header-top--link.icon-compare {{ inStore }}
</template>
