<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import BlogItem from '../components/blocks/blogItem/blogItem'
import BlogFrom from '../components/blocks/blogBanner/blogBanner'
import BlogSoc from '../components/blocks/blogSoc/blogSoc'
import articleblogNav from '../components/blocks/articleblogNav/articleblogNav.vue'
import jwCustom from '../components/jwpagination/jw-custom'





const items = [
    {
        blogDay:  '1',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '2',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '3',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '4',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '5',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '6',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '7',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '8',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },{
        blogDay:  '9',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '10',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '11',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '12',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '13',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '15',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '16',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '17',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '18',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '19',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '20',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '21',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '22',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '23',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '24',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '25',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '26',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '27',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '28',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '29',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '30',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '31',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '32',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '1',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '2',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '3',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '4',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '5',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '6',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '7',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '8',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },{
        blogDay:  '9',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '10',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '11',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '12',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '13',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '15',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '16',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '17',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '18',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '19',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '20',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '21',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '22',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '23',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '24',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '25',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '26',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '27',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '28',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '29',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '30',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '31',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '32',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    
]
const perPage = 4

const customStyles = { 
    a: {
        display: 'flex',
        alignItems: 'center',
        padding: '0'
    }
};

const customLabels = {
    first: '1',
    last: (items.length / perPage).toFixed(),
    previous: '<',
    next: '>'
};

export default {
    name: 'App',
    props: {
    },
    components: {
        container,
        Layout,
        Breadcrumbs,
        articleblogNav,
        BlogItem,
        BlogFrom,
        BlogSoc,
        jwCustom
    },
    data() {
        return {
            customStyles,
            perPage,
            items,
            loadMoreActive: true,
            loadedMore: [],
            pageOfItems: items,
            customLabels,
            blockShare: {
                times: 3,
            },
            blockSubscribe: {
                times: 3,
            },
            // blogItems: ,
            fetchedText: '<p>Хотите купить квартиру в Краснодаре? В базе агентства Аякс подобраны только реальные объявления. Цены от&nbsp;<b>300 000</b>&nbsp;до&nbsp;<b>60 000 000</b>&nbsp;рублей. Средняя стоимость метра&nbsp;<b>75 329</b>&nbsp;руб.&nbsp; Есть квартиры площадью до&nbsp;<b>371</b>&nbsp;м². Лучшие предложения по Краснодару с адресами, фото, планировками и ценами. <b>Гарантируем юридическую безопасность сделки</b>.</p>',
        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.loadedMore = []
            const paginItems = document.querySelectorAll('.page-item.active')
            Array.prototype.forEach.call(paginItems, function(el, i){
                el.classList.remove('active')
            }) 

console.log(this)
            this.pageOfItems = pageOfItems;
        },
        loadMore() {
            const allActiveted = document.querySelectorAll('.page-item.active')
            const lastActiveted = allActiveted[allActiveted.length - 1].innerText
            const newLoads = lastActiveted * perPage
            // console.log(newLoads, lastActiveted, perPage, items.length,  allActiveted[allActiveted.length - 1].nextElementSibling)
            const checkDots = allActiveted[allActiveted.length - 1].nextElementSibling.classList.contains('pagination-dots')

            if(newLoads < items.length && !checkDots ) {
                for(var i = newLoads; i < newLoads + perPage; i++) {
                    this.loadedMore.push(items[i])
                }
                allActiveted[allActiveted.length - 1].nextElementSibling.classList.add('active')
            }
            // console.log(newLoads, items.length)
            if(newLoads + perPage + 1 >= items.length || !checkDots) {
                this.loadMoreActive = false
            }

            
            // console.log( document.querySelectorAll('.page-item.active')[document.querySelectorAll('.page-item.active').length - 1].nextElementSibling)

        }
    }

}

</script>

<template lang="pug">
    Layout(classes="nopadding")
        Breadcrumbs
        articleblogNav
        container
            .col
                ul.articleblog-list
                    template(v-for="(item, index) in pageOfItems")
                        //- li.articleblog-item(:class=" index % 4 ? ' articleblog-item--reverse' : ''" v-if="index % 2")
                        BlogItem(classes="articleblog-subitem"  :blogData="item")
                            //- ul.articleblog-sublist
                                BlogItem(classes='articleblog-subitem' :blogData="item")

                        template(v-if="index === 2 ")

                            BlogFrom
                        template(v-if="index === 5")
                            BlogSoc
                    template(v-if="loadedMore.length > 0" v-for="(item, index) in loadedMore")
                        BlogItem(classes="articleblog-subitem"  :blogData="item")

                    //- li.articleblog-item
                    //-     BlogItem(classes='articleblog-box')
                    //-     ul.articleblog-sublist
                    //-         BlogItem(classes='articleblog-subitem')
                    //-         BlogItem(classes='articleblog-subitem')
                    //-         BlogFrom
        jwCustom(:items="items" :styles="customStyles" @changePage="onChangePage" :labels="customLabels" :pageSize="perPage" :maxPages="4" )
        container
            .col
                .btn-readmore(@click="loadMore()" :class="loadMoreActive ? '' : 'disabled'")
                    button Читать больше
</template>
