// 经纪圈
const app = getApp()

const url = require('../../api/url.js')
const util = require('../../utils/util.js')

Page({
  data: {
    logs: "",
    carouselList: [],
  },
  onLoad: function () {
    this.setData({
      logs: "经纪圈"
    })
    this.showList()
  },
  showList: function() {
    var that = this
    wx.request({
      url: url.listCarousel,
      method: 'POST',
      success: function (res) {
        // console.log(res)
        var datas = res.data.data.list
        // console.log(datas)
        if (!datas) {
          Toptips('获取数据失败，请下拉刷新重试')
          return
        }
        if (datas.length > 0) {
          datas.forEach((item, index) => {
            item.editTime = util.toDate(item.editTime)
            item.onlineEndTime = util.toDate(item.onlineEndTime)
            item.onlineStartTime = util.toDate(item.onlineStartTime)
          })
          that.setData({
            carouselList: datas
          })
        }
        wx.stopPullDownRefresh();
      },
      fail: function (e) {
        Toptips('获取数据失败，请下拉刷新重试')
        wx.stopPullDownRefresh();
      }
    })
  },
  // 监听用户下拉刷新动作
  onPullDownRefresh: function () {
    this.showList()
  },

})