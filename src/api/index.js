import ajax from './ajax'

const BASE = '/api'

//根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${latitude},${longitude}`)

//获取食品分类列表
export const reqFoodCategories = () => ajax({
  method: 'GET',
  url: BASE + '/index_category',
  headers: {
    needToken: true
  }
})

//根据经纬度获取商铺列表

export const reqShopList = ({ longitude, latitude }) => ajax({
  url: BASE + '/shops',
  params: {longitude, latitude},
  headers: {
    needToken: true
  }
})

//用户名密码登录
export const reqPwdLogin = ({ name, pwd, captcha  }) => ajax({
  method: 'POST',
  url: BASE + '/login_pwd',
  data: {
    name,
    pwd,
    captcha
  }
})

//手机验证码登录
export const reqCodeLogin = ({ phone, code }) => ajax({
  method: 'POST',
  url: BASE + '/login_sms',
  data: {
    phone,
    code
  }
})


//获取短信验证码
export const reqPhoneCode = ( phone ) => ajax({
  url: BASE + '/sendcode',
  params: {
    phone
  }
})

//自动登录
export const reqAutoLogin = () => ajax({
  url: BASE + '/auto_login',
  headers: { needToken: true }
})
