// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import '@/assets/image/icon/iconfont'
import '@/assets/style/index.scss'
// 表单验证
import VeeValidate from 'vee-validate'
// 消息提示
import VueNotification from 'vue-notification'

Vue.use(VeeValidate).use(VueNotification)

import '@/permission'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
