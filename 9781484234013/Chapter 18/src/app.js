export class App {

  configureRouter(config, router) {
    config.title = 'Dynamic Views';
    config.map([
      {route: ["", "page1"], moduleId: "src/page1", href: "#/page1", title: "Page 1", nav: true},
      {route: "page2", moduleId: "src/page2", href: "#/page2", title: "Page 2", nav: true},
      {route: "page3", moduleId: "src/page3", href: "#/page3", title: "Page 3", nav: true},
    ]);

    this.router = router;
  }

}