<script>
import Menu from './menu/menu.vue'
import Modal from '../modal/modal.vue'
import Form from '../../components/blocks/form/form.vue'
import logo from '/images/ayax/ayax-logo.svg'
import Favorite from './favorite/favorite'
import Compare from './compare/compare'

export default {
    components: {
        Menu,
        Modal,
        Favorite,
        Compare,
        Form
    },
    data: function(){
        return{
            showMobileMenu: false,
            subscribeShow: false,
            loginShow: false,
            logo: logo,
            subscribeInputs: [
                {
                    name: 'modal-name',
                    title: 'Имя',
                },
                {
                    name: 'modal-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                }
            ],
            subscribeCheckboxes: [
                {
                    name: 'modal-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            loginInputs: [
                {
                    name: 'modal-name',
                    title: 'Ваш E-mail ',
                    required: true,
                    type: 'email'
                },
                {
                    name: 'login-pass',
                    title: 'Пароль ',
                    type: 'password',
                    required: true
                },
            ]
        }


    },
    methods: {
        onSubscribe: function () {
            this.subscribeShow = !this.subscribeShow;
        },
        onLogin: function () {
            this.loginShow = !this.loginShow;
        },
    }

}

</script>

<template lang="pug">
    header.header
        .header-top
            .container
                .header-top-links.flex
                    span.header-top--link.icon-subscribe(v-on:click="onSubscribe") Подписаться на рассылку
                    Favorite
                    Compare
                    span.header-top--link.icon-login(v-on:click="onLogin") Вход / Регистрация
        .header-content(v-bind:class="{ active: showMobileMenu }")
            .container
                .flex.align-items-center.justify-content-between
                    a(href="/").logo
                        img(:src="logo", alt="АЯКС")

                    Menu

                    .call
                        a(href="#").call--top
                            <i class="my-icon icon-phone"></i>
                            | Позвонить мне
                        a(href="tel:88002345842").call--tel 8 800 23 45 842
                        p.call--time Ежедневно с 08:30 до 21:30
                    .header-mobile
                        a(href="tel:88002345842").call-mob
                            <i class="my-icon icon-phone"></i>
                        a(href="#").favorite-mob
                            <svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"></path></svg>
                        a(href="#").compare-mob
                        .menu-toggle(
                            v-on:click="showMobileMenu = !showMobileMenu"
                            )
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15"><path fill="#000" fill-rule="evenodd" d="M0 0h17v3H0V0zm0 6h17v3H0V6zm0 6h17v3H0v-3z"></path></svg>
                    .menu-mobile
                        .menu-close( v-on:click="showMobileMenu = !showMobileMenu")
                        Menu
                        .mobile-contact
                            p Мы на связи ежедневно
                            span с 8:30 до 21:30
                            a(href="tel:+88002345842") 8 800 23 45 842
                            .mobile-soc.flex
                                a(class="icon-fb" target="_blank" rel="nofollow" href="http://www.facebook.com/pages/Krasnodar/ayax.realty/126461500740230?ref=sgm")
                                a(class="icon-vk" target="_blank" rel="nofollow" href="http://vk.com/ayax.realty")
                                a(class="icon-inst" target="_blank" rel="nofollow" href="https://www.instagram.com/ayax.realty/")

        Modal(:visible="subscribeShow" @toggleModal="onSubscribe"
                title="Подписаться на рассылку"
                description="Подпишитесь на рассылку свежих предложений")
            Form(:inputs="subscribeInputs" :checkboxes="subscribeCheckboxes" modal)
        Modal(:visible="loginShow" @toggleModal="onLogin" title="Вход на сайт" )
            Form(:inputs="loginInputs" modal hideRequirementMess)
            span.modal--link Забыли пароль?
</template>
