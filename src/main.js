import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from "uview-ui"
Vue.use(uView)

// 时间格式化
import moment from 'moment'
moment.locale('zh-CN')
Vue.prototype.$moment = moment
// 移动端调试
import Vconsole from 'vconsole'
let vConsole = new Vconsole()
Vue.use(vConsole)
// 复制粘贴
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

const app = new Vue({
	store,
	...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/utils/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/utils/http.api.js'
Vue.use(httpApi, app)

app.$mount()
