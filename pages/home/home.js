// pages/home/home.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs:[
      {id:1,title:"护肤"},
      {id:2,title:"彩妆"},
      {id:3,title:"香水"},
      {id:4,title:"个人护理"}
    ],
    currentTap:1,
    //banner
    imgUrls: [
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
    ],
      indicatorDots: true,   //是否显示面板指示点
      autoplay: true,        //是否自动切换
      interval: 3000,        //自动切换时间间隔 3s
      duration: 1000,        //滑动动画时长 1s
      
    // navItems
    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: 'bill',
        imageurl: '../../images/navItems/home_icon_brand.png',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: '../../images/navItems/home_icon_sort.png',
      },
      {
        typeId: 2,
        name: '特惠专场',
        url: 'bill',
        imageurl: '../../images/navItems/home_icon_gift.png'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: '../../images/navItems/home_icon_frends.png'
      }
    ],
  },
  navbarTap (e) {
    console.log(e);
    let id = e.currentTarget.dataset.id;
    this.setData({ currentTap:id })
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