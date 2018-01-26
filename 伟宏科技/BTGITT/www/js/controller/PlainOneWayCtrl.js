// angular.module('starter.controllers')
//   .controller('PlainOneWayCtrl', function($scope,Api,http,$state) {
//     Api.getAirSchedule('北京','上海','2017-06-08').then(function(rep){
//       console.log(rep.data);
//       if(rep.data.Code==200){
//         $scope.airSchedule = rep.data.AirScheduleRS;
//       }else{
//         $scope.airSchedule = [];
//       }
//     })
//   });


// /API/V1/AirFlightShopD_D"


angular.module('starter.controllers')
  .controller('PlainOneWayCtrl', function ($scope, Api, http, $state, $rootScope, $cacheFactory) {

    //  $scope.cabins=[
    //   {'Y':"经济舱"},
    //   {"F":"商务舱"},
    //   {'p':'头等舱'},
    //   {'J':"vip"}
    // ];


    Api.getAirFlightShopD_D('北京', '上海', '2017-06-15', "false", "false", "0", "test123").then(function (rep) {
      console.log(rep.data);

      // $scope.list = [];
      // rep.data.AvJourneys.forEach(o => {
      //   $scope.list = $scope.list.concat(o.AvJourney)
      // });
      //
      // console.log($scope.list)

      $scope.seqByRPH = {};
      rep.data.PsAvBinds.forEach(o => {
        $scope.seqByRPH[o.avRPH[0]] = o.seq;
      });

      console.log($scope.seqByRPH);


      $scope.PSnBySeq = {};
      rep.data.PSn.forEach(psn => {
        $scope.PSnBySeq[psn.seq] = psn;
      });
      console.log($scope.PSnBySeq);

      $scope.airwayArrMap = {};
      rep.data.airwayArr.forEach(o => {
        $scope.airwayArrMap[o.code] = o;
      });

      console.log($scope.airwayArrMap);
      $scope.cityArrMap = {};
      rep.data.cityArr.forEach(o => {
        $scope.cityArrMap[o.code] = o;
      });
      console.log($scope.cityArrMap)

      $scope.CabinFaresMap = {};
      rep.data.PSn.forEach(o => {
        $scope.CabinFaresMap[o.CabinFares] = o;
      })

      console.log($scope.CabinFaresMap);

      // console.log(rep.data.PSn);
      if (rep.data.Code == 200) {
        $scope.airFlightShopD_D = rep.data.AvJourneys;
        // console.log($scope.airFlightShopD_D);
      } else {
        $scope.airFlightShopD_D = [];
      }
    });


  });
