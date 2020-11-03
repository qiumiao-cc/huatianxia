// pages/admjingdian-delete/admjingdian-delete.js
const DB = wx.cloud.database().collection("htxjqjd")
let id=""
let oneid=""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneid:[]
  },
  deleteName(event){
    id=event.detail.value
  },

  
  //读取
  lookData() {
    let that = this
    DB.get({
      success(res) {
        console.log("get ok", res)
        for (let i = 1; i < res.data.length + 1; i++) {
          // console.log("get",res.data[i].content)
          // console.log("get",res.data[i].content1)
          // console.log("get ok",id)
          //  console.log("get ok1",res.data[i].id)
          if (id == res.data[i].id) {
            that.setData({
              oneid: res.data[i]._id,
            })
          }
        }
      }
    })
  },
  //删除
  deleteData(){
    console.log(oneid)
    console.log(this.data.oneid)
    DB.doc(this.data.oneid).remove({
      success(res){
        console.log("ok",res)
        wx.showToast({

          title: '删除成功',
     
          icon: 'success',
     
          duration: 2000//持续的时间
     
        })
        },
      fail(res){
          console.log("no",res)
          wx.showToast({

            title: '删除失败',
       
            icon: 'none',
       
            duration: 2000//持续的时间
       
          })
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