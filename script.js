var app = angular.module('app', []);
app.controller('apartmentsCtrl', function($scope, $http) {
  $http.get("magasinet.json").then(function (response) {
    $scope.data = response.data;
  });
})
