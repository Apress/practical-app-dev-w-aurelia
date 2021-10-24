export class ChildLayout {

  heading = "Child Layout";

  configureRouter(config, router) {
    config.map([
      {route: "", moduleId: "src/layout-home", title: "Layout Home", nav: true},
    ]);

    this.router = router;
  }
  
}