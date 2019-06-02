// miniprogram/pages/explore/explore.js
let currentVideo = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur : null,
    control : '展开',
    expand : false,
    entities: [
      {
        id: 1,
        header: 'CoCO广告',
        original_header: 'The Outsider',
        description: "黄山有云雾，人间四月天。[浮云]云雾缥缈的黄山，孕育出香氛馥郁、回味甘甜的茶叶，经过各道严格的制茶工序和小Co的精心萃取，为大家带来#CoCo萃茶#[鼓掌] “黄山云雾绿茶”润口醇甘、气息恬雅，“奶霜云雾绿茶”浓郁顺滑、层次丰富[馋嘴] CoCo影院也同步上线啦，一起品着萃茶，探索黄山云雾的秘密吧 ​",
        original_description: "Adventurous founder of Outside, America's first outdoor lifestyle magazine, Larry Burke takes us on a tour of his New Mexico ranch in a LR4.",
        video: 'https://ugcws.video.gtimg.com/uwMROfz2r5zIIaQXGdGnC2dfJ7wFnocHIQhYHck9TxbRMoti/k051311cmn8.p712.1.mp4?sdtfrom=v1010&guid=4e7899239b213313408c9e8231f05d90&vkey=BB07B2F431781D43AEAF715863525979D3B7379F4AD2FFBE9AFAB7553E572D063814F2EF4407355EBBE9A9CBEA1A6A7E0F280711647E3E5F380399A11BC38FCBBA1B02F869FD27840956F928D3C08C643587D313ADEFB19DD09780A9DA8B0E04EA8C1B609D2895F9721FBA1A27D243F89B400A0EED671D0AD9274E574760A880',
        image: '../../images/mv1.png',
        duration_raw: 180,
        duration: '03:00'
      },
      {
        id: 2,
        header: 'CoCo探茶系列--黄山云雾',
        original_header: 'Norse Power',
        description: "黄山有云雾，人间四月天。[浮云]云雾缥缈的黄山，孕育出香氛馥郁、回味甘甜的茶叶，经过各道严格的制茶工序和小Co的精心萃取，为大家带来#CoCo萃茶#[鼓掌] “黄山云雾绿茶”润口醇甘、气息恬雅，“奶霜云雾绿茶”浓郁顺滑、层次丰富[馋嘴] CoCo影院也同步上线啦，一起品着萃茶，探索黄山云雾的秘密吧 ​",
        original_description: "Perfect for the Faroes' challenging terrain and twisting roads, Discovery Sport visits the remote islands where one restaurant kick started a fine food revolution that changed people's lives.",
        video: 'https://f.us.sinaimg.cn/003IuE73lx07sFdooFu801041201opnz0E010.mp4?label=mp4_720p&template=1280x720.20.0&Expires=1559380878&ssig=q7Eb48tBso&KID=unistore,video',
        image: '../../images/mv2.png',
        duration_raw: 148,
        duration: '02:28',
      },
      {
        id: 3,
        header: 'coco口红广告',
        original_header: 'Finding Adventure at Home',
        description: "摄影师 ALex Strohl 与 Andrea Dabene 在路上将近六年，最后他们决定回到自己在蒙大拿的家乡。",
        original_description: "After nearly six years on the road, photographers Alex Strohl and Andrea Dabene return home to Montana.",
        video: 'https://ugcws.video.gtimg.com/uwMROfz2r5zIIaQXGdGnC2dfJ6qh79xiwX7_wkGNX51PUT9e/m0335d73gza.p702.1.mp4?sdtfrom=v1010&guid=4e7899239b213313408c9e8231f05d90&vkey=69E01CEDF5F005FCAEF09F1F04FC309A8808A96BAD20732468613B5A39088A521977EC3210EB3992194B4CF0ED1EE8D730B83FE6B525145459477FE364EED332901507A313A9335C92946D29BD14730251C484EA8E39780C6AE970126506B76442C9AF377F71CEB5D64B08A96F1976AC24CFEF842E0F3CC724192B79B0AB5F2B',
        image: '../../images/mv3.png',
        duration_raw: 269,
        duration: '04:30',
      },
      {
        id: 4,
        header: 'coco香水广告',
        original_header: 'Finding Adventure at Home',
        description: "摄影师 ALex Strohl 与 Andrea Dabene 在路上将近六年，最后他们决定回到自己在蒙大拿的家乡。",
        original_description: "After nearly six years on the road, photographers Alex Strohl and Andrea Dabene return home to Montana.",
        video: 'https://ugcws.video.gtimg.com/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/q0195x8a6qu.mp4?sdtfrom=v1010&guid=4e7899239b213313408c9e8231f05d90&vkey=0DC2922811B810B86CDF7B2A0F93BC75CD14DA3DD1191DBB94014150B7E8010EDCEF723EB068FEFBFC376720F039A4A35CD1ED622C4A4B5B11785CF484830D47F4EB550E246855FE785DC1E931EFAF216F10D8A13AFE08D2D4770AC3A2D5237D6D13775758FABEA41986D4AD3FD6D2CA860FB5AE65132F978607831DBB0DD7C9',
        image: '../../images/mv4.png',
        duration_raw: 269,
        duration: '04:30',
      },
    ],

    currentVid: null,
  },
  //点击展开
  expand(e){
    // console.log(e)
    let index = e.currentTarget.dataset.index;
    if(this.data.expand){
      this.setData({
        cur:index,
        expand:false,
        control: '展开'
      })
    }else{
      this.setData({
        cur:e.currentTarget.dataset.index,
        expand:true,
        control:'收起'
      })
    }
   
  },
  //点击图片播放视频
  play(event){
    if(this.data.currentVid !== null){
      currentVideo.pause();
    }
    const vid = event.target.dataset.vid;
    if (vid){
      currentVideo = wx.createVideoContext(`${vid}`);
      currentVideo.play();
     this.setData({
      currentVid:vid
     })
    }
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