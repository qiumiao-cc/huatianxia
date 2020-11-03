// pages/admjingqv-tongzhi/admjingqv-tongzhi.js
const DB = wx.cloud.database().collection("htxjqtongzhi")

let a=""
let b=""
let c=""
let x=[]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cc:[],
    a:"第一条",
    b:"第二条",
    c:"第三条",
    x:[
      "b8df3bd65f74ad9500c04e3a14cf4040",
    "d81cd5415f74adb800ba5bd033ad780a",
    "1b64dd7b5f74adcb00d743b21f7e75a6",
  ]
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
                    a: res.data[0].text,
                    b: res.data[1].text,
                    c: res.data[2].text,
                  })
      }
    })
  },

  setDataone1(event){
    a=event.detail.value
  },
  setDatatwo1(event){
    b=event.detail.value
  },

  setDatathree1(event){
    c=event.detail.value
  },


setData(){
  let that=this
  if (a == "") {}else{
 DB.doc(that.data.x[0]).update({
   
    data:{
       title:a
    },
    success(res){
      console.log("okupd",that.data.x[0])
    //    wx.navigateTo({
    //     url: '../admjingdian/admjingdian'
    //  })
      wx.showToast({

        title: '修改成功',
   
        icon: 'success',
   
        duration: 2000//持续的时间
   
      })
     
      },
    fail(res){
        console.log("no",res)
        wx.showToast({

          title: '修改失败',
     
          icon: 'none',
     
          duration: 2000//持续的时间
     
        })
        }
  })
  }
},
setData1(){
  let that=this
  if (b == "") {}else{
    DB.doc(that.data.x[1]).update({
       data:{
          title:b
       },
       success(res){
         console.log("okupd",res)
        //   wx.navigateTo({
        //    url: '../admjingdian/admjingdian'
        // })
         wx.showToast({
   
           title: '修改成功',
      
           icon: 'success',
      
           duration: 2000//持续的时间
      
         })
        
         },
       fail(res){
           console.log("no",res)
           wx.showToast({
   
             title: '修改失败',
        
             icon: 'none',
        
             duration: 2000//持续的时间
        
           })
           }
     })
     }
      },
setData2(){
      let that=this
  if (c == "") {}else{
    DB.doc(that.data.x[2]).update({
       data:{
          title:c
       },
       success(res){
         console.log("okupd",res)
        //   wx.navigateTo({
        //    url: '../admjingdian/admjingdian'
        // })
         wx.showToast({
   
           title: '修改成功',
      
           icon: 'success',
      
           duration: 2000//持续的时间
      
         })
        
         },
       fail(res){
           console.log("no",res)
           wx.showToast({
   
             title: '修改失败',
        
             icon: 'none',
        
             duration: 2000//持续的时间
        
           })
           }
     })
     }
 
 

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