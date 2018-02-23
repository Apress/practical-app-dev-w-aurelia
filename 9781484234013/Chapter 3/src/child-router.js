export class ChildRouter {

  heading = "Child Router";

  configureRouter(config, router) {
    config.map([
      {route: ["", "page1"], moduleId: "src/page1", title: "Page 1", nav: true},
      {route: "page2", moduleId: "src/page2", title: "Page 2", nav: true},
      {route: "page3", moduleId: "src/page3", title: "Page 3", nav: true},
      {route: "orders", moduleId: "src/orders", title: "Orders", nav: true},
      {route: "orders/:id", moduleId: "src/order-details", title: "Order Details"},
      {route: "child-router", moduleId: "src/child-router", title: "Child Router", nav: true},
    ]);

    this.router = router;
  }
  
}