// pages/admjingdian-updata-image/admjingdian-updata-image.js

const DB = wx.cloud.database().collection("htxjqjd")
const app = getApp()

let deid = ""
let oneid = ""

let jddz1 = "htxjqimages/homepage/scenicSpot/jd"
let jddz2 = ".png"



Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneid: []
  },



  adddeid(event) {
    deid = event.detail.value
  },


  async addImage() {
    let that0 = this
    //获取本地图片地址
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFile = res.tempFilePaths[0]
        let that1 = that0
        //更新云存储图片
        wx.cloud.uploadFile({

          cloudPath: jddz1 + deid + jddz2,

          filePath: tempFile, // 文件路径
          success: res => {
            // get resource ID
            console.log(res.fileID)
            console.log(that1.data.oneid)
            //更新数据库图片地址
            DB.doc(that1.data.oneid).update({
              data: {

                imageUrl: res.fileID,

              },
              success(res) { 
                wx.navigateTo({
                  url: '../admjingdian/admjingdian'
               })
                console.log("okupd", res)
                wx.showToast({

                  title: '修改成功',
             
                  icon: 'success',
             
                  duration: 2000//持续的时间
             
                })
               
              },
              fail(res) {
                console.log("no", res)
                wx.showToast({

                  title: '修改失败',
             
                  icon: 'none',
             
                  duration: 2000//持续的时间
             
                })
              }
            })
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },



//获取_id
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
          if (deid == res.data[i].id) {
            that.setData({
              oneid: res.data[i]._id,
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