import * as angular from 'angular';
(<any>window).angular = angular; // todo наверное это как-то не так должно делаться

import { MainController } from './app.controller';

import './index.html';
import './style.css';
import './mc-dates/mc-dates.module';

angular
  .module('app', ['mcDates'])
  .controller('MainController', MainController);
