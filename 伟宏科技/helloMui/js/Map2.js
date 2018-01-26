//(function(BMap){  
//    
//  var control = BMap.Map.XGeolocationControl = function(){  
//      this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;  
//      this.defaultOffset = new BMap.Size(10, 50);  
//  }  
//    
//  control.prototype = new BMap.Control();  
//    
//  control.prototype.locate=function(cb){  
//      _locate(this.map,this.controlPane.querySelector(".BMap_geolocationContainer"),cb);  
//        
//  };  
//  control.prototype.getMap=function(){  
//      return this.map;  
//  };  
//  control.prototype.setOnLocateComplete=function(fn){  
//      if(typeof(fn)=="function"){  
//          this.locateComplete = fn;  
//      }  
//  };  
//  control.prototype.initialize = function(map){  
//      this.map = map;  
//      var div = document.createElement("div");  
//        
//      div.innerHTML=  
//          '<div class="BMap_geolocationIconBackground" style="height: 32px; background-image: url(http://api0.map.bdimg.com/images/geolocation-control/mobile/gradient-bg-1x64.png); background-size: 1px 32px; background-repeat: repeat-x;">'+  
//              '<div class="BMap_geolocationIcon" style="width: 32px; height: 32px; cursor: pointer; background-image: url(http://api0.map.bdimg.com/images/geolocation-control/mobile/fail-40x40.png); background-size: 20px 20px; background-position: 50% 50%; background-repeat: no-repeat;"></div>'+  
//          '</div>'+  
//          '<div class="BMap_geolocationAddress" style="padding:0 10px 0 10px;background:#FFF;display:-webkit-box;-webkit-box-align:center; box-sizing:border-box;border-left-width: 1px; border-left-style: solid; border-left-color: rgb(217, 215, 213); background-image: url(http://api0.map.bdimg.com/images/geolocation-control/mobile/gradient-bg-1x64.png); background-size: 1px 32px; background-repeat: repeat-x;">'+  
//          '   <div class="BMap_geolocationAddressText" style="text-align:center;font-size: 12px; color: #666666; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block; min-width: 50px; max-width: 400px;"></div>'+  
//          '</div>';  
//      div.className = "BMap_geolocationContainer";  
//      div.setAttribute("style",'-webkit-transition:width 0.2s ease-in;height: 32px;;width:34px;display: -webkit-box; margin: 0px; box-sizing: border-box; border: 1px solid #d9d7d5; border-radius: 3px; -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.2); overflow: hidden;')  
//      var geolocation = div.querySelector(".BMap_geolocationIcon");  
//      var address = div.querySelector(".BMap_geolocationAddress");  
//      var text = div.querySelector(".BMap_geolocationAddressText");  
//      map.getContainer().appendChild(div);  
//      var $this = this;  
//      geolocation.addEventListener("click", function(e){  
//          _locate(map,div,$this.locateComplete);  
//      });  
//      this.controlPane = div.parentElement;  
//      return div;  
//  };  
//    
//  var mk = null;  
//  function _locate(map,div,cb){  
//        
//      if(mk){  
//          map.removeOverlay(mk);  
//          mk.disableMassClear();  
//      }   
//        
//        
//      var geolocation = div.querySelector(".BMap_geolocationIcon");  
//      var address = div.querySelector(".BMap_geolocationAddress");  
//      var text = div.querySelector(".BMap_geolocationAddressText");  
//        
//      div.style.width= "34px";  
//      text.innerText="";  
//      geolocation.style.backgroundImage = "url(http://api0.map.bdimg.com/images/geolocation-control/mobile/loading-40x40.gif)";  
//        
//      Towery.locate({  
//          success:function(position){  
//              if(cb) cb({  
//                  status:0,  
//                  result:position  
//              });  
//              geolocation.style.backgroundImage = "url(http://api0.map.bdimg.com/images/geolocation-control/mobile/success-40x40.png)";  
//
//              var coords = position.coords;  
//              var lon = coords.longitude;  
//              var lat = coords.latitude;  
//              var point = new BMap.Point(lon,lat);  
//                    
//              var myIcon = new BMap.Icon(Towery.getFullPath("MobileCRMDistrict/images/location-ico.svg"),new BMap.Size(16, 16));  
//                
//              mk = new BMap.Marker(point,{icon:myIcon});  
//              var label = new BMap.Label("我在这里",{  
//                  offset:new BMap.Size(-18,-20)  
//              });  
//                
//              label.setStyle({  
//                  padding:"0px",  
//                  border:"solid 1px orangered",  
//                  background:"rgba(255,255,255,0.5)"  
//              });  
//              mk.setTop(true);  
//              mk.setLabel(label);  
//              map.addOverlay(mk);  
//              map.panTo(point);  
//                
//              if(position.addresses){  
//                  text.innerText=position.addresses;  
//                  var w = text.offsetWidth;  
//                  div.style.width=34 +(w +20)+"px" ;  
//              }  
//          },  
//          error:function(e){  
//              if(cb) cb({  
//                  status:-1,  
//                  result:e  
//              });  
//              plus.nativeUI.toast("无法获取您的位置,请打开GPS并授予此应用权限,必要时移至室外或移动、WIFI信号好的位置!",{duration:"long"});  
//              geolocation.style.backgroundImage = "url(http://api0.map.bdimg.com/images/geolocation-control/mobile/fail-40x40.png)";  
//              console.log(Towery.pretty(e))  
//          }  
//      },{  
//          provider: "baidu",  
//          coordsType:"bd09ll"  
//      });   
//  }  
//    
//})(BMap);  
//


//
//(function () {
//      var
//          isGeolocation = false,
//          lat = 0,
//          lng = 0,
//          coords = null;
//          
//      if (navigator.geolocation) { isGeolocation = true; };
//      if (isGeolocation) {
//          function getPosSuccess(position) {
//              coords = position.coords;
//              lat = coords.latitude, lng = coords.longitude;
//              $.ajax({
//                  type: 'GET',
//                  dataType: 'json',
//                  url: '/Home/GetPositionArea',
//                  data: { 'lat': lat, 'lng': lng },
//                  success: function (data) {
//
//                  }
//              });
//          };
//          function getPosError(err) {
//              switch (err) {
//                  case err.PERMISSION_DENIED:
//                      console.log("您拒绝了共享位置，可手动选择城市。");
//                      break;
//                  case err.POSITION_UNAVAILABLE:
//                      console.log("无法获取当前位置");
//                      break;
//                  case err.TIMEOUT:
//                      console.log("获取位置超时");
//                      break;
//                  default:
//                      console.log("未知错误");
//                      break;
//              }
//              
//          };
//          navigator.geolocation.getCurrentPosition(getPosSuccess, getPosError, null);
//      } else {
//          
//      };
//
//  })();
//















