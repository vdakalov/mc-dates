angular
  .module('mcDates')
  .component('mcDates', {
    templateUrl: 'mc-dates/mc-dates.template.html',
    controllerAs: 'ctrl',
    controller: [function McDatesController() {
      this.name = 'AAA';
      this.date = new Date();
    }]
  });