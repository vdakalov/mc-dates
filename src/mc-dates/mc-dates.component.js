angular
  .module('mcDates')
  .component('mcDates', {
    templateUrl: 'mc-dates/mc-dates.template.html',
    bindings: {
      dateFrom: '=',
      dateTo: '=',
      mcChange: '&'
    },
    controller: [function McDatesController() {

      this.compare = function compare(date1, date2) {
        if (date1 instanceof Date && date2 instanceof Date) {
          return date1.toDateString() === date2.toDateString();
        }

        return date1 === date2;
      };

      this.set = function set(dateFrom, dateTo) {
        if (!this.compare(this.dateFrom, dateFrom) || !this.compare(this.dateTo, dateTo)) {
          this.dateFrom = dateFrom;
          this.dateTo = dateTo;

          this.change();
        }
      };

      this.change = function change() {
        setTimeout(() => this.mcChange(), 0);
      };

      this.setYesterday = function setYesterday() {
        const dateFrom = new Date();
        const dateTo = new Date();

        dateFrom.setDate(dateFrom.getDate() - 1);
        dateTo.setDate(dateTo.getDate() - 1);

        this.set(dateFrom, dateTo);
      };

      this.setToday = function setToday() {
        this.set(new Date(), new Date());
      };

      this.setTwoWeeks = function setTwoWeeks() {
        const dateFrom = new Date();

        dateFrom.setDate(dateFrom.getDate() - 14);

        this.set(dateFrom, new Date());
      };

      this.setMonth = function setMonth() {
        const dateFrom = new Date();

        dateFrom.setDate(dateFrom.getDate() - 30);

        this.set(dateFrom, new Date());
      };

      this.clear = function clear() {
        this.set(null, null);
      };
    }]
  });