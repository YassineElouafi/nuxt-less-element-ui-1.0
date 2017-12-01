import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.lang = 'zh-cn'
Vue.locale('zh-cn', zhLocale)
Vue.locale('en', enLocale)
