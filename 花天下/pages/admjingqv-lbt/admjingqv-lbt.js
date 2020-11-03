// pages/admjingqv-lbt/admjingqv-lbt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  async upImage(){
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

          cloudPath:"htxjqimages/homepage/slideshow/sylbt1.png",

          filePath: tempFile, // 文件路径
          success: res => {
            // get resource ID

      
           
                wx.navigateTo({
                  url: '../admjingqv/admjingqv'
               })
                console.log("okupd", res)
                wx.showToast({

                  title: '修改成功',
             
                  icon: 'success',
             
                  duration: 2000//持续的时间
             
                })
               
              },
              fail: res=>{
                console.log("no", res)
                wx.showToast({

                  title: '修改失败',
             
                  icon: 'none',
             
                  duration: 2000//持续的时间
             
                })
              },
            })
          },
         
        })
      },
      async upImage1(){
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

          cloudPath:"htxjqimages/homepage/slideshow/sylbt2.png",

          filePath: tempFile, // 文件路径
          success: res => {
            // get resource ID
    
      
           
                wx.navigateTo({
                  url: '../admjingqv/admjingqv'
               })
                console.log("okupd", res)
                wx.showToast({

                  title: '修改成功',
             
                  icon: 'success',
             
                  duration: 2000//持续的时间
             
                })
               
              },
              fail: res=>{
                console.log("no", res)
                wx.showToast({

                  title: '修改失败',
             
                  icon: 'none',
             
                  duration: 2000//持续的时间
             
                })
              },
            })
          },
         
        })
      },
      async upImage2(){
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

          cloudPath:"htxjqimages/homepage/slideshow/sylbt3.png",

          filePath: tempFile, // 文件路径
          success: res => {
            // get resource ID
    
      
           
                wx.navigateTo({
                  url: '../admjingqv/admjingqv'
               })
                console.log("okupd", res)
                wx.showToast({

                  title: '修改成功',
             
                  icon: 'success',
             
                  duration: 2000//持续的时间
             
                })
               
              },
              fail: res=>{
                console.log("no", res)
                wx.showToast({

                  title: '修改失败',
             
                  icon: 'none',
             
                  duration: 2000//持续的时间
             
                })
              },
            })
          },
         
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