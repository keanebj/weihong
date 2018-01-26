/* 
* @Author: Marte
* @Date:   2017-06-02 14:17:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-02 14:18:52
*/

angular.module('starter.controllers')
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  });