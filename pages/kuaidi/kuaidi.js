// pages/kuaidi/kuaidi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  x1:"",
  x2:"",
  statu:"",
  list:"",
  typename:"",
  deliverystatus:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getinformation: function(res){
  wx.request({
    url: getApp().globalData.myurl + '/express/query?appkey=' + getApp().globalData.appid+'&type=auto&number=' + this.data.x1+'&mobile=' + this.data.x2,
    method:"POST",
    success:(res)=>{
      console.log(res);
      this.setData({
        deliverystatus:res.data.result.deliverystatus,
        statu:2,
        list:res.data.result.list,
        typename:res.data.result.typename,
      })
    }
  })
  },
  Input_x1: function(res){
    var value = res.detail.value;
    console.log(value);
    this.setData({x1:value});
  },
  Input_x2: function(res){
    var value = res.detail.value;
    console.log(value);
    this.setData({x2:value});
  },
  inquire: function(res){
  this.setData({statu:1});
  this.getinformation();
  },
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