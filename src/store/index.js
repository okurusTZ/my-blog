import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  host: '', // 接口路径
  keywords: '',
  themeObj: 0
}

export default new Vuex.Store({
  state
})