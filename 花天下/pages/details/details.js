const DBone = wx.cloud.database().collection("htxjqlmjd")
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sceneId:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    var detailId = options.id;
    DBone.get({
      success(res){
        console.log("get ok1",res)
         that.setData({
          detailData:res.data[detailId]
        }),
         console.log(cardTeams)
         console.log(detailId)
        }
      })

  
  },
 
  
})