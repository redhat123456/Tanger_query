const app = getApp()
var util = require('../../utils/util.js');
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  theday:"",
  day:"10",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getToday: function () {
    let day =  util.formatTime(new Date()) ;
    let theday=day;  
    console.log(theday);
    this.setData({
     theDay:theday
    })
  },
  onLoad: function (options) {
  this.getToday();
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