// pages/sq/sq.js
const db=wx.cloud.database()
const _=db.command
const $=db.command.aggregate
const DB= db.collection("user")
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },


  getUserInfo(){
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              DB.add({
                data:res.userInfo
              })
              // wx.navigateTo({
              //     url: '../wo/wo?username='+res.userInfo.nickName+"&image="+res.userInfo.avatarUrl       
              // })
              getApp().userinfoData.userInfo.nickName=res.userInfo.nickName
              getApp().userinfoData.userInfo.avatarUrl=res.userInfo.avatarUrl
              wx.switchTab({
                
                url: '../wo/wo'
       })
            }
          })
        }
      }
    })
 
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'openidc',     
    // }).then(res => {
    //   console.log(res.result)
    //   let openid=res.result
    DB.where({
      _openid:'{openid}'
    }).get().then(res=>{
        console.log(res)
        const userInfo=res.data[0] 
        if(userInfo!=null){
          const userInfo1=userInfo
        //   wx.navigateTo({
        //     url: '../wo/wo?username='+userInfo1.nickName+"&image="+userInfo1.avatarUrl     
        //  })
        getApp().userinfoData.userInfo.nickName=userInfo1.nickName
        getApp().userinfoData.userInfo.avatarUrl=userInfo1.avatarUrl
         wx.switchTab({
          url: '../wo/wo'
        })
    }
    }) .catch(console.error)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})