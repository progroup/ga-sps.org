import VueRouter from 'vue-router'
import Index from '@/views/index'
import Calendar from '@/views/calendar'
import Media from '@/views/media'
import Search from '@/views/search'
import SpfOverview from '@/views/spf-overview'
import Training from '@/views/training'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/calendar',
        component: Calendar
    },
    {
        path: '/media',
        component: Media
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/spf-overview',
        component: SpfOverview
    },
    {
        path: '/training',
        component: Training
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})
