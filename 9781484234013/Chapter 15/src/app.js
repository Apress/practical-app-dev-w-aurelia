import 'jQuery';
import 'bootstrap';

export class App {

  message = 'Hello World!';

  configureRouter(config, router) {
    config.title = 'Value Converters';
    config.map([
      { route: '', name: 'time-ago', moduleId: './time-ago',      nav: true, title: 'Time Ago' },
      { route: 'date-format', name: 'date-format', moduleId: './date-format',      nav: true, title: 'Date Format' },
      { route: 'sort', name: 'sort', moduleId: './sort',      nav: true, title: 'Sort' },
      { route: 'sort2', name: 'sort2', moduleId: './sort2',      nav: true, title: 'Sort 2' },
    ]);

    this.router = router;
  }  
}