var myApp = angular.module("myApp", ["ngRoute"]);

//provider

//myApp.provider("sinhvien",function() {

    // var title = '';
    // return {
    //     $get : function(){
    //         return {
    //             setTitle : function(value) {
    //                 title = value;
    //             }
    //             add : function() {
    //                 alert(title);
    //             },

    //             remove : function() {
    //                 alert(title);
    //             },


    //             add : function() {
    //                 alert(title);
    //             }
    //         }
    //     }
    // };
//});
//Bài 36: write factory

myApp.factory('sinhvien',function(){
    var service = {};

    service.add = function(){
        alert('Add');
    };

    service.remove = function(){
        alert('remove');
    };

    service.edit = function(){
        alert('eidt');
    };

    return service;
});

//Bai35: write a service

myApp.service('sinhvien_tmp',function($timeout){
    this.add = function(){
         $timeout(function(){
            alert('add');
        },3000);
    };
    this.remove = function(){
        alert('remove');
    };
    this.edit = function(){
        alert('edit');
    };

}); 


myApp.controller('manageController',function($scope,sinhvien){
    $scope.add = function(){
        sinhvien.add();
    };
    $scope.remove = function(){
        sinhvien.remove();
    };
    $scope.edit = function(){
        sinhvien.edit();
    };
});
//Bài 32 33

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        template: "{{message}}",
        controller: "ChildCtrl",
        resolve : {
            load: function($q) {
                var defer = $q.defer();
                defer.resolve();

                // defer.reject();

                return defer.promise;
            }
        }
    });
});

myApp.controller("ChildCtrl",function($scope){
    $scope.message = 'Hey world';
});
myApp.directive("ngError",function($rootScope){
    return {
        restrict: "E",
        template: "<div ng-show='isError'  style='background: red ; color:#FFF'>Error page</div>",
        link: function(scope) {
            scope.isError = false;

            $rootScope.$on('$rootChangeError',function(){
                scope.isError = true;
            });


        }
    };
});

//Bài 30
/*myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        template:" this is a message",
        controller:"QController",
        resolve : {
            ancom: function($q, $timeout) {
                var defer = $q.defer();

                $timeout(function(){
                    alert('an com xong');
                    defer.resolve();
                },3000);

                return defer.promise;
            },

            diia: function($q, $timeout) {
                var defer = $q.defer();

                $timeout(function(){
                    alert('ia xong');
                    defer.resolve();
                },6000);

                return defer.promise;
            },
            ngu: function($q, $timeout) {
                var defer = $q.defer();

                $timeout(function(){
                    alert('ngu xong');
                    defer.resolve();
                },9000);

                return defer.promise;
            }
        }

    });
});
myApp.controller("QController", function($scope,$q){
    alert('welldone');
});*/

//Bài 25+26 routeProvider

// myApp.config(function($routeProvider){
//  $routeProvider.when('/',{
//      template : 'home page'
//  }).when('/detail/:id', {
//      template: "ID is {{id}}",
//      controller: "NewsController",
//      redirectTo: function(routeParams, path, query_string) {
//          console.log(routeParams);
//          console.log(path);
//          console.log(query_string);
//          if(routeParams.id == "1") {
//              return '/'
//          }
//      }
//  });
// });

// myApp.controller("NewsController",function($scope,$routeParams){
//  $scope.id = $routeParams.id;
    
// });

//Bài 23 ng-view

// myApp.config(function($routeProvider){
//  $routeProvider.when('/',{
//      controller: "HomeCtrl",
//      templateUrl: "app/templates/home.html"
//  }).when('/detail', {
//      controller: "DetailCtrl",
//      templateUrl: "app/templates/detail.html"
//  }).otherwise({
//      template:"404"
//  });

// });
//
myApp.controller("HomeCtrl", function($scope){
    $scope.message = 'this is home page!!!';
});

myApp.controller("DetailCtrl", function($scope) {
    $scope.detail = 'this is detail product page!!!! call me if u can';
})

//Bài 21
myApp.controller("Bai21Controller",function($scope){

});

myApp.directive("bai21",function(){
    return {
        restrict: "A",
        templateUrl: "info.html" 
    };
});
//loop(repeat)
myApp.controller("StudentCtrl",function($scope){

    $scope.students = [
        {
            name : "Nguyễn Mạnh Cường",
            age : "22",
            email : 'cuongmanh1106@gmail.com'
        },
        {
            name : "Trần Mạnh Hùng",
            age : "23",
            email : "hungmanh2301@gmail.com"
        },
        {
            name : "Lê Thị Kim Hòa",
            age : "22",
            email : "nhocrocket@gmail.com"
        },
        {
            name : "Đoàn Phương Duy",
            age : "22",
            email : "donluy@gmail.com"
        },
    ];
});
//tranclusion
myApp.directive("login",function(){
    return {
        restrict: "E",
        transclude: true,
        template: '<div ng-transclude></div>password:<input type= "password" />'
    }
});
//isolating @
myApp.controller("Mycontroller",function($scope){
    $scope.content = "Hello world";
});
myApp.directive("mc",function(){
    return {
        restrict: "A",
        scope: {
            content: "@"
        },
        template: "{{content}}"
        // link : function(scope,element,attrs) {
        //  scope.content = attrs.content;
        // }
    };


});


//directive talking to controller and Linking (10,11)
myApp.controller("MessageController", function($scope){

    $scope.showMessage = function(message) {
        alert(message);
    }
});

myApp.directive("message" , function(){
    //10
    // return function(scope , element, attrs) {
    //  element.bind('mouseenter', function() { //mouse-enter: hover vào element thì sự kiện sẽ dược thực thi
    //      // scope.showMessage();
    //      // scope.$apply("showMessage()");
    //      scope.$apply(attrs.a);
    //  });
    // }
    //10

    //11
    // return {
    //  restrict: "E",
    //  link: function(scope,element,attrs) {
    //      element.bind("mouseenter",function() {
    //          scope.showMessage();
    //      });
    //  }
    // }

    //12
    return {
        restrict: "E",
        scope: {
            show:"&"
        },
        template: '<input type= "text" ng-model = "message" />'+
                  '<button ng-click= "show({messages:message})">Show</button>'
    }
});
//directive restrict
myApp.directive("demo", function (){
    return {
        restrict: "A",
        template: "<h1>Hello</h1>"
    };
});
//define directive
myApp.directive("ngFormlogin", function(){
    return {
        templateUrl : 'app/templates/form_login.html'
    };
});

myApp.controller("Login", function($scope){

    $scope.checkLogin = function() {

        alert($scope.username + $scope.password);
    }


});
//defind directive

myApp.controller("ShowMessage", function($scope){
    $scope.message = "hello";
    $scope.title = "Harrik";
    $scope.data = {};
    $scope.data.message = 'Nội dung';
});



myApp.controller("maytinh" , function($scope){

    $scope.pheptinh = "+";
    

    $scope.tinh = function() {
        $scope.ketqua = 'ket qua la:';
        var pheptinh = $scope.pheptinh;
        var so1 = parseInt($scope.so1);
        var so2 = parseInt($scope.so2);

        if(pheptinh == "+") {
            $scope.ketqua += so1 + so2;
        } else if(pheptinh == "-") {
            $scope.ketqua += so1 - so2;
        } else if(pheptinh == "x") {
            $scope.ketqua += so1*so2;
        } else if (pheptinh == ":" && so2!=0) {
            $scope.ketqua += so1/so2;
        } else {
            alert('errors');
        }
    }

});

myApp.controller("Controller1",function($scope , $rootScope){
    $scope.message = 'Noi dung chung';
    $rootScope.messages = 'Noi dung thay đổi';
});

myApp.controller("Controller2",function($scope){
    // $scope.message = 'Noi dung 2';
});
