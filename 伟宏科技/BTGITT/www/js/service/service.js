angular.module('starter.controllers')
  .service('Api', function($q, http, Session, $timeout, $ionicLoading) {
    var resendSecond = 10,
      secondLeft = resendSecond,
      isGettingCode = false;
    return {
      login: function(uid, pwd) {
        return http.load('login', {
          userName: uid,
          passWord: pwd
        }, {
          loadingMsg: '登录中'
        });
      },

      //用户查询国内航班时间、价格及仓位。
      getAirFlightShopD_D: function(orgCity,desCity,depDate,dCH,dIN,journeyTypeExt,username){
        //因为apiKey在http服务里面自动会加上，所以这里并不需要传入，这也是套一层服务的好处之一
        return http.load('AirFlightShopD_D',{
          orgCity:orgCity,
          desCity:desCity,
          depDate:depDate,
          dCH:dCH,
          dIN:dIN,
          journeyTypeExt:journeyTypeExt,
          username:username
        });
      },



        //获取航班时刻表。
      getAirSchedule: function(orgCity,desCity,depDate){
        //因为apiKey在http服务里面自动会加上，所以这里并不需要传入，这也是套一层服务的好处之一
        return http.load('AirSchedule',{
          orgCity:orgCity,
          desCity:desCity,
          depDate:depDate
        });
      },

      checkBeforePost: function(checkFun) {
        var deferred = $q.defer();
        $timeout(function() {
          var errMsg = checkFun.call(this);
          if (errMsg) {
            $ionicLoading.show({
              template: errMsg,
              duration: 1000
            });
            deferred.reject();
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      }
    };
  });
