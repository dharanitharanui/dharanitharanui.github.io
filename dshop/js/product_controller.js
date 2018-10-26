app.controller("productController",['$scope',function($scope){

  $scope.products = [
    {
      "product_id":1,
      "product_name":"Moto X4",
      "product_price":10999,
      "product_image":"images/1.jpg"

    },
    
    {
      "product_id":3,
      "product_name":"OPPO a71",
      "product_price":13999,
      "product_image":"images/4.jpg"
    },
    {
      "product_id":2,
      "product_name":"Vivo v9",
      "product_price":11999,
      "product_image":"images/2.jpg"
    },
    {
      "product_id":3,
      "product_name":"Honor 9",
      "product_price":12999,
      "product_image":"images/3.jpg"
    },
    {
      "product_id":4,
      "product_name":"Nokia 6.1",
      "product_price":11999,
      "product_image":"images/5.jpg"
    },
    {
      "product_id":5,
      "product_name":"Moto C+",
      "product_price":9999,
      "product_image":"images/2.jpg"
    },
    {
      "product_id":6,
      "product_name":"Sony Xperia",
      "product_price":14999,
      "product_image":"images/3.jpg"
    },
    {
      "product_id":7,
      "product_name":"Vivo V71",
      "product_price":15999,
      "product_image":"images/4.jpg"
    },
    {
      "product_id":4,
      "product_name":"Nokia 6.1",
      "product_price":11999,
      "product_image":"images/5.jpg"
    },

    {
      "product_id":7,
      "product_name":"Vivo V71",
      "product_price":15999,
      "product_image":"images/4.jpg"
    },
    {
      "product_id":5,
      "product_name":"Moto C+",
      "product_price":9999,
      "product_image":"images/2.jpg"
    },
    {
      "product_id":6,
      "product_name":"Sony Xperia",
      "product_price":14999,
      "product_image":"images/3.jpg"
    }
    
    
    
  ];

  $scope.cart = [];

  $scope.addToCart = function(productIndex){
    alert("Added to Cart")
    $scope.cart.push($scope.products[productIndex]);
  };

  $scope.removeItem = function(itemIndex){
    $scope.cart.splice(itemIndex,1);
  };

  $scope.getTotal = function(){
    var total = 0;
    angular.forEach($scope.cart,function(value){
      total = total + value.product_price;
    });

    return total;
  };

}]);