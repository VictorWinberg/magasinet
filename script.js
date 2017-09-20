const app = angular.module('app', [])

app.controller('apartmentsCtrl', function($scope, $http) {
  $http.get("magasinet.json").then(function (response) {
    $scope.data = response.data
  })
})

app.controller('vacantProductsCtrl', function($scope, $http) {
  $http.get("https://www.afbostader.se/redimo/rest/vacantproducts").then(function (response) {
    const data = response.data.product

    // Fix swedish areas to work with url
    data.forEach(i => i.areaEncoded = i.area.replace(/[åÅäÄ]/g, 'a').replace(/[öÖ]/g, 'o'))

    const magasinet = data.filter(i => i.area === 'Magasinet')
    let other = data.filter(i => i.area !== 'Magasinet')

    $scope.data = data
    $scope.magasinet = magasinet

    const novisch = other.filter(i => i.priority === 'Novisch')
    other = other.filter(i => i.priority !== 'Novisch')
    $scope.novisch = novisch
    $scope.other = other
  })
})
