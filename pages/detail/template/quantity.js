var app = getApp();
var Temp = require('../../template/contract.js');
Page(Object.assign({},Temp.Quantity,{

      // Object.assign，这个是js的属性，定义是：从一个对象复制所有的属性到另一个对象是一个常见的操作，这里就是把Temp.Quantity的数据和detail.js的数据合并到一起
      data: {
        quantity1: {
          quantity: 10,
          min: 1,
          max: 20
        },
    },
      //数量变化处理
    handleQuantityChange(e) {
      console.log(e.componentId)
      var componentId = e.componentId;
      var quantity = e.quantity;
      this.setData({
        componentId,quantity
      });
    }
  })
)