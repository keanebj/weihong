angular.module('starter.controllers')
  .constant('Config', {
    apiKey: '923853c569e146cbd2a1219cb28f3b3b',
    Server:'http://test1.btogo.com.cn',
    // Server:'http://127.0.0.1:8888',//代理服务器地址，请运行node mock
    urls:{
      login:'/API/V1/loginVerify/',
      AirSchedule:"/API/V1/AirSchedule/",
      AirFlightShopD_D:"/API/V1/AirFlightShopD_D/"
    },
    url: function(key){
      return this.Server + this.urls[key];
    }
  });
;
