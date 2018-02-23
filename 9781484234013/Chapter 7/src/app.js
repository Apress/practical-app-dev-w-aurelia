export class App {
  constructor() {
    this.message = 'Getting Data!';
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Chapter 7';
    config.map([
      { route: ['', 'http-data-client'],            name: 'http-data-client',      moduleId: './http-data-client', title: 'HTTP Client',   nav: true },
      { route: 'http-data-fetch',            name: 'http-data-fetch',      moduleId: './http-data-fetch', title: 'HTTP Fetch Client',   nav: true },
    ]);
  }  

}
