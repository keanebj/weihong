
angular.module('starter.controllers')
    .controller('PlaneCityCtrl', function($scope,$http,$rootScope,$ionicHistory) {
        $http.get("../../data/hotcity.xml",  {
          transformResponse: function (cnv) {
            var x2js = new X2JS();
            var aftCnv = x2js.xml_str2json(cnv);
            return aftCnv;
          }
        })
          .success(function (response) {
            console.log(response);

            $scope.Keys={};
            response.ArrayOfQueryResult.QueryResult.forEach(o=>{
              $scope.Keys[o.Key]=o;
            })
            console.log($scope.Keys);
          })


      var goCity ;
      var backCity;

      $scope.cityValue=function ($event) {
        var a=$event.target.innerHTML;
        $rootScope.subValue=a;
        console.log(a);
        $ionicHistory.goBack();
        }

     /* $scope.backValue=function ($event) {
        var b=$event.target.innerHTML;
        $rootScope.backValue=b;
        console.log(b)
        $ionicHistory.goBack();
      }
*/


 });

