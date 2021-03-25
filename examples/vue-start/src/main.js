import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

// 加载自定义 icons 列表
import createSvgIcon from "come-svg/src/for-vue-jsx"
import icons from "come-svg/src/icons"

app.component('svg-icon', createSvgIcon(icons))

// 使用默认 icons 列表
// import SvgIcon from "come-svg/src/for-vue.vue"
// app.component('svg-icon', SvgIcon)

app.mount('#app')
