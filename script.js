const app = angular.module('app', [])

app.controller('apartmentsCtrl', function($scope, $http) {
  $http.get("magasinet.json").then(function (response) {

    const data = response.data
    data.sort((a, b) => parseInt(b.rent) - parseInt(a.rent))
    $scope.data = data
  })
})
