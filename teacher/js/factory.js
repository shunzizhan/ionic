angular.module('starter.services_zcb', [])
//我的工作间列表数据
.factory("PlayLists", function() {

    var playlists = [
      { title: '在读班级',alias:'house',ico:"img/ico-1.jpg", id: 1 ,pr:1},
      { title: '我要考试',alias:'sell',ico:"img/ico-3.jpg", id: 3,pr:3 },
      { title: '我要报班',alias:'mortgage',ico:"img/ico-4.jpg", id: 4 ,pr:4},
      { title: '上课提醒',alias:'taxes',ico:"img/ico-5.jpg", id: 5,pr:5 },
      { title: '最新通知',alias:'record',ico:"img/ico-6.jpg", id: 6 ,pr:6},
      { title: '成绩查询',alias:'rentalhouse',ico:"img/ico-7.jpg", id: 7 ,pr:1},
      { title: '历史曾读班级',alias:'bill',ico:"img/ico-8.jpg", id: 8 ,pr:8}
    ];
    return {
      all: function() {
        return playlists;
      }
    }
})
//本地数据库操作方法
.factory('db', function(){
  return {
    get : function(key){
      var data = window.localStorage[key] || "";
      return data;
    },
    set : function(key,data){
      if(typeof(data) == "object"){
        window.localStorage[key] = data;
        for(item in data){
          window.localStorage[item] = data[item];
        }
      }else{
        window.localStorage[key] = data;
      }
    },
    remove : function(key){
      //console.log("close:"+key);
      window.localStorage.removeItem(key);
    }
  };
})