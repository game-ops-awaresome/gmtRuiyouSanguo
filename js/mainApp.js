var app=angular.module("mainApp",["ngRoute"]);app.run(["$rootScope",function(e){e.user={id:$("#userid").length>0?$("#userid").val():0,name:$("#username").length>0?function(e){return e.length>0?e[0].toUpperCase()+e.substring(1,e.length):e}($("#username").val()):"",email:$("#useremail").length>0?$("#useremail").val():"",role:$("#userrole").length>0?$("#userrole").val():""},e.getParameterByName=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}}]),app.service("userService",["$http","$rootScope",function(e,t){this.logout=function(){return e({url:"protected/actions/user.php?action=logout",method:"GET"})},this.setActive=function(){if(t.user.id>0)return e({url:"protected/actions/user.php?action=set-active",method:"GET"})}}]),app.directive("onFinishRender",["$timeout",function(e){return{restrict:"A",link:function(t,n,r){!0===t.$last&&e(function(){t.$emit("ngRepeatFinished",n)})}}}]),app.directive("bnDocumentClick",["$document","$parse",function(e,t){return function(n,r,i){var o=i.bnDocumentClick,c=t(o);e.on("click",function(e){n.$apply(function(){c(n,{$event:e})})})}}]),app.service("inspireService",["$http","$rootScope",function(e,t){this.getInspireData=function(){return e({url:"protected/app/svcs/inspire/getInspireData.php",method:"GET"})},this.getDevices=function(t,n){return e({url:"protected/app/svcs/getBannerSizes.php",method:"GET"})}}]);
