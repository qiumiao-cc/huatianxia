const DBone = wx.cloud.database().collection("htxjqjd")
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sceneId:null,
    jdData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    var detailId = options.id-1;
    DBone.get({
      success(res){
        console.log("get ok1",res)
        console.log("get66",detailId)
         that.setData({
          jdData:res.data[detailId]
        })
        }
      })

  
  },
 
  
})