angular
  .module('app')
  .controller('MainController', ['$scope', function MainController($scope) {
    $scope.from = new Date();
    $scope.to = new Date();

    $scope.onChange = function onChange() {
      alert(`${$scope.from && $scope.from.toLocaleDateString('ru')} - ${$scope.to && $scope.to.toLocaleDateString('ru')}`)
    };
  }]);