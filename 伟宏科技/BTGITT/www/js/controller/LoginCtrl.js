angular.module('starter.controllers')
.controller('LoginCtrl', function($scope, $state, Api, $rootScope, http, md5, $ionicViewSwitcher, $ionicLoading) {
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function () {
    Api.checkBeforePost(function(){
      if($scope.user.username.length==0){
        return '请输入用户名';
      }
      if($scope.user.password.length==0){
        return '请输入密码';
      }
    }).then(function(){
      Api.login($scope.user.username,md5.createHash($scope.user.password)).then(function(rep){
        var result = {
          'Unauthorized': '未授权用户',
          'error': '用户名/密码错误',
          null: '用户名或密码为空'
        };

        if(rep.data.loginStatus!='ok'){
          $ionicLoading.show({
            template: result[rep.data.loginStatus],
            duration: 1500
          });
        }else{
          $ionicLoading.hide();
          $ionicViewSwitcher.nextDirection("forwoard");
          $state.go('tab.home');
        }
      });
    })
  };
});
