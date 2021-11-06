// pages/login3/login3.js
var app = getApp()
Page({
  GetUserInfo(e) {
    wx.getUserProfile({
      desc:'用于个人信息的完善',//不写不弹提示框
      success:function(res){
        console.log('获取成功: ',res)
        //console.log(e);
     const  userInfo=res.userInfo;
     // console.log(userInfo);
     console.log(userInfo);
      wx.setStorage( {key: 'userinfo', data: userInfo});
      wx.switchTab({
        url: '/pages/dynamic/dynamic',
      })
      },
      fail:function(err){
        console.log("获取失败: ",err)
      }
    })
     
  },
})