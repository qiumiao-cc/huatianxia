// pages/jieshao/jieshao.js
const DBone = wx.cloud.database().collection("htxfxylbt")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTab: 0,
    current: 0,
    tabList: []
  },
  selectTab(e) {
    let index = e.target.dataset.index;
    this.setData({
      curTab: index,
      current: index
    })
  },
  swiperChange(e) {
    let index = e.detail.current;
    this.setData({
      curTab: index,
      current: index
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    DBone.get({
      success(res){
        console.log("get ok2",res)
         that.setData({
          tabList:res.data
        }),
         console.log(tabList)
        }
      })
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