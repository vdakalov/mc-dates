angular
  .module('app')
  .controller('MainController', ['$scope', function MainController($scope) {
    $scope.from = new Date();
    $scope.to = new Date();
  }]);