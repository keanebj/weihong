/* 
* @Author: Marte
* @Date:   2017-06-02 14:17:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-02 14:19:17
*/
angular.module('starter.controllers')
 .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })