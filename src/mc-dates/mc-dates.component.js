angular
  .module('mcDates')
  .component('mcDates', {
    templateUrl: 'mc-dates/mc-dates.template.html',
    bindings: {
      from: '=',
      to: '='
    },
    controller: [function McDatesController() {
      this.from = null;
      this.to = null;

      this.setYesterday = function setYesterday() {
        this.from = new Date();
        this.to = new Date();

        this.from.setDate(this.from.getDate() - 1);
        this.to.setDate(this.to.getDate() - 1);
      };

      this.setToday = function setToday() {
        this.from = new Date();
        this.to = new Date();
      };

      this.setTwoWeeks = function setTwoWeeks() {
        this.from = new Date();
        this.to = new Date();

        this.from.setDate(this.from.getDate() - 14);
      };

      this.setMonth = function setMonth() {
        this.from = new Date();
        this.to = new Date();

        this.from.setDate(this.from.getDate() - 30);
      };

      this.clear = function clear() {
        this.from = null;
        this.to = null;
      };
    }]
  });