import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {
  specslist,
  specscount,

} from '../../util/request'
const state = {
  list: [],
  /* 请求回来的数据 */
  total: 0,
  /* 请求回来的总数 */
  /* 请求回来的数据 */
  page: 1,

  size: 2,
}
const mutations = {
  changelist(state, arr) {
    state.list = arr
  },
  changeCount(state, num) {
    state.total = num
  },
  changePage(state, page) {
    state.page = page
  }
}
const actions = {
  reqspecslist(context) {
    specslist({
      page:context.state.page,
      size:context.state.size,
    }).then(res => {
      var arrs = res.data.list;
      arrs.forEach(item => {
        item.attrs = JSON.parse(item.attrs)
      });
      context.commit('changelist', res.data.list)
    })
  },
  requestuserCount(context) {
    specscount().then(res => {
      context.commit("changeCount", res.data.list[0].total)
    })
  },
  changeCountPape(context, page) {
    context.commit("changePage", page)
    context.dispatch("reqspecslist")

  }
}
const getters = {
  list(state) {
    return state.list
  },
  total(state) {
    return state.total
  },
  page(state) {
    return state.page
  },
  size(state) {
    return state.size
  }
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
