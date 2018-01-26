angular.module('starter.controllers')
.controller('WelcomeCtrl', function ($scope, $rootScope, $state) {
  if ($rootScope.systemParams.showedWelcome) {
    $state.go('');
  } else {
    // $scope.displayCountDown();
    countDown();
  }
})
;
