export class ChildViewPorts {

  heading = "Child View Ports";

  configureRouter(config, router) {
    config.map([
      {route: ["", "page1"], viewPorts: { menu: { moduleId: "src/child-nav-bar" }, content: { moduleId: "src/page1"}}, title: "Page 1", nav: true},
      {route: "page2", viewPorts: { menu: { moduleId: "src/child-nav-bar" }, content: { moduleId: "src/page2"}}, title: "Page 2", nav: true},
      {route: "page3", viewPorts: { menu: { moduleId: "src/child-nav-bar" }, content: { moduleId: "src/page3"}}, title: "Page 3", nav: true},
    ]);

    this.router = router;
  }
  
}