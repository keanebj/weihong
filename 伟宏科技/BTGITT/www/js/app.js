// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular-md5'])

  .run(function ($ionicPlatform, $rootScope, $ionicHistory, $state) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $rootScope.systemParams = {
      tripType: 0,
      showedWelcome: 0
    };

    // var noNeedLoginView = ["welcome", "login"];
    // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
    //   if (noNeedLoginView.indexOf(toState.name) < 0 &&
    //     ($rootScope.currentUser === null || $rootScope.currentUser === undefined)) {//判断当前是否登录
    //     $state.go("login");//跳转到登录页
    //     event.preventDefault(); //阻止默认事件，即原本页面的加载
    //   }
    // })
  })


  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(true);

    $ionicConfigProvider.backButton.text('');
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'UserCtrl'
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('tab.home', {
        url: '/home',
        views: {
          'home-index': {
            templateUrl: 'templates/tab/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.itinerary', {
        url: '/itinerary',
        views: {
          'home-index': {
            templateUrl: 'templates/tab/tab-itinerary.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      .state('tab.customerService', {
        url: '/customerService',
        views: {
          'home-index': {
            templateUrl: 'templates/tab/tab-customerService.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })


      .state('tab.mine', {
        url: '/mine',
        views: {
          'home-index': {
            templateUrl: 'templates/tab/tab-mine.html',
            controller: 'UserCtrl'
          }
        }
      })

    
      .state('plane-index', {
        url: '/plane-index',
        templateUrl: 'templates/planeTicket/plane-index.html',
        controller: 'plainIndexCtrl'
      })


      .state('plane-oneway', {
        url: '/plane-oneway',
        templateUrl: 'templates/planeTicket/plane-oneway.html',
        controller: 'PlainOneWayCtrl'
      })

      .state('plane-back-search', {
        url: '/plane-back-search',
        templateUrl: 'templates/planeTicket/plane-back-search.html',
        controller: 'PlaneBackSearchCtrl'
      })

      .state('plane-oneway-class', {
        url: '/plane-oneway-class',
        templateUrl: 'templates/planeTicket/plane-oneway-class.html',
        controller: 'PlainOneWayClassCtrl'
      })

      .state('plane-person-add', {
        url: '/plane-person-add',
        templateUrl: 'templates/planeTicket/plane-person-add.html',
        controller: 'PlainPersonAddCtrl'
      })

      .state('plane-person-add-up-sub', {
        url: '/plane-person-add-up-sub',
        templateUrl: 'templates/planeTicket/plane-person-add-up-sub.html',
        controller: 'PlainPersonAddUpSubCtrl'
      })

      .state('plane-person-add-sub', {
        url: '/plane-person-add-sub',
        templateUrl: 'templates/planeTicket/plane-person-add-sub.html',
        controller: 'PlainPersonAddSubCtrl'
      })


      .state('plane-city', {
        url: '/plane-city',
        templateUrl: 'templates/planeTicket/plane-city.html',
        controller: 'PlaneCityCtrl'
      })

      ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('welcome');

  });

angular.module('starter.controllers', []);
angular.module('starter.directives', []);
angular.module('starter.services', []);
