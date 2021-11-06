// pages/shu/shu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x1:"",
    statu:"",
    statu1:"",
    msg:"",
    title:"",
    subtitle:"",
    pic:"",
    author:"",
    summary:"",
    publisher:"",
    pubplace:"",
    pubdate:"",
    page:"",
    price:"",
    binding:"",
    isbn1:"",
    isbn10:"",
    keyword:"",
    edition:"",
    impression:"",
    language:"",
    format:"",
    class:"",
    sellerlist:"",
  },
  Input_x1: function(res){
    var value = res.detail.value;
    console.log(value);
    this.setData({x1:value});
  },
  inquire:function(res){
  this.setData({ statu:1})
  this.get_message();
  },
  get_message(res){
  wx.request({
    url: getApp().globalData.myurl + '/isbn/query?appkey=' + getApp().globalData.appid+'&isbn=' + this.data.x1,
    method:"POST",
    success:(res)=>{
      console.log(res);
      this.setData({
        statu:2,
      })
      if(res.data.status=='0'){
        this.setData({
          msg:res.data.msg,
          statu1: 1,
          title:res.data.result.title,
          subtitle:res.data.result.subtitle,
          pic:res.data.result.pic,
          author:res.data.result.author,
          summary:res.data.result.summary,
          publisher:res.data.result.publisher,
          pubplace:res.data.result.pubplace,
          pubdate:res.data.result.pubdate,
          page:res.data.result.page,
          price:res.data.result.price,
          binding:res.data.result.binding,
          isbn1:res.data.result.isbn,
          isbn10:res.data.result.isbn10,
          keyword:res.data.result.keyword,
          cip:res.data.result.cip,
          edition:res.data.result.edition,
          impression:res.data.result.impression,
          language:res.data.result.language,
          format:res.data.result.format,
          class:res.data.result.class,
          sellerlist:res.data.result.sellerlist,
        })
      }
      if(res.data.status=='201'){
        this.setData({
          msg:res.data.msg,
          statu1: 2,
          title:res.data.result.title,
          subtitle:res.data.result.subtitle,
          pic:res.data.result.pic,
          author:res.data.result.author,
          summary:res.data.result.summary,
          publisher:res.data.result.publisher,
          pubplace:res.data.result.pubplace,
          pubdate:res.data.result.pubdate,
          page:res.data.result.page,
          price:res.data.result.price,
          binding:res.data.result.binding,
          isbn1:res.data.result.isbn,
          isbn10:res.data.result.isbn10,
          keyword:res.data.result.keyword,
          cip:res.data.result.cip,
          edition:res.data.result.edition,
          impression:res.data.result.impression,
          language:res.data.result.language,
          format:res.data.result.format,
          class:res.data.result.class,
          sellerlist:res.data.result.sellerlist,
        })
      }
    }
  })
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