import * as angular from 'angular';

import './mc-dates.template.html';

class McDateController {

  dateFrom: Date;
  dateTo: Date;
  mcChange: Function;

  compare(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date) {
      return date1.toDateString() === date2.toDateString();
    }

    return date1 === date2;
  };

  set(dateFrom, dateTo) {
    if (!this.compare(this.dateFrom, dateFrom) || !this.compare(this.dateTo, dateTo)) {
      this.dateFrom = dateFrom;
      this.dateTo = dateTo;

      this.change();
    }
  };

  change() {
    // todo так тоже быть не должно
    setTimeout(() => this.mcChange(), 0);
  };

  setYesterday() {
    const dateFrom = new Date();
    const dateTo = new Date();

    dateFrom.setDate(dateFrom.getDate() - 1);
    dateTo.setDate(dateTo.getDate() - 1);

    this.set(dateFrom, dateTo);
  };

  setToday() {
    this.set(new Date(), new Date());
  };

  setTwoWeeks() {
    const dateFrom = new Date();

    dateFrom.setDate(dateFrom.getDate() - 14);

    this.set(dateFrom, new Date());
  };

  setMonth() {
    const dateFrom = new Date();

    dateFrom.setDate(dateFrom.getDate() - 30);

    this.set(dateFrom, new Date());
  };

  clear() {
    this.set(null, null);
  };
}

angular
  .module('mcDates')
  .component('mcDates', {
    templateUrl: '/mc-dates/mc-dates.template.html',
    bindings: {
      dateFrom: '=',
      dateTo: '=',
      mcChange: '&'
    },
    controller: McDateController
  });
