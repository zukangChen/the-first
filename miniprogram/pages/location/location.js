// 引入SDK核心类

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
//申请密钥地址 https://lbs.qq.com/
var qqmap = new QQMapWX({ key: 'ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU' });
Page({
  data: {
    distance :[],
    value:'',
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
  //点击跳到选择饮品页面
  order(e){
    wx.navigateTo({
      url: '../category/category'
    })
  },
  search(e) {
    let that = this;
    //获取搜索的地址信息
    wx.request({
      url:'https://apis.map.qq.com/ws/geocoder/v1/?key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&address='+that.data.value,
      data: {
      },
      success(res) {
        console.log(res)
        that.setData({
          lng : res.data.result.location.lng,
          lat : res.data.result.location.lat
        })
        console.log(that.data.lng);
        console.log(that.data.lat)
      }
    })
    //搜索附近的奶茶店
    setTimeout(function(){
      wx.request({
      
        url:'https://apis.map.qq.com/ws/place/v1/search?page_size=5&page_index=1&keyword=CoCo奶茶&orderby=_distance&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&boundary='+'nearby('+ that.data.lat +','+ that.data.lng +','+'1000)',
        // url:`https://apis.map.qq.com/ws/place/v1/search?page_size=10&page_index=1&keyword=CoCo奶茶&orderby=_distance&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&boundary=nearby(that.data.lat,that.data.lng,1000)`,
        data: {
  
        },
        success(res) {
          // console.log(that.data.lng);
          // console.log(that.data.lat)
          // console.log(res)
          that.setData({
            info:res.data.data
          })
        }
      })
    },1000)
    //算出两地之间的距离
    setTimeout(function () {
      let dis = []
      for (let i=0 ; i< that.data.info.length; i++){
        let lat = that.data.info[i].location.lat;
        let lng = that.data.info[i].location.lng;
        wx.request({
          // url:'https://apis.map.qq.com/ws/place/v1/search?page_size=10&page_index=1&keyword=CoCo奶茶&orderby=_distance&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&boundary='+'nearby('+ that.data.lat +','+ that.data.lng +','+'1000)',
          url:'https://apis.map.qq.com/ws/distance/v1/?mode=driving&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&from='+that.data.lat+','+that.data.lng + '&to='+lat+','+lng,
          data: {
    
          },
          success(res) {
            console.log(res)
            let distance = res.data.result.elements[0].distance;
            console.log(distance);
            // let distance = [] ;
            dis.push(distance);
            console.log(dis);
            that.setData({
              distance : dis
            })
          }
        })
       }
    }, 2000);
   
  },
  //获取输入框的内容
  find (e){
    // console.log(e)
    this.setData({
      value : e.detail.value
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
              addInfo: res.result
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
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion/?page_size=5&page_index=1&region=江西省南昌市广兰大道&keyword=CoCo奶茶&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU', //仅为示例，并非真实的接口地址
      data: {

      },
      success(res) {
        console.log(res)
        that.setData({
          info : res.data.data
        })
        console.log(that.data.info)
      }
    })

       //算出两地之间的距离
       setTimeout(function () {
         console.log(that.data.info)
        let dis = []
        for (let i=0 ; i< that.data.info.length; i++){
          let lat = that.data.info[i].location.lat;
          let lng = that.data.info[i].location.lng;
          wx.request({
            // url:'https://apis.map.qq.com/ws/place/v1/search?page_size=10&page_index=1&keyword=CoCo奶茶&orderby=_distance&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&boundary='+'nearby('+ that.data.lat +','+ that.data.lng +','+'1000)',
            url:'https://apis.map.qq.com/ws/distance/v1/?mode=driving&key=ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU&from='+that.data.addInfo.location.lat+','+that.data.addInfo.location.lng + '&to='+lat+','+lng,
            data: {
      
            },
            success(res) {
              console.log(res)
              let distance = res.data.result.elements[0].distance;
              console.log(distance);
              // let distance = [] ;
              dis.push(distance);
              console.log(dis);
              that.setData({
                distance : dis
              })
            }
          })
         }
      }, 1500);

  }
})