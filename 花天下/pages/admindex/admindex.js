//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数

  onLoad: function () {
   
  },
  jingdian:function(){
    wx.navigateTo({
       url: '../admjingdian/admjingdian'
    })
   

  },
  jingqv:function(){
    wx.navigateTo({
      url: '../admjingqv/admjingqv'
   })
  },
  userbook:function(){
    wx.navigateTo({
      url: '../usertable/usertable'
   })
  },
})
