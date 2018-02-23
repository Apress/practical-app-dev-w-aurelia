import 'jQuery';
import 'bootstrap';

export class App {

  configureRouter(config, router) {
    config.title = 'Routing';
    config.map([
      {route: ["", "page1"], moduleId: "src/page1", href: "#/page1", title: "Page 1", nav: true},
      {route: "page2", moduleId: "src/page2", href: "#/page2", title: "Page 2", nav: true},
      {route: "page3", moduleId: "src/page3", href: "#/page3", title: "Page 3", nav: true},
      {route: "orders", moduleId: "src/orders", href: "#/orders", title: "Orders", nav: true},
      {route: "orders/:id", moduleId: "src/order-details", title: "Order Details"},
      {route: "child-router", moduleId: "src/child-router", href: "#/child-router", title: "Child Router", nav: true},      
      {route: "child-view-ports", moduleId: "src/child-view-ports", href: "#/child-view-ports", title: "Child View Ports", nav: true},      
      {route: "child-layout", moduleId: "src/child-layout", href: "#/child-layout", title: "Child Layout", nav: true},      
    ]);

    this.router = router;
  }
  
}