angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "templates/about.html"
                    }
                }
            })


        $urlRouterProvider.otherwise("/tab/home");

    })
    .factory('Mydate',function () {
        return {
            boots:[{
                id:433,
                name:'乐事薯片',
                quantity:1,
                price:10
            },
                {
                    id:434,
                    name:'友臣糕点',
                    quantity:1,
                    price:10
                },
                {
                    id:435,
                    name:'beats耳机',
                    quantity:1,
                    price:999
                },
                {
                    id:436,
                    name:'小灵通',
                    quantity:1,
                    price:300
                },
                {
                    id:437,
                    name:'诺华神00',
                    quantity:1,
                    price:5000
                }],
            cart:[]
        }
    })

    .controller('HomeTabCtrl', function($scope) {
    })
    .controller('firstController',function ($scope,Mydate) {
        /*购物车物品*/
        $scope.Mydata = Mydate;


        /*产品总价*/
        $scope.totalPrice = function () {
            var total = 0;
            angular.forEach($scope.Mydata.cart,function(item){
                total+=item.quantity*item.price;
            });
            return total;
        };

        /*产品总数*/
        $scope.totalQuantity = function(){
            var total = 0;
            angular.forEach($scope.Mydata.cart,function(item){
                total+=parseInt(item.quantity);
            });
            return total;
        };

        //移除产品
        $scope.remove = function(id){
            var index =  findIndex(id);
            if(index != -1){
                $scope.Mydata.cart.splice(index,1)
            }
        };

        //增加数量
        $scope.add = function(id){
            var index = findIndex(id);
            if(index != -1){
                $scope.Mydata.cart[index].quantity++;
            }
        };

        /*添加产品*/
        $scope.get = function (id) {
            var index =  getcart(id);
            console.log(index);
            if(index!= -1){
                $scope.add(id);
                alert('该商品加1')
            }else{
                var temp = getboot(id);
                console.log(temp);
                var content = {
                    id:$scope.Mydata.boots[temp].id,
                    name:$scope.Mydata.boots[temp].name,
                    quantity:1,
                    price:$scope.Mydata.boots[temp].price
                };
                $scope.Mydata.cart.push(content);
                console.log('新增'+id);
                alert("新增产品"+id);

            }
        };

        var getboot = function (id) {
            var index = -1;
            angular.forEach($scope.Mydata.boots,function(item,key){
                if(item.id == id){
                    index = key;
                }
            });

            return index;

        };

        var getcart = function (id) {
            var index = -1;
            angular.forEach($scope.Mydata.cart,function(item,key){
                if(item.id == id){
                    index = key;
                }
            });
            return index;
        };


        $scope.reduce = function(id){
            var index = findIndex(id);
            if(index != -1){
                var item = $scope.Mydata.cart[index];
                if(item.quantity >1) {
                    item.quantity--;
                }
                else{
                    var returnKey = confirm('是否从购物车删除该产品?');
                    if(returnKey)
                        $scope.Mydata.remove(id);
                }
            }
        };

        var findIndex = function(id){
            var index = -1;
            angular.forEach($scope.Mydata.cart, function(item, key){

                if(item.id == parseInt(id)){
                    index = key;
                }
            });
            return index;
        };

        $scope.$watch('cart',function(newValue, oldValue){
            angular.forEach(newValue,function(item, key){
                if(item.quantity < 1){
                    var returnKey = confirm('是否从购物车中删除该产品?');
                    if(returnKey)
                        $scope.remove(item.id);
                    else{
                        item.quantity = oldValue[key].quantity;

                    }

                }
            })
        },true);
    });