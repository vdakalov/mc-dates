export class MainController {
  static $inject = ['$scope'];

  constructor($scope) {
    $scope.from = new Date();
    $scope.to = new Date();

    $scope.onChange = function onChange() {
      alert(`${$scope.from && $scope.from.toLocaleDateString('ru')} - ${$scope.to && $scope.to.toLocaleDateString('ru')}`)
    };
  }
}
