import 'jQuery';
import 'bootstrap';

export class App {

  message = 'Hello World!';

  configureRouter(config, router) {
    config.title = 'CustomElements';
    config.map([
      { route: '', name: 'page1', moduleId: './page1',      nav: true, title: 'Page 1' },
      { route: 'page2', name: 'page2', moduleId: './page2',      nav: true, title: 'Page 2' },
      { route: 'page3', name: 'page3', moduleId: './page3',      nav: true, title: 'Page 3' },
    ]);

    this.router = router;
  }  
}