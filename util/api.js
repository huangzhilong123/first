import { methods } from "uview-ui/libs/mixin/mixin";

const BASE_URL = 'http://172.22.22.3:9000'
// 全局请求路径，也就是后端的请求基准路径
// 同时发送异步代码的次数，防止一次点击中有多次请求，用于处理
let ajaxTimes=0;
// 封装请求方法，并向外暴露该方法
export const myHttp = (options)=>{
  // 解构请求头参数
  let header = {...options.header};
  // 当前请求不是登录时请求，在header中加上后端返回的token
  if(options.url != 'login'){
      header['content-type'] = 'application/json';
	  header['Authorization'] = uni.getStorageSync("authPrefix")+' '+uni.getStorageSync('token');
  }
 
  ajaxTimes++;
  // 显示加载中 效果
  uni.showLoading({
    title: "加载中",
      mask: true,
  });
  return new Promise((resolve,reject)=>{
    uni.request({
      url:BASE_URL+options.url,
      method: options.method || 'POST',
      data: options.data || {},
      header,
      success: (res)=>{
        resolve(res)
         if (res.data.status != 200) { 
          uni.showToast({
            title: res.data.message,
            icon: "none",
            duration: 1500
          })
        }
		console.log('res',res)
		 console.log('header1',header)
      },
      fail: (err)=>{
        reject(err)
		 console.log('header2',header)
      },
      // 完成之后关闭加载效果
      complete:()=>{
        ajaxTimes--;
        if(ajaxTimes===0){
              //  关闭正在等待的图标
              uni.hideLoading();
          }
		   console.log('header3',header)
      }
    })
  })
}
