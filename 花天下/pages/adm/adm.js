// pages/adm/adm.js
const DB = wx.cloud.database().collection("adm")
// let adm="htxjqadm"
// let pass="123456789"
let adm=""
let pass=""



Page({

  /**
   * 页面的初始数据
   */
  data: {
  },


  admadm(event){
    adm=event.detail.value
  },
  admpass(event){
    pass=event.detail.value
  },
  gogo(){
    let that=this
    DB.get({
    success(res){
      console.log("get ok",res)

      if(adm==res.data[0].admuser){
        if(pass==res.data[0].password){
          console.log("get ok1")
          wx.navigateTo({
            url: '../admindex/admindex'
         })
        }
    
      }
  }
  })
  

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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