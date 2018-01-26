angular.module('starter.controllers')
.controller('UserCtrl', function($scope, $state, $rootScope, $http, $ionicLoading, $ionicPopup, md5) {
  console.log($rootScope.currentUser);
  $scope.user = {
    userName: '',
    password: ''
  };

  $scope.login = function () {
    $rootScope.currentUser = $scope.user;
    $scope.user = {
      userName: '',
      password: ''
    };
    // $state.go('tab.home');
    $ionicLoading.show({
      scope: $scope,
      template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner><br/>登录中'
    });
    $http({
      method: "GET",
      url: "http://test1.btogo.com.cn/API/V1/loginVerify/",
      params: {
        'userName': 'test123',
        'passWord': 'cc03e747a6afbbcbf8be7668acfebee5',
        // 'userName': $scope.user.userName,
        // 'passWord': md5.createHash($scope.user.password || ''),
        'apiKey': '923853c569e146cbd2a1219cb28f3b3b'
      }
    }).then(function (resp) {
      if (resp.data.loginStatus == 'ok') {
        $state.go('tab.home');
      } else {
        $ionicPopup.alert({
          title: '登录提示',
          template: '用户名或密码错误'
        });
      }
    }).finally(function () {
        $ionicLoading.hide();
    });
  };

  // $scope.manage = {
  //   doRefresh:function(){
  //     $timeout(function(){
  //       $scope.$broadcast('scroll.refreshComplete');
  //     },2000);
  //     $http({
  //       method: "GET",
  //       url: "http://localhost:8080/user/list"
  //     }).success(function (data, status) {
  //       $scope.userList = data;
  //     }).error(function (data, status) {
  //       $ionicPopup.alert({
  //         title:'提示',
  //         template: data.message
  //       });
  //     });
  //   },
  //   showDelete:function(){
  //     $scope.showDelete = true;
  //   },
  //   hideDelete:function(){
  //     $scope.showDelete = false;
  //   },
  //   doDelete:function($index){
  //     $http({
  //       method: "DELETE",
  //       url: "http://localhost:8080/user/delete/" + $index,
  //     }).success(function (data, status) {
  //
  //     }).error(function (data, status) {
  //       $ionicPopup.alert({
  //         title:'提示',
  //         template: data.message
  //       });
  //     }).finally(function () {
  //       $http({
  //         method: "GET",
  //         url: "http://localhost:8080/user/list"
  //       }).success(function (data, status) {
  //         $scope.userList = data;
  //       }).error(function (data, status) {
  //         $ionicPopup.alert({
  //           title:'提示',
  //           template: data.message
  //         });
  //       });
  //     });
  //   },
  //   showOptions:function($event){
  //     if($($event.target).parent().prev().hasClass('invisible')){
  //       $($event.target).parent().css({transform:'translate3d(-89px, 0px, 0px)'}).prev().removeClass('invisible');
  //     }else{
  //       $($event.target).parent().css({transform:''}).prev().addClass('invisible');
  //     }
  //   }
  // };

  $scope.logout = function () {
    $rootScope.currentUser = null;
    // window.localStorage.removeItem("didWelcome");
    $state.go('login');
  }



  $scope.mineMenuMessageClick = function () {
    console.log("mineMenuMessageClick");
  }
  $scope.mineMenuProfileClick = function () {
    console.log("mineMenuProfileClick");
  }
  $scope.mineMenuOrdersClick = function () {
    console.log("mineMenuOrdersClick");
  }
  $scope.mineMenuPasswordClick = function () {
    console.log("mineMenuPasswordClick");
  }
  $scope.mineMenuCardClick = function () {
    console.log("mineMenuCardClick");
  }
  $scope.mineMenuApprovalClick = function () {
    console.log("mineMenuApprovalClick");
  }
});
