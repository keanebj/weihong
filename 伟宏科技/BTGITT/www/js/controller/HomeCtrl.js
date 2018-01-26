angular.module('starter.controllers')
.controller('HomeCtrl', function($rootScope, $scope, $state, $http, $ionicLoading, $ionicPopup, md5) {
  $scope.init = function () {
    $scope.setTripTypeBusiness();
  }

  $scope.setTripTypeBusiness = function () {
    $rootScope.systemParams.tripType = 0;
    var tripTypeBusiness = angular.element('#divTripTypeBusiness');
    var tripTypePersonal = angular.element('#divTripTypePersonal');
    if (!tripTypeBusiness.hasClass('trip_type_active')){
      tripTypeBusiness.addClass('trip_type_active')
    }
    if (tripTypePersonal.hasClass('trip_type_active')){
      tripTypePersonal.removeClass('trip_type_active')
    }
  }
  $scope.setTripTypePersonal = function () {
    $rootScope.systemParams.tripType = 1;
    var tripTypeBusiness = angular.element('#divTripTypeBusiness');
    var tripTypePersonal = angular.element('#divTripTypePersonal');
    if (tripTypeBusiness.hasClass('trip_type_active')){
      tripTypeBusiness.removeClass('trip_type_active')
    }
    if (!tripTypePersonal.hasClass('trip_type_active')){
      tripTypePersonal.addClass('trip_type_active')
    }
  }

  $scope.login = function () {
        // $state.go('tab.home');
    // $ionicLoading.show({
    //   scope: $scope,
    //   template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner><br/>登录中'
    // });
    // $http({
    //   method: "GET",
    //   url: "http://test1.btogo.com.cn/API/V1/loginVerify/",
    //   params: {
    //     // 'userName': 'test123',
    //     // 'passWord': 'cc03e747a6afbbcbf8be7668acfebee5',
    //     'userName': $scope.user.userName,
    //     'passWord': md5.createHash($scope.user.password || ''),
    //     'apiKey': '923853c569e146cbd2a1219cb28f3b3b'
    //   }
    // }).then(function (resp) {
    //   if (resp.data.loginStatus == 'ok') {
    //     $state.go('tab.home');
    //   } else {
    //     $ionicPopup.alert({
    //       title: '登录提示',
    //       template: '用户名或密码错误'
    //     });
    //   }
    // }).finally(function () {
    //     $ionicLoading.hide();
    // });
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

  $scope.homeMenuTrainClick = function () {
    console.log("homeMenuTrainClick");
  };

  $scope.homeMenuVisaClick = function () {
    console.log("homeMenuVisaClick");
  };

  $scope.homeMenuPlainClick = function () {
    console.log("homeMenuPlainClick");
  };

  $scope.homeMenuCarClick = function () {
    console.log("homeMenuCarClick");
  };

  $scope.homeMenuHotelClick = function () {
    console.log("homeMenuHotelClick");
  };
});
