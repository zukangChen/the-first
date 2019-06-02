// miniprogram/pages/category/category.js
const app = getApp()
let foods = app.globalData.foods
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '猜你喜欢', id: 'cainixihuan' },
      { name: '超值优惠', id: 'chaozhiyouhui' },
      { name: '咖啡时光', id: 'kafeishiguang' },
      { name: '大漠沙棘', id: 'damoshaji' },
      { name: '红果果', id: 'hongguoguo' },
      { name: '莓果恋人', id: 'meiguolianren' },
      { name: '鲜果鲜茶', id: 'xianguonaicha' },
      { name: '醇香奶茶', id: 'chunxiangnaicha' }
    ],
    detail:[],
    slectCarts: [],
    curIndex: 0,
    toView: 0,
    toView: 'cainixihuan',
    imgs: 'http://www.coco-tea.com.cn/images/collection/%E9%86%87%E9%BB%91%E6%BF%83%E6%83%85%E7%B3%BB%E5%88%97.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  add(e){
    const index = e.target.dataset.index
    const id = e.target.dataset.id
    let carts = this.data.detail
    let cart = carts.find( item => item.id === id)
    let food = cart.detail[index]
    let num = food.number
    num = +num + 1
    cart.detail[index].number = num
    this.setData({
      detail: carts,
      slectCarts: cart,
    })
    foods.push(food)
    this.diff(foods)
  },
  diff(arr){
    var l = arr.length;
    for(var i =0;i<l-1;i++){
      if(l-i && arr[i] === arr[i+1]){
        arr.splice(i,1);
      }
    }
  },
  sub(e){
    const index = e.target.dataset.index
    const id = e.target.dataset.id
    let carts = this.data.detail
    let cart = carts.find( item => item.id === id)
    let num = cart.detail[index].number
    num = +num - 1
    if(num < 0){
      wx.showModal({
        title: '不能删除',
        content: '没有可以删除的了，请先添加奶茶！',
      })
    }else{
      cart.detail[index].number = num
    this.setData({
      detail: carts
    })
    }
    
  },

  switchTab(e){
    let id = e.target.dataset.id
    let index = e.target.dataset.index
    this.setData({
      toView: id,
      curIndex: index
    })
  },
  switchTabs(e){
    let index = Math.floor(e.detail.scrollTop / 514)
    this.setData({
      curIndex: index < 7 ? index : 7
    })
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
    let self = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca4960eea0dc52bf3b67fe5/hbz/coco',
      success(res){
        console.log(res.data.data.details)
        self.setData({
          detail: res.data.data.details
        })
      }
    })
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