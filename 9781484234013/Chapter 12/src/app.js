import {EventAggregator} from 'aurelia-event-aggregator';

export class App {
  static inject = [EventAggregator];

  viewTitle = '<View Title>';

  constructor(ea) {
    this.ea = ea;
    this.ea.subscribe('active-view', payload => {
      this.viewTitle = payload.title;
    });
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Chapter 12';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: './home', title: 'Home', nav: true },
      { route: 'customers',            name: 'customers',      moduleId: './customers', title: 'Customers',   nav: true },
      { route: 'products',            name: 'products',      moduleId: './products', title: 'Products',  nav: true },
    ]);
  }  
}
