import * as angular from 'angular';

import 'angular-material';
import 'angular-aria';
import 'angular-animate';

import 'angular-material/angular-material.min.css';

angular
  .module('mcDates', ['ngMaterial']);

import './mc-dates.component.ts';

angular
  .module('mcDates')
  .config(['$mdDateLocaleProvider', ($mdDateLocaleProvider) => {
    $mdDateLocaleProvider.parseDate = function parseDate(value) {
      return value ? new Date(value.split('.').reverse()) : value;
    };

    $mdDateLocaleProvider.formatDate = function formatDate(date) {
      return date ? date.toLocaleDateString('ru') : date;
    };
  }]);
