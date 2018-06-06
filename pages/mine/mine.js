// pages/mine/mine.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    orderItems:[
      {
        typeId:0,
        name:"待付款",
        url:"bill",
        imageurl:"../../images/person/personal_pay.png"
      },
      {
        typeId:1,
        name:"待发货",
        url:"bill",
        imageurl:"../../images/person/personal_shipped.png"
      },
      {
        typeId:2,
        name:"待收货",
        url:"bill",
        imageurl:"../../images/person/personal_receipt.png"
      },
      {
        typeId:3,
        name:"待评价",
        url:"bill",
        imageurl:"../../images/person/personal_comment.png"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    wx.getUserInfo({
        success:function(res){
        //更新数据
            // console.log(res.userInfo)
            var userInfo = that.data.userInfo;
            that.setData({ userInfo:res.userInfo })
        }
    })
  },
  toOrder () {
    wx.navigateTo({
      url:"template/order"
    })
  }
})