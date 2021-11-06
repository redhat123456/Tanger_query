// pages/city/city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statu:"",
    city:"",
    city1:"",
    ip:"",
    date:"",
    week:"",
    temp:"",
    temphigh:"",
    templow:"",
    humidity:"",
    pressure:"",
    windspeed:"",
    winddirect:"",
    windpower:"",
    updatetime:"",
    index:[],
    hourly:[],
    daily:[],
    so2:"",
    so224:"",
    no2:"",
    no224:"",
    co:"",
    co24:"",
    o3:"",
    o38:"",
    o324:"",
    pm10:"",
    pm1024:"",
    pm2_5:"",
    pm2_524:"",
    iso2:"",
    ino2:"",
    ico:"",
    io3:"",
    io38:"",
    ipm10:"",
    ipm2_5:"",
    aqi:"",
    primarypollutant:"",
    quality:"",
    timepoint:"",
    level:"",
    color:"",
    affect:"",
    measure:"",
    weather:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  get_ip:function(res){
    return new Promise(resolve => {
      wx.request({
        url: 'http://ip-api.com/json',   
        success:(res) =>{
          console.log('IP地址: ' + res.data.query);
          this.setData({
            statu:1,
            ip:res.data.query,
          })
          return resolve();
        }
      });
  });
  },
  Input_city: function(res){
    var value = res.detail.value;
    console.log(value);
    this.setData({city:value});
  },
  btn1: function(res){
    this.setData({statu:1});
    this.getinformation_city();
  },
  getinformation_ip:function(res){
    wx.request({
    url: getApp().globalData.myurl+'/weather/query?appkey='+getApp().globalData.appid+'&ip='+this.data.ip,
    method:'POST',
    success:(res)=>{
      console.log(res);
      this.setData({
        statu:2,
        weather:res.data.result.weather,
        city1:res.data.result.city,
        date:res.data.result.date,
        week:res.data.result.week,
        temp:res.data.result.temp,
        temphigh:res.data.result.temphigh,
        templow:res.data.result.templow,
        humidity:res.data.result.humidity,
        pressure:res.data.result.pressure,
        windspeed:res.data.result.windspeed,
        winddirect:res.data.result.winddirect,
        windpower:res.data.result.windpower,
        updatetime:res.data.result.updatetime,
        index:res.data.result.index,
        hourly:res.data.result.hourly,
        daily:res.data.result.daily,
        so2:res.data.result.aqi.so2,
        so224:res.data.result.aqi.so224,
        no2:res.data.result.aqi.no2,
        no224:res.data.result.aqi.no224,
        co:res.data.result.aqi.co,
        co24:res.data.result.aqi.co24,
        o3:res.data.result.aqi.o3,
        o38:res.data.result.aqi.o38,
        o324:res.data.result.aqi.o324,
        pm10:res.data.result.aqi.pm10,
        pm1024:res.data.result.aqi.pm1024,
        pm2_5:res.data.result.aqi.pm2_5,
        pm2_524:res.data.result.aqi.pm2_524,
        iso2:res.data.result.aqi.iso2,
        ino2:res.data.result.aqi.ino2,
        ico:res.data.result.aqi.ico,
        io3:res.data.result.aqi.io3,
        io38:res.data.result.aqi.io38,
        ipm10:res.data.result.aqi.ipm10,
        ipm2_5:res.data.result.aqi.ipm2_5,
        aqi:res.data.result.aqi.aqi,
        primarypollutant:res.data.result.aqi.primarypollutant,
        quality:res.data.result.aqi.quality,
        timepoint:res.data.result.aqi.timepoint,
        level:res.data.result.aqi.aqiinfo.templevel,
        color:res.data.result.aqi.aqiinfo.color,
        affect:res.data.result.aqi.aqiinfo.affect,
        measure:res.data.result.aqi.aqiinfo.measure,
      });
    }
  })
  },
  getinformation_city:function(res){
  wx.request({
    url: getApp().globalData.myurl+'/weather/query?appkey='+getApp().globalData.appid+'&city='+this.data.city,
    method:'POST',
    success:(res)=>{
    console.log(res);
    this.setData({
      statu:2,
      weather:res.data.result.weather,
      city1:res.data.result.city,
      date:res.data.result.date,
      week:res.data.result.week,
      temp:res.data.result.temp,
      temphigh:res.data.result.temphigh,
      templow:res.data.result.templow,
      humidity:res.data.result.humidity,
      pressure:res.data.result.pressure,
      windspeed:res.data.result.windspeed,
      winddirect:res.data.result.winddirect,
      windpower:res.data.result.windpower,
      updatetime:res.data.result.updatetime,
      index:res.data.result.index,
      hourly:res.data.result.hourly,
      daily:res.data.result.daily,
      so2:res.data.result.aqi.so2,
      so224:res.data.result.aqi.so224,
      no2:res.data.result.aqi.no2,
      no224:res.data.result.aqi.no224,
      co:res.data.result.aqi.co,
      co24:res.data.result.aqi.co24,
      o3:res.data.result.aqi.o3,
      o38:res.data.result.aqi.o38,
      o324:res.data.result.aqi.o324,
      pm10:res.data.result.aqi.pm10,
      pm1024:res.data.result.aqi.pm1024,
      pm2_5:res.data.result.aqi.pm2_5,
      pm2_524:res.data.result.aqi.pm2_524,
      iso2:res.data.result.aqi.iso2,
      ino2:res.data.result.aqi.ino2,
      ico:res.data.result.aqi.ico,
      io3:res.data.result.aqi.io3,
      io38:res.data.result.aqi.io38,
      ipm10:res.data.result.aqi.ipm10,
      ipm2_5:res.data.result.aqi.ipm2_5,
      aqi:res.data.result.aqi.aqi,
      primarypollutant:res.data.result.aqi.primarypollutant,
      quality:res.data.result.aqi.quality,
      timepoint:res.data.result.aqi.timepoint,
      level:res.data.result.aqi.aqiinfo.templevel,
      color:res.data.result.aqi.aqiinfo.color,
      affect:res.data.result.aqi.aqiinfo.affect,
      measure:res.data.result.aqi.aqiinfo.measure,
    });
    }
    })
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
    this.get_ip().then(result => {
      this.getinformation_ip();
    });
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