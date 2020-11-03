// pages/admjingdian-updata/admjingdian-updata.js
const DB = wx.cloud.database().collection("htxjqjd")
let id = ""
let content = ""
let content1 = ""
let money = ""
let num = ""
let oneid = ""


Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentc: "输入景点名称",
    content1c: "输入详细介绍",
    moneyc: "输入门票价格",
    numc: "输入评分",
    oneid: "",

  },


  udpDimageata(){
    wx.navigateTo({
      url: '../admjingdian-updata-image/admjingdian-updata-image'
   })
  


  },


  addcontent(event) {
    content = event.detail.value
  },
  addcontent1(event) {
    content1 = event.detail.value
  },

  addmoney(event) {
    money = event.detail.value
  },
  addnum(event) {
    num = event.detail.value
  },


  deleteid(event) {
    id = event.detail.value
  },

  //读取
  lookData() {
    let that = this
    DB.get({
      success(res) {
        console.log("get ok", res)
        for (let i = 0; i < res.data.length ; i++) {
          // console.log("get",res.data[i].content)
          // console.log("get",res.data[i].content1)
          // console.log("get ok",id)
          //  console.log("get ok1",res.data[i].id)
          console.log( res.data[i].id)
          if (id == res.data[i].id) {
            that.setData({
              contentc: res.data[i].content,
              content1c: res.data[i].content1,
              moneyc: res.data[i].money,
              numc: res.data[i].num,
              oneid: res.data[i]._id,
            })
          }
        }
      }
    })
  },

  //修改
  udpData() {
    if (content == "") { content = this.data.contentc }
    if (content1 == "") { content1 = this.data.content1c }
    if (money == "") { money = this.data.moneyc }
    if (num == "") { num = this.data.numc }
    // wx.cloud.callFunction({
    //   name: 'udpdata',
    //   data: {
    //     content: content,
    //     content1: content1,
    //     money: money,
    //     num: num,
    //     oneid:this.data.oneid
    //   },
    //   success: function (res) {
    //     console.log(res) // 3
    //   wx.navigateTo({
    //       url: '../admjingdian-updata/admjingdian-updata'
    //    })
    //   },
    //   fail: function (res) {
    //     console.log(res) // 3
    //   },
    // })
    // ofzVA5eLWyux4ilzSNjbhLrj4vDI
  //   DB.collection('htxjqjd').doc('this.data.oneid').update({ 
  //      data: {
  //       content: content,
  //           content1: content1,
  //           money: money,
  //           num: num,
  //           oneid:this.data.oneid
  //   }
  // })
  // .then(console.log)
  // .catch(console.error)


    // console.log("no",content)
    // console.log("no",content1)
    // console.log("no",money)
    // console.log("no",num)
    // console.log("no",this.data.oneid)
    // let that=this
    DB.doc(this.data.oneid).update({
      data:{
          content:content,
          content1:content1,
          money:money,
           num:num,
      },
      success(res){
        console.log("okupd",res)
         wx.navigateTo({
          url: '../admjingdian/admjingdian'
       })
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