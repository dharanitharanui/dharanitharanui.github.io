var app = angular.module('angularModule',[]);

$(document).ready(function(){
  $("#itemNotification").click(function(){
    $(".itemDetailsBlock").toggle(1000);
  });
});

$(document).ready(function(){
  $(".closePopup").click(function(){
    $(".itemDetailsBlock").hide(1000);
  });
});

