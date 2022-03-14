<script>
import container from '../../layout/container'
import Modal from '../../modal/modal.vue'
import Form from '../../blocks/form/form.vue'

export default {
    props: {
        main: Boolean,
        hideMap: {
            type: String,
            default: ''
        },
    },
    components: {
        Modal,
        Form,
        container,
    },
    data() {
        return {
            filterNum: 0,
            isActive: false,
            openedFilter: null,
            subscribeShow: false,
            loginInputs: [
                {
                    name: 'modal-name',
                    title: 'Имя ',
                    type: 'text'
                },
                {
                    name: 'phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
            ],
            subscribeCheckboxes: [
                {
                    name: 'modal-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }
            ],
            filterItems: [],
            filterBoxMore: false,
            openedFilterClass: '',
            activeFilters: ['Город','Район', 'Улица', 'Комнат', 'Стоимость', 'Площадь', 'Этаж', 'Ремонт', 'Балкон', 'Типы комнат', 'Материал стен'],
            fetchedFilters: null,
            staticFilters: null,
            filterText: [],
        }
    },
    methods: {
        onSubscribe() {
            this.subscribeShow = !this.subscribeShow;
        },
        setSelectedNum(indexTop, filter, checked) {
            this.$store.dispatch('realtytab/fetchStreets', {id: filter.id, tab : this.filterNum, filterIndex : indexTop});
            this.filters[this.filterNum].checkedInputs = Object.assign(this.filters[this.filterNum].checkedInputs ,{[this.openedFilter]: checked.target.checked ? +this.filters[this.filterNum].checkedInputs[this.openedFilter] + 1 || 1 : +this.filters[this.filterNum].checkedInputs[this.openedFilter] - 1 })    
        },
        toggleFilter(index, filterName, target) {
            // console.log(index, filterName, target)

            if(target.classList[1] == 'active' || target.parentNode.classList[1] == 'active') { //если клик на сам дропдаун или его детей и дропдаун уже активен
                this.openedFilterClass = '' //скрыть дропдаун
                this.openedFilter = null
            } else {
                this.openedFilter = index
                 if(filterName === 'Район' || filterName ===  'Улица' ) { //если нужн широкий дропдаун
                    this.openedFilterClass = 'active wide'
                } else {
                    this.openedFilterClass = 'active'
                }
            }
        },

        documentClick(e){ //скрыть, если клик вне дропдауна
            let el = this.$refs.filterDropdown[0].className.split(' ')[0]
            // console.log(el)
            let target = e.target
            if ( el != target.classList[0] &&
                 el != target.parentNode.classList[0] &&
                !target.parentNode.classList.contains('custom-checkbox') &&
                !target.parentNode.classList.contains('filter-inputs') &&
                !target.parentNode.classList.contains('filter-list') &&
                !target.parentNode.classList.contains('filter-list-search') ) {
              this.openedFilterClass = ''
            }
        },

        toggleMoreFilters() {
            this.filterBoxMore = !this.filterBoxMore
        },

        changeFilter(index,filterFilters) {
            this.filterNum = index
            this.activeFilters = filterFilters
            this.fetchedFilters = this.filters[index].fetchedFiltersItem
            this.staticFilters = this.filters[index].staticFiltersItem
        },

        navigate(){
            console.log("Navigation button click");
            console.log("Routeer", this.$router);
            this.$router.push({ path: 'apartments' });
        }

    },

    created () {
        document.addEventListener('click', this.documentClick)
    },
    destroyed () {
        document.removeEventListener('click', this.documentClick)
    },
    mounted() {
        this.$store.dispatch('realtytab/fetchRegeons');
        this.$store.dispatch('realtytab/fetchDistricts');
        this.fetchedFilters = this.filters[this.filterNum].fetchedFiltersItem
        this.staticFilters = this.filters[this.filterNum].staticFiltersItem
    },
    computed: {
        filteredItems() {
            return this.fetchedFilters[this.openedFilter]?.filter(c => {
              let filterText = this.filterText[this.openedFilter] ?? '';
               return c.name.toLowerCase().includes(filterText.toLowerCase())
             })

        },
        filters(){
            return this.$store.getters["realtytab/filters"];
        },
    }
}
</script>

<template lang="pug">
    container(:extraClass="main ? 'main-banner' : '' ")
        template(v-if="main")
            .main-title.title
                h1  Поможем <a href="#">продать</a> и купить недвижемость
            .main-banner--img
                img(src="https://www.ayax.ru/images/index-image_new_year.jpg")
        template(v-else)
            h1(style="font-size: 30px") Продажа квартир в Краснодаре
        .col
            .filter-choice(v-if="main")
                template(v-for="(item, index) in filters")
                    .filter-choice--btn(:class="index === filterNum ? 'active' : ''" @click="changeFilter(index, item.filters)")
                        div(v-html="item.image")
                        <span>{{ item.name }}</span>
            .filter
                .filter-box
                    //- template(v-for="(item, index) in activeFilters" v-if="index < 6")
                    template(v-for="(item, indexTop) in activeFilters")
                        .filter-dropdown(:class="item === 'Комнат' || item === 'Стоимость' || item === 'Площадь' || item === 'Типы комнат' || item === 'Материал стен' ? 'filter-dropdown--big' : ''")
                            .filter-name(@click="toggleFilter(indexTop, item, $event.target)" :class="indexTop === openedFilter ? openedFilterClass : ''" ref="filterDropdown")
                                span {{ item }}
                                span.filter-selected(v-if="filters[filterNum].checkedInputs[indexTop]") {{filters[filterNum].checkedInputs[indexTop] }}
                                span.filter-dropdown-arrow
                                    img(src="images/select-drop.svg")

                                //- показывать только нужный дропдаун
                                .filter-list(v-if="indexTop === openedFilter" )
                                    template(v-if="+indexTop < +fetchedFilters.length")
                                        .filter-list-search
                                            input(type="text" placeholder="Введите название" v-model="filterText[openedFilter]")
                                        template(v-for="(filter, index) in filteredItems" )
                                            .filter-checkbox
                                                label.custom-checkbox
                                                    <input type="checkbox"  :name="filter.name"    @change="setSelectedNum(indexTop,filter, $event)">
                                                    <span>{{ filter.name }}</span>
                                    template(v-else)
                                        template(v-for="(filter, index) in staticFilters[index - fetchedFilters.length]")
                                            template(v-if="filter === 'price'")
                                                p стоимость
                                                .filter-inputs
                                                    input(type="text" placeholder="стоимость от" name="filter-price-from")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                            template(v-else-if="filter === 'space'")
                                                p общая
                                                .filter-inputs
                                                    input(type="text" placeholder="общая от" name="filter-space-full")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                                p жилая
                                                .filter-inputs
                                                    input(type="text" placeholder="жилая от" name="filter-space-live")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                                p кухни
                                                .filter-inputs
                                                    input(type="text" placeholder="кухня от" name="filter-space-kitchen")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                            template(v-else-if="filter === 'floor'")
                                                p этаж
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floor-from")
                                                    input(type="text" placeholder="до" name="floor-to")
                                                p этажность
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floorfull-from")
                                                    input(type="text" placeholder="до" name="floorfull-to")
                                            template(v-else)
                                                .filter-checkbox
                                                    label.custom-checkbox
                                                        <input type="checkbox" :value="filter">
                                                        span {{ filter }}
                                            //- template(v-for="(filterItems, index) in filter")
                                                li.filter-checkbox
                                                    label.custom-checkbox
                                                        <input type="checkbox" :value="filter">
                                                        <span>{{ filterItems }}</span>
                .transition-group(v-if="filterBoxMore"  key="2")
                    //- .filter-box.filter-box--more.active
                        template(v-for="(item, index) in staticFilters" )
                            .filter-dropdown( :key="index+6")
                                .filter-name(@click="toggleFilter(index+6, item, $event.target)" :class="index+6 === openedFilter ? openedFilterClass : ''" ref="filterDropdown")
                                    span {{ activeFilters[index+6] }}
                                    span.filter-dropdown-arrow
                                        img(src="images/select-drop.svg")
                                    ul.filter-list
                                        template(v-for="(filter, index) in item+6")
                                            li.filter-checkbox
                                                label.custom-checkbox
                                                    <input type="checkbox" :value="filter">
                                                    <span>{{ filter }}</span>

                    .filter-box.filter-box--check(key="1")
                        .filter-check--box
                            .filter-check--btn
                                <label>
                                    <div class="checkbox">
                                        <input type="checkbox">
                                        <span class="checkbox-text">Вторичка</span>
                                    </div>

                                </label>
                            .filter-check--btn
                                <label>
                                    <div class="checkbox">
                                        <input type="checkbox">
                                        <span class="checkbox-text">В новостройке</span>
                                    </div>
                                </label>
                            .filter-check--btn
                                <label>
                                    <div class="checkbox">
                                        <input type="checkbox">
                                        <span class="checkbox-text">Первичка</span>
                                    </div>

                                </label>
                        .filter-check--box
                            .filter-main--check
                                label.custom-checkbox
                                    <input type="checkbox" :value="filter" :name="filter">
                                    <span>Ипотека</span>
                            .filter-main--check
                                label.custom-checkbox
                                    <input type="checkbox" :value="filter" :name="filter">
                                    <span>В стряищихся домах</span>

                .filter-main
                    .filter-main--left
                        .filter-main--check
                            <label>
                                <div class="checkbox">
                                    <input type="checkbox">
                                        <span></span>
                                </div>
                                <span class="checkbox-text">продается только в АЯКС</span>
                            </label>
                    .filter-main--right
                        .filter-main--check
                            <label>
                                <div class="checkbox">
                                    <input type="checkbox">
                                        <span></span>
                                </div>
                                <span class="checkbox-text">продается только в АЯКС</span>
                            </label>
                        .filter-main--more(@click="toggleMoreFilters")
                            span
                                img(src="images/select-drop.svg")
                            span Расширенный поиск
                        .filter-main--map
                            span
                                img(src="images/point.svg")
                            span Показать на карте
                        .fitler-main--btn(@click="navigate")
                            button.btn.btn-default Показать
        template(v-if="main")
            .col-12
                a.best-reward(href="/novosti-nedvizhimosti-krasnodara/ayaks-poluchil-4-nagrady-na-mezhdunarodnom-kongresse-po-nedvizhimosti/")
                    .best-reward--img
                        img(src="https://www.ayax.ru/images/prise.svg")
                    .best-reward--text Лучшая региональная риэлторская компания
                .btn-banner-main.btn-default(v-on:click="onSubscribe")
                    span Запись на онлайн-консультацию

            Modal(:visible="subscribeShow" @toggleModal="onSubscribe" title="Запись на онлайн-консультацию" )
                Form(:inputs="loginInputs" :checkboxes="subscribeCheckboxes" modal horizontal subtitle=" Попробуйте онлайн-консультацию в деле!&nbsp;<br>Получите ответы на любые вопросы, связанные с недвижимостью.<br>Оставьте заявку, наш специалист свяжется с вами и согласует удобное для вас время." )
</template>