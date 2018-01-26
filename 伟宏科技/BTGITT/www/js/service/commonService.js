angular.module('starter.controllers')
  .service('http', function($q, $http, Config, $ionicLoading) {
    return {//这个服务封装了加载中的提示和加载后的提示，如果不需要，通过传入第3个参数可以灵活设置比如http.load('url',{},{disableLoadingMsg:true})
    //方法的返回值是一个Promise，可以在调用这个方法调用后再处理
      load: function(key, params, config) {
        /*
        读取接口数据，config支持属性：
        disableLoadingMsg 是否禁用loading提示
        loadingMsg 加载中的提示信息
        disableSuccessMsg 是否禁用成功提示
        successMsg 成功的提示信息
        successDuration 成功提示的持续时间，单位毫秒
        disableErrorMsg 是否禁用失败提示
        errorMsg 失败的提示信息
        errorDuration 失败提示的持续时间，单位毫秒
        */
        var deferred = $q.defer();
        config = angular.extend({
          disableLoadingMsg: false,
          loadingMsg: '加载中，请稍候...',
          disableSuccessMsg: false,
          successDuration: 1000,
          errorDuration: 2000,
          disableErrorMsg: true
        }, config);

        if (!config.disableLoadingMsg) {
          $ionicLoading.show({
            template: config.loadingMsg
          });
        }

        $http.get(Config.url(key), {
          params:angular.extend({
            apiKey : Config.apiKey
          }, params)
        }).then(function(rep) {
            if (config.disableSuccessMsg || !(config.successMsg || (rep.data.result&&rep.data.result.message))) {
              $ionicLoading.hide();
            } else {
              $ionicLoading.show({
                template: config.successMsg || rep.data.message,
                duration: config.successDuration
              });
            }
            deferred.resolve(rep);
        }, function(err) {
          deferred.reject(err);
          $ionicLoading.hide();
        });
        return deferred.promise;
      }
    };
  })
  .service('Session', function($http, $rootScope) {
    var service = this;
    var ssdata;
    if (localStorage.ssdata) {
      ssdata = JSON.parse(localStorage.ssdata);
    } else {
      ssdata = {
        user: {}
      };
    }

    service.regUser = function(data) {
      service.set(data.result.user).set('token', data.result.token).set('currentUserId',data.result.user.userId);
      $rootScope.ssdata = ssdata;
      $http.defaults.headers.common.Authorization = 'Bearer ' + data.result.token;
    };

    service.set = function(key, val) {
      if (typeof(val)=='undefined') {
        ssdata = arguments[0];
        localStorage.ssdata = JSON.stringify(ssdata);
      } else {
        if (!localStorage.ssdata) {
          localStorage.setItem("ssdata", '{}');
        }
        var tempObj = JSON.parse(localStorage.ssdata);
        tempObj[key] = val;
        localStorage.ssdata = JSON.stringify(tempObj);
        ssdata = JSON.parse(localStorage.ssdata);
      }
      return service;
    };

    service.get = function(key) {
      return key ? ssdata[key] : ssdata;
    };

    service.remove = function(key) {
      if (!localStorage.ssdata) {
        return service;
      }
      var tempObj = JSON.parse(localStorage.ssdata);
      delete tempObj[key];
      localStorage.ssdata = JSON.stringify(tempObj);
      ssdata = JSON.parse(localStorage.ssdata);
      return service;
    };

    service.clean = function() {
      ssdata = {};
      localStorage.setItem("ssdata", '{}');
      return service;
    };
  })
  .service('popupHelper', function($q, $ionicPopup) {
    return {
      showConfirm: function($scope, template) {
        $scope._popup = {
          'isPopup': false
        };

        var deferred = $q.defer();

        $scope._popup.result = $ionicPopup.confirm({
          template: template, //'确认吗?',
          okText: '确定',
          okType: 'button-positive',
          cancelText: '取消',
          cancelType: 'button-default'
        });

        $scope._popup.result.then(function(res) {
          if (res) {
            deferred.resolve();
          } else {
            deferred.reject();
          }
        });

        $scope._popup.isPopup = true;

        return deferred.promise;
      }
    };
  });
