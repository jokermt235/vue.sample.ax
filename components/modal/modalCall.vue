<script> 
import Modal from './modal.vue'
import Form from '../../components/blocks/form/form.vue'
 

export default { 
    props: {
        callShow: Boolean,
        title: String
    },
    components: { 
        Modal,
        Form
    }, 
    data() {
        return {
            callInputs: [
                {
                    name: 'call-name',
                    title: 'Ваше имя ',
                    required: true,
                    type: 'text'
                },
                {
                    name: 'call-tel',
                    title: 'Номер телефона ',
                    type: 'text',
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
        }
    }, 
    methods: { 
        onCall: function () {
            // this.callShow = false;
            this.$emit('toggleModalCall')
        }
    }, 
}
 
 
</script> 

<template lang="pug">
Modal(:visible="callShow" @toggleModal="onCall" :title="title" )
    Form(:inputs="callInputs" :checkboxes="checkboxes" horizontal modal) 
</template>