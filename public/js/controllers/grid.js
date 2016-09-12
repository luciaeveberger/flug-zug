angular.module('gridAppController', [])

// inject the Todo service factory into our controller
.controller('gridController', ['$scope', 
        '$http',
        '$timeout', 
        '$window',
       
    function(
        $scope, 
        $http, 
        $timeout, 
        $window
       
        ) {
        
        $scope.userProfile = {};

        $http.get('/api/get_user')
            .success(function(data) {
                console.log(data);
                $scope.userProfile = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

            console.log("I am in the grid controller");
            
            $window.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8
        });
            // $scope.hammertime = Hammer($scope.element).on("hold", function(event) {
            //     $scope.addOnClick(event);
            // });
            
       

}]);