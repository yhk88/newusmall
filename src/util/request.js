// 发送ajax请求获取数据
import  axios from 'axios'
 import qs from 'qs'
const baseUrl='/api'
axios.interceptors.response.use(res=>{
    console.log('====请求路径:'+res.config.url+'======');
    console.log(res);
    return res
})
// 拦截器

export const reqmenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}
export const reqMenuList=(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
} 
export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
} 
export const reqMenuListwo=(data)=>{
    return axios({
        url:baseUrl+"/api/menuedit",
        method:'post',
        data:data
    })
} 
// 菜单删除
export const reqMenuLisDel=(data)=>{
    return axios({
        url:baseUrl+"/api/menudelete",
        method:'post',
        data:data
    })
} 
////////////////////////////////////////////////////////////////////////////////   
// 角色添加
export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+"/api/roleadd",
        method:'post',
        data:data
    })
} 
// 角色列表
export const reqRolelist=()=>{
    return axios({
        url:baseUrl+"/api/rolelist",
        method:'get'
    })
} 
// 角色的一条数据
export const reqRoleinfo=(data)=>{
    return axios({
        url:baseUrl+"/api/roleinfo",
        method:'get',
        params:data
    })
} 
// 角色修改
export const reqUseredit=(data)=>{
    return axios({
        url:baseUrl+"/api/roleedit",
        method:'post',
        data:data 
    })
} 
// 角色删除
export const roleDelete=(data)=>{
    return axios({
        url:baseUrl+"/api/roledelete",
        method:'post',
        data:data 
    })
} 
////////////////////////////////管理员
// 管理员管理
export const userAdd=(data)=>{
    return axios({
        url:baseUrl+"/api/useradd",
        method:'post',
        data:data 
    })
} 
// 管理员列表

export const requserList=(params)=>{
    return axios({
        url:baseUrl+"/api/userlist",
        method:'get',
        params:params 
    })
}
// 管理员删除
export const requserDelete=(data)=>{
    return axios({
        url:baseUrl+"/api/userdelete",
        method:'post',
        data:data 
    })
}
// 管理员编辑获取一条数据
export const requserinfo=(data)=>{
    return axios({
        url:baseUrl+"/api/userinfo",
        method:'get',
        params:data 
    })
}
// 管理员编辑
export const requseRedite=(id)=>{
    return axios({
        url:baseUrl+"/api/useredit",
        method:'post',
        data:id 
    })
}
// 管理员总数
export const requsercount=(data)=>{
    return axios({
        url:baseUrl+"/api/usercount",
        method:'get',
     
    })
}
// 管理员登录
export const requserlogin=(data)=>{
    return axios({
        url:baseUrl+"/api/userlogin",
        method:'post',
        data:data,
        
     
    })
}
// ////////////////////////////////////////////////////
// 商品分类添加
export const reqCateadd=(data)=>{
    var  form = new FormData()
  for(var i in data){
form.append(i,data[i])
  }
    return axios({
        url:baseUrl+"/api/cateadd",
        method:'post',
        data:form
     
    })
}
// 商品分类列表
export const reqCatelist=(data)=>{
    return axios({
        url:baseUrl+"/api/catelist",
        method:'get',
        params:data
     
    })
}
// 商品分类列表获取一条
export const reqCateinfo=(data)=>{
    return axios({
        url:baseUrl+"/api/cateinfo",
        method:'get',
        params:data
     
    })
}
// 商品分类删除
export const cateDelete=(id)=>{
    return axios({
        url:baseUrl+"/api/catedelete",
        method:'post',
        data:id
     
    })
}
// 商品分类修改
export const cateeDit=(data)=>{
    var  form = new FormData()
    for(var i in data){
  form.append(i,data[i])
    }
    return axios({
        url:baseUrl+"/api/cateedit",
        method:'post',
        data:form
     
    })
}
// ///////////////////////////////////////////
// 商品规格
export const specsadd=(data)=>{

    return axios({
        url:baseUrl+"/api/specsadd",
        method:'post',
        data:data
     
    })
}
// 商品规格总数
export const specscount=()=>{

    return axios({
        url:baseUrl+"/api/specscount",
        method:'get',
     
    })
}
// 商品规格列表
export const specslist=(data)=>{

    return axios({
        url:baseUrl+"/api/specslist",
        method:'get',
      params:data
     
    })
}
// 商品规格获取（一条）
export const specsinfo=(id)=>{

    return axios({
        url:baseUrl+"/api/specsinfo",
        method:'get',
      params:id
     
    })
}
// 商品规格修改
export const specsedit=(data)=>{

    return axios({
        url:baseUrl+"/api/specsedit",
        method:'post',
      data:data
     
    })
}
// 商品规格删除
export const specsdelete=(id)=>{

    return axios({
        url:baseUrl+"/api/specsdelete",
        method:'post',
      data:id
     
    })
}
// ///////////////////////////////////////////
// 商品添加
export const goodsadd=(data)=>{
    var  form = new FormData()
  for(var i in data){
form.append(i,data[i])
  }
    return axios({
        url:baseUrl+"/api/goodsadd",
        method:'post',
        data:form
     
    })
}
// 商品总数
export const goodscount=()=>{

    return axios({
        url:baseUrl+"/api/goodscount",
        method:'get',
     
     
    })
}
//商品列表（分页） 
export const goodslist=(data)=>{

    return axios({
        url:baseUrl+"/api/goodslist",
        method:'get',
     params:data
     
    })
}
//商品获取（一条）
export const goodsinfo=(id)=>{

    return axios({
        url:baseUrl+"goodsinfo",
        method:'get',
        params:id
     
    })
}
//商品修改
export const goodsedit=(data)=>{

    return axios({
        url:baseUrl+"/api/goodsedit",
        method:'post',
        data:data
     
     
    })
}
//商品删除
export const goodsdelete=(id)=>{

    return axios({
        url:baseUrl+"/api/goodsdelete",
        method:'post',
        data:id
     
     
    })
}