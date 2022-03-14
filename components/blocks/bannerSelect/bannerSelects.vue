<script>

// import Input from '../form/input/input.vue'
// import "vue-select" from "vue-select";
// import "vue-select/dist/vue-select.css";
// Vue.component("v-select", vSelect);
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';
// import v2 from './v2.vue'


export default {
    components: {
    // vSelect
    // v2
    },
    props: {
        offices: Array,
        selects: Array,
        selected: String,
    },
    data() {
    return {
        selectType: null,
        // options1: [
        //     "value1",
        //     "value2",
        //     "value3"
        // ],
        // options2: [{
        //     text: "name1",
        //     value: "value1"
        // }, {
        //     text: "name2",
        //     value: "value2"
        // }, {
        //     text: "name3",
        //     value: "value3"
        // }],
        options3: [{
            label: "group1",
            options: [{
                text: "name1",
                value: "value1"
            }, {
                text: "name2",
                value: "value2"
            }, {
                text: "name3",
                value: "value3"
            }]
            },
            {
            label: "group2",
            options: [{
                text: "name4",
                value: "value4"
            }, {
                text: "name5",
                value: "value5"
            }, {
                text: "name6",
                value: "value6"
            }]
        }],
        // result1: "",
        // result2: "",
        result3: "",
        showSelect: false,
    }
    },
    mounted(){
        // if(this.selects) {

        // if(typeof this.selects[0] === 'object') {
        //     this.selectType = 'object'
        // } else {
        //     this.selectType = 'string'
        // }

        // console.log(this.selectType, this.selects)
        // }
        // var test =  document.find('.custom-select-item').val()
            // console.log()
        document.querySelectorAll(".custom-select-item").forEach(el => el.addEventListener("click", function() {
            console.log(el.textContent);
            document.querySelector('.custom-select__span').innerHTML = el.textContent;
        }));

    },
    methods: {
        changeReviewPerson(id) {
            $('.select-mask').val(id).trigger('change');

        },


    },


}


</script>

<template lang="pug">
form.form-banner-select.flex.form-banner-select_reviews(action="")
    //- vue-select(class="vue-select3" name="select3" :options="options3" :model.sync="result3" :searchable="true" language="en-US")
    //- vSelect(:options="options3" v-model="result3" :searchable="true" :clearable="false")
    v-select(:options="offices" :clearable="false")
    <select class="select-mask" value="1">
        <option selected>(Выбор офиса)</option>
        <slot v-for="(item, i) in options3">
            <optgroup :key="i" v-if="item.options" :label="item.label">
                <option v-for="(subItem, i) in item.options" :key="i" :ref="'selectItem' + i" :value="subItem.value">{{ subItem.text }}</option>
            </optgroup>
            //- <option :key="i" v-if="!item.options" :value="item.label"> {{ item.label }} </option>
        </slot>

    </select>
    .custom-select__name(v-bind:class="{ active: showSelect }" v-on:click="showSelect = !showSelect")
        span.custom-select__span (Все агенты)
        span.custom-select__svg
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator"><path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path></svg>
        .custom-select
            <slot v-for="(item, i) in options3">
                .custom-select-group(:key="i" v-if="item.options")
                    p {{ item.label }}
                    span.custom-select-item(v-for="(subItem, i) in item.options" :key="i" :value="subItem.value" @click="changeReviewPerson(subItem.value)" ) {{ subItem.text }}
            </slot>
    <div class="form-submit btn-default"><input type="submit" value="Искать"></div>
    //- <v2 :options="options3" v-model="selected" name="test">
    //-     <option disabled value="0">Select one</option>
    //- </v2>
</template>
