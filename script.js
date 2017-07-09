const app = angular.module('app', [])

app.controller('apartmentsCtrl', function($scope, $http) {
  $http.get("magasinet.json").then(function (response) {

    const data = response.data
    data.sort((a, b) => parseInt(a.lghnummer) - parseInt(b.lghnummer))
    $scope.data = data
  })
})
