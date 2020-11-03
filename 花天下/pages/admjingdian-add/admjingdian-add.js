// pages/admjingdian-add/admjingdian-add.js
const DB = wx.cloud.database().collection("htxjqjd")
let id=""
let content=""
let content1=""
let imageUrl=""
let money=""
let num=""

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodata:[]
  },


  addData(){
    DB.add({
       data:{
        
        id:id,
        content:content,
        content1:content1,
        imageUrl:imageUrl,
        money:money,
        num:num,
        },
      success(res){
        wx.navigateTo({
          url: '../admjingdian-add-image/admjingdian-add-image'
       })
        console.log("ok",res)
        wx.showToast({

          title: '添加成功',
     
          icon: 'success',
     
          duration: 2000//持续的时间
     
        })
        
        },
      fail(res){
          console.log("no",res)
          wx.showToast({

            title: '添加失败',
       
            icon: 'none',
       
            duration: 2000//持续的时间
       
          })
          }
    })
},

addid(event){
  id=event.detail.value
},
addcontent(event){
  content=event.detail.value
},
addcontent1(event){
  content1=event.detail.value
},
addimageUrl(event){
  imageUrl=event.detail.value
},
addmoney(event){
  money=event.detail.value
},
addnum(event){
  num=event.detail.value
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    DB.get({
      success(res){
        console.log("get ok",res)
        that.setData({
          nodata:res.data
        })
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