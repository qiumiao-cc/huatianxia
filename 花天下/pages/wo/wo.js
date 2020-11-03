//获取应用实例

var app = getApp();
 

Page({

  /**

   * 页面的初始数据

   */

  data: {
    menuitems: [

      { text: '个人资料', url: '#', icon: '/images/user/ziliao.png', tips: '', arrows: '/images/user/arrows.png' },

      { text: '我的消息', url: '#', icon: '/images/user/xiaoxi.png', tips: '', arrows: '/images/user/arrows.png' },

      { text: '我的收藏', url: '#', icon: '/images/user/shoucang.png', tips: '', arrows: '/images/user/arrows.png' },
      { text: '管理员', url: '../adm/adm', icon: '/images/user/wdsc.png', tips: '', arrows: '/images/user/arrows.png' },

    ],
    tyb:'cloud://test-h3kfc.7465-test-h3kfc-1303825603/tub1.jpg',
    userInfo:[{ nickName:"",avatarUrl:""}],

    hasUserInfo: false,

    canIUse: wx.canIUse('button.open-type.getUserInfo')
    
  },

 

  /**

   * 生命周期函数--监听页面加载

   */

  onLoad: function (options) {
    let username= getApp().userinfoData.userInfo.nickName
    let image=  getApp().userinfoData.userInfo.avatarUrl
    console.log("username",username)
    console.log("image",image)

      this.setData({
        // 'userInfo[0].nickName':username,
        // 'userInfo[0].avatarUrl':image,
        'userInfo.nickName':username,
        'userInfo.avatarUrl':image,
          // nickName:username,
          // avatarUrl:image,
        })
       
    
    
  },

 

  getUserInfo: function (e) {

    this.setUserInfo(e.detail.userInfo);

  },

 

  setUserInfo: function (userInfo) {

    if (userInfo != null) {

      app.globalData.userInfo = userInfo

      this.setData({

        userInfo: userInfo,

        hasUserInfo: true

      })

    }

  }

})



