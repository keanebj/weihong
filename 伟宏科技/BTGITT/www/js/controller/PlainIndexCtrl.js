/**
 * Created by zuoer on 2017/5/27.
 */
angular.module('starter.controllers')
  .controller('plainIndexCtrl',function($rootScope,$scope,Api,http,$state,$cacheFactory) {



    $scope.orgCity=$rootScope.subValue;
    $scope.desCity=$rootScope.backValue;

    $scope.oneway=function () {
      $(".plain_index_section_tab_oneway").addClass("active");
      $(".plain_index_section_tab_backtrack").removeClass("active");
      $("#plane_oneway").addClass("show");
      $("#plane_back").removeClass("show");
      $("#plain_index_query_back").removeClass("show");
      $("#plain_index_query").addClass("show");
    };
    $scope.back=function () {
      $(".plain_index_section_tab_backtrack").addClass("active");
      $(".plain_index_section_tab_oneway").removeClass("active");
      $("#plane_oneway").removeClass("show");
      $("#plane_back").addClass("show");
      $("#plain_index_query").removeClass("show");
      $("#plain_index_query_back").addClass("show");
    };
    $scope.tab_value=function () {
      var OrgCity=$("#orgCity").text();
      // console.log(OrgCity);
      var DesCity=$("#desCity").text();
      // console.log(DesCity);
      $scope.orgCity=DesCity;
      $scope.desCity=OrgCity;
    }


  });

