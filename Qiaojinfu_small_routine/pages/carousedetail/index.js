//index.js
const app = getApp()

const url = require('../../api/url.js')

Page({
  data: {
    detail: '',
  },
  onLoad: function (option) {
    // console.log(option)
    this.getDetail(option)
  },
  getDetail: function (option) {
    var that = this
    wx.request({
      url: url.getCarouselDetail,
      method: 'POST',
      data: {
        ...option
      },
      success: function (res) {
        // console.log(res)
        var datas = res.data.data
        // console.log(datas)
        that.setData({
          detail: datas.pictureUrl
        })
        wx.stopPullDownRefresh();
      },
      fail: function (e) {
        Toptips('获取数据失败，请下拉刷新重试')
        wx.stopPullDownRefresh();
      }
    })
  },
  uploadImg: function() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      success: function (res) {
        console.log(res)
        that.setData({
          detail: res.tempFilePaths[0]
        })
        wx.uploadFile({
          url: url.upload, //仅为示例，非真实的接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          success: function (res1) {
            console.log(res1)
            var data = res1.data.link
            //do something
          }
        })
      }
    })
  }
})
