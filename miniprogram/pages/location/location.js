// 引入SDK核心类

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
//申请密钥地址 https://lbs.qq.com/
var qqmap = new QQMapWX({ key: 'ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU' });
Page({
  data: {
    info:[],
    addInfo: '',
    cur: 0,
  },
  change1(e) {
    this.setData({
      cur: 0
    })
  },
  change2(e) {
    this.setData({
      cur: 1
    })
  },
  search(e) {
    //搜索
    wx.request({
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=江西省南昌市广兰大道&keyword=CoCo奶茶&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU', //仅为示例，并非真实的接口地址
      data: {

      },
      success(res) {
        console.log(res)
      }
    })
  },
  onLoad: function () {
    let that = this;
    //获取当前经纬度
    wx.getLocation({

      success: function (res) {
        //用腾讯地图的api，根据经纬度定位当前位置信息
        qqmap.reverseGeocoder({
          location: {
            latitude: res.latitude,  //回调的纬度
            longitude: res.longitude //回调的经度
          },
          //回调成功显示位置的详细数据
          success: function (res) {
            console.log(res);
            that.setData({
              addInfo: res
            })
            console.log(that.data.addInfo);
          },
          //回调失败  （调用成功之后这个可以不需要 ，回调失败会有报错信息方便调试）
          fail: function (res) {
            console.log(res);
          },
          //成功失败都会执行
          complete: function (res) {
            console.log(res);
          }
        })
      },
    })
    //搜索
    wx.request({
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=江西省南昌市广兰大道&keyword=CoCo奶茶&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU', //仅为示例，并非真实的接口地址
      data: {

      },
      success(res) {
        that.setData({
          info : res.data.data
        })
        console.log(that.data.info)
      }
    })
  }
})