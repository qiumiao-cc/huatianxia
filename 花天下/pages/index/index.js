const DB = wx.cloud.database().collection("htxjqtongzhi")
const DBone = wx.cloud.database().collection("htxjqlmjd")
var app = getApp();
var cardTeams;
Page({
  
  data: {
    msgList:[],
    imgUrls: [
      'cloud://test-h3kfc.7465-test-h3kfc-1303825603/htxjqimages/homepage/slideshow/sylbt1.png',
      'cloud://test-h3kfc.7465-test-h3kfc-1303825603/htxjqimages/homepage/slideshow/sylbt2.png',
      'cloud://test-h3kfc.7465-test-h3kfc-1303825603/htxjqimages/homepage/slideshow/sylbt3.png'
      
      ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular:true,
    interval: 2000,
    duration: 500,
    a1src:'../../icon/jingdian.png',
    a2src:'../../icon/gonglue.png',
    a3src:'../../icon/menpiao.png',
    a4src:'../../icon/ditu.png',

    cardTeams: []
  },
  onLoad(e) {
    console.log(e.title)
    let that=this
    DB.get({
      success(res){
        console.log("get ok",res)
        that.setData({
          msgList:res.data
              })
        },
    })
    DBone.get({
      success(res){
        console.log("get ok1",res)
         that.setData({
           cardTeams:res.data
        }),
         console.log(cardTeams)
        }
      })   
  }
 
})