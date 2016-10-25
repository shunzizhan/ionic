angular.module('starter.controllers', [] )
.controller('AppCtrl', [
  '$rootScope',
  '$scope',
  'db',
  'BASE_INFO',
  'PlayLists',
  function($rootScope,$scope,db,BASE_INFO,PlayLists) {
    // db.set('openApp',new Date);  //记录开启app时间
    //全局跳转
    // alert(db.get('openApp'));
    $rootScope.go = function(url){
      $state.go(url);
    }
    // 获取首页列表
    // $scope.playlists = PlayLists.all();
  }])


angular.module('starter.controllers_zcb', [])
//我的工作间
.controller('PlaylistsCtrl',['$rootScope','$scope','PlayLists','$http','$filter',function($rootScope,$scope,PlayLists,$http,$filter) {
  $scope.orderType = "pr";  //申明列表排序规则
  // alert(12);
  $scope.playlists = PlayLists.all();
}])