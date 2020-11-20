import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSearchTablePagination from 'el-table-pagination'
import axios from 'axios'

Vue.use(ElSearchTablePagination, {
    axios
})

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

