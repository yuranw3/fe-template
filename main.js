import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import 'babel-polyfill'

{{#if isElement}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ElementUI, { locale })
{{/if}}

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/assets/iconfont/iconfont.css'
import '@/permission' // permission control

{{#if multi}}
const multi = true
{{/if}}
{{#if stor}}
import $QStor from '@/utils/QingStor'
window.$QStor = $QStor
window.$QStor.storConfig = {
   host: {{storConfig.host}},
   port: {{storConfig.port}},
   protocol: {{storConfig.protocol}},
   access_key_id: {{storConfig.access_key_id}},
   secret_access_key: {{storConfig.secret_access_key}},
   bucket: {{storConfig.bucket}},
   zone: {{storConfig.zone}}
}
{{/if}}
{{#if openapi}}
const openAPI = true
{{/if}}
{{#if editor}}
const editor = true
{{/if}}


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
