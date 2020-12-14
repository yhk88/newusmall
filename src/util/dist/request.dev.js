"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goodsdelete = exports.goodsedit = exports.goodsinfo = exports.goodslist = exports.goodscount = exports.goodsadd = exports.specsdelete = exports.specsedit = exports.specsinfo = exports.specslist = exports.specscount = exports.specsadd = exports.cateeDit = exports.cateDelete = exports.reqCateinfo = exports.reqCatelist = exports.reqCateadd = exports.requserlogin = exports.requsercount = exports.requseRedite = exports.requserinfo = exports.requserDelete = exports.requserList = exports.userAdd = exports.roleDelete = exports.reqUseredit = exports.reqRoleinfo = exports.reqRolelist = exports.reqRoleAdd = exports.reqMenuLisDel = exports.reqMenuListwo = exports.reqMenuListOne = exports.reqMenuList = exports.reqmenuAdd = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 发送ajax请求获取数据
var baseUrl = '/api';

_axios["default"].interceptors.response.use(function (res) {
  console.log('====请求路径:' + res.config.url + '======');
  console.log(res);
  return res;
}); // 拦截器


var reqmenuAdd = function reqmenuAdd(data) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menuadd',
    method: 'post',
    data: data
  });
};

exports.reqmenuAdd = reqmenuAdd;

var reqMenuList = function reqMenuList(data) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menulist',
    method: 'get',
    params: data
  });
};

exports.reqMenuList = reqMenuList;

var reqMenuListOne = function reqMenuListOne(data) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menuinfo',
    method: 'get',
    params: data
  });
};

exports.reqMenuListOne = reqMenuListOne;

var reqMenuListwo = function reqMenuListwo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menuedit",
    method: 'post',
    data: data
  });
}; // 菜单删除


exports.reqMenuListwo = reqMenuListwo;

var reqMenuLisDel = function reqMenuLisDel(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menudelete",
    method: 'post',
    data: data
  });
}; ////////////////////////////////////////////////////////////////////////////////   
// 角色添加


exports.reqMenuLisDel = reqMenuLisDel;

var reqRoleAdd = function reqRoleAdd(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleadd",
    method: 'post',
    data: data
  });
}; // 角色列表


exports.reqRoleAdd = reqRoleAdd;

var reqRolelist = function reqRolelist() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/rolelist",
    method: 'get'
  });
}; // 角色的一条数据


exports.reqRolelist = reqRolelist;

var reqRoleinfo = function reqRoleinfo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleinfo",
    method: 'get',
    params: data
  });
}; // 角色修改


exports.reqRoleinfo = reqRoleinfo;

var reqUseredit = function reqUseredit(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleedit",
    method: 'post',
    data: data
  });
}; // 角色删除


exports.reqUseredit = reqUseredit;

var roleDelete = function roleDelete(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roledelete",
    method: 'post',
    data: data
  });
}; ////////////////////////////////管理员
// 管理员管理


exports.roleDelete = roleDelete;

var userAdd = function userAdd(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/useradd",
    method: 'post',
    data: data
  });
}; // 管理员列表


exports.userAdd = userAdd;

var requserList = function requserList(params) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userlist",
    method: 'get',
    params: params
  });
}; // 管理员删除


exports.requserList = requserList;

var requserDelete = function requserDelete(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userdelete",
    method: 'post',
    data: data
  });
}; // 管理员编辑获取一条数据


exports.requserDelete = requserDelete;

var requserinfo = function requserinfo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userinfo",
    method: 'get',
    params: data
  });
}; // 管理员编辑


exports.requserinfo = requserinfo;

var requseRedite = function requseRedite(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/useredit",
    method: 'post',
    data: id
  });
}; // 管理员总数


exports.requseRedite = requseRedite;

var requsercount = function requsercount(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/usercount",
    method: 'get'
  });
}; // 管理员登录


exports.requsercount = requsercount;

var requserlogin = function requserlogin(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userlogin",
    method: 'post',
    data: data
  });
}; // ////////////////////////////////////////////////////
// 商品分类添加


exports.requserlogin = requserlogin;

var reqCateadd = function reqCateadd(data) {
  var form = new FormData();

  for (var i in data) {
    form.append(i, data[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/cateadd",
    method: 'post',
    data: form
  });
}; // 商品分类列表


exports.reqCateadd = reqCateadd;

var reqCatelist = function reqCatelist(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/catelist",
    method: 'get',
    params: data
  });
}; // 商品分类列表获取一条


exports.reqCatelist = reqCatelist;

var reqCateinfo = function reqCateinfo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/cateinfo",
    method: 'get',
    params: data
  });
}; // 商品分类删除


exports.reqCateinfo = reqCateinfo;

var cateDelete = function cateDelete(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/catedelete",
    method: 'post',
    data: id
  });
}; // 商品分类修改


exports.cateDelete = cateDelete;

var cateeDit = function cateeDit(data) {
  var form = new FormData();

  for (var i in data) {
    form.append(i, data[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/cateedit",
    method: 'post',
    data: form
  });
}; // ///////////////////////////////////////////
// 商品规格


exports.cateeDit = cateeDit;

var specsadd = function specsadd(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsadd",
    method: 'post',
    data: data
  });
}; // 商品规格总数


exports.specsadd = specsadd;

var specscount = function specscount() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specscount",
    method: 'get'
  });
}; // 商品规格列表


exports.specscount = specscount;

var specslist = function specslist(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specslist",
    method: 'get',
    params: data
  });
}; // 商品规格获取（一条）


exports.specslist = specslist;

var specsinfo = function specsinfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsinfo",
    method: 'get',
    params: id
  });
}; // 商品规格修改


exports.specsinfo = specsinfo;

var specsedit = function specsedit(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsedit",
    method: 'post',
    data: data
  });
}; // 商品规格删除


exports.specsedit = specsedit;

var specsdelete = function specsdelete(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsdelete",
    method: 'post',
    data: id
  });
}; // ///////////////////////////////////////////
// 商品添加


exports.specsdelete = specsdelete;

var goodsadd = function goodsadd(data) {
  var form = new FormData();

  for (var i in data) {
    form.append(i, data[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/goodsadd",
    method: 'post',
    data: form
  });
}; // 商品总数


exports.goodsadd = goodsadd;

var goodscount = function goodscount() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/goodscount",
    method: 'get'
  });
}; //商品列表（分页） 


exports.goodscount = goodscount;

var goodslist = function goodslist(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/goodslist",
    method: 'get',
    params: data
  });
}; //商品获取（一条）


exports.goodslist = goodslist;

var goodsinfo = function goodsinfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "goodsinfo",
    method: 'get',
    params: id
  });
}; //商品修改


exports.goodsinfo = goodsinfo;

var goodsedit = function goodsedit(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/goodsedit",
    method: 'post',
    data: data
  });
}; //商品删除


exports.goodsedit = goodsedit;

var goodsdelete = function goodsdelete(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/goodsdelete",
    method: 'post',
    data: id
  });
};

exports.goodsdelete = goodsdelete;