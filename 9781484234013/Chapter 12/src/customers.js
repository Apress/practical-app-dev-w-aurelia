import {EventAggregator} from 'aurelia-event-aggregator';

export class Customers {
  static inject = [EventAggregator];

  constructor(ea) {
    this.ea = ea;
  }

  activate() {
    this.ea.publish('active-view', {title: 'Customers'});
  }
}