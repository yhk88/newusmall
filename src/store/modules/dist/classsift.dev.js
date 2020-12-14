"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _request = require("../../util/request");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var state = {
  list: []
  /* 请求回来的数据 */

};
var mutations = {
  changelist: function changelist(state, arr) {
    state.list = arr;
  }
};
var actions = {
  requseCatelist: function requseCatelist(context) {
    (0, _request.reqCatelist)({
      istree: true
    }).then(function (res) {
      context.commit('changelist', res.data.list);
    });
  }
};
var getters = {
  list: function list(state) {
    return state.list;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  namespaced: true
};
exports["default"] = _default;