// pages/mine/template/order.js
var app = getApp()
Page({
  data: {
    tablist: [
      {id:0,title:"全部"},
      {id:1,title:"待付款"},
      {id:2,title:"待发货"},
      {id:3,title:"待收货"},
      {id:4,title:"待评价"}
    ],
    selectedId: 0,
  },
  handleZanTabChange(e) {

    var id = e.currentTarget.dataset.id;
    // console.log(selectedId)
    this.setData({selectedId:id})
  //   var componentId = e.componentId;
  //   var selectedId = e.selectedId;
  //   this.setData({
  //     `${componentId}.selectedId`: selectedId
  //   });
  }
})