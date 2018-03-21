angular
  .module('app')
  .config(['$mdDateLocaleProvider', function config($mdDateLocaleProvider){
    $mdDateLocaleProvider.parseDate = function parseDate(value) {
      return value ? new Date(value.split('.').reverse()) : value;
    };

    $mdDateLocaleProvider.formatDate = function formatDate(date) {
      return date ? date.toLocaleDateString('ru') : date;
    };
  }]);