const baseUrl = "http://qfcloud.dev.qiaofangyun.com"
//获取轮播图
const listCarousel = baseUrl + "/api/cloudoperationbff/carouselBff/listCarousel"
const getCarouselDetail =  baseUrl + "/api/cloudoperationbff/carouselBff/getCarouselDetail"
const upload = baseUrl + "/api/cloudoperationbff/uploadBff/upload"
module.exports = {
  listCarousel,
  getCarouselDetail,
  upload
}