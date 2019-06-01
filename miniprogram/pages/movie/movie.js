let currentVideo = null;
Page({
  data: {

    entities: [
      {
        id: 1,
        header: 'CoCO广告',
        original_header: 'The Outsider',
        description: "美国第一本户外杂志 Outside 的创始人 Larry Burke，带我们参观他在新墨西哥的牧场。",
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
    mv:[
      {
        duration:'',
        src : 'https://ugcydzd.qq.com/uwMROfz2r5zEIaQXGdGnC2dfJ7xlHUZLN7WLSNBHzUj-9W46/k0660momfpn.p712.1.mp4?sdtfrom=v1010&guid=896e377d1093eb0313256d8569bd7b59&vkey=544630C3BF04CFC839B9DB2F9BB6404BE790045EC9E8E408496F3C36F8BD87E01ADA4724F9C8018B3631B077EA2C20B5A5090403D43B114C128D0FD20E3B2A670FCCF38C25EDA4232A01E173FD52950CBF32B7C64766A1AE85EE28C91012B3450537953AE322C47AE6EF08C360B627EA7FBACBB45B6963933931CCDF66BF57C7',
        cover : 'http://www.coco-tea.com.cn/images/collection/%E9%86%87%E9%A6%99%E5%A5%B6%E8%8C%B6%E7%B3%BB%E5%88%97.jpg',
      },{
        duration:'',
        src : 'https://ugcydzd.qq.com/uwMROfz2r5zEIaQXGdGnC2dfJ7xlHUZLN7WLSNBHzUj-9W46/k0660momfpn.p712.1.mp4?sdtfrom=v1010&guid=896e377d1093eb0313256d8569bd7b59&vkey=544630C3BF04CFC839B9DB2F9BB6404BE790045EC9E8E408496F3C36F8BD87E01ADA4724F9C8018B3631B077EA2C20B5A5090403D43B114C128D0FD20E3B2A670FCCF38C25EDA4232A01E173FD52950CBF32B7C64766A1AE85EE28C91012B3450537953AE322C47AE6EF08C360B627EA7FBACBB45B6963933931CCDF66BF57C7',
        cover : 'http://www.coco-tea.com.cn/images/collection/%E9%86%87%E9%A6%99%E5%A5%B6%E8%8C%B6%E7%B3%BB%E5%88%97.jpg',
    
      }
    ],
    search : [
      {
        icon:"",
        name1 : '探索',
        name2 : '纯净食材'
      },
      {
        icon:"",
        name1 : '分享',
        name2 : '乐活体验'
      },
      {
        icon:"",
        name1 : '传递',
        name2 : '品牌初心'
      },
    ],
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://www.coco-tea.com.cn/images/collection/%E9%86%87%E9%A6%99%E5%A5%B6%E8%8C%B6%E7%B3%BB%E5%88%97.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'http://www.coco-tea.com.cn/images/News/%E6%8D%89%E5%A6%96banner_2094x750cm.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'http://www.coco-tea.com.cn/images/News/%E5%AE%98%E7%BD%91banner-01.jpg'
    }],
  },
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

  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})