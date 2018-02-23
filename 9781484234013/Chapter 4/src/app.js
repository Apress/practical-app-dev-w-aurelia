import "jQuery";
import "bootstrap";
import {AuthorizeStep} from "./authorize-step";
import {AuditStep} from "./audit-step";

export class App {
  static inject = [AuthorizeStep, AuditStep];

  constructor(authorizeStep, auditStep) {
    this.authorizeStep = authorizeStep;
    this.auditStep = auditStep;
  }

  configureRouter(config, router) {
    config.title = "Pipelines";
    config.addAuthorizeStep(this.authorizeStep);
    config.addPostRenderStep(this.auditStep);
    config.map([
      {route: ["", "page1"], moduleId: "./page1", href: "#/page1", title: "Page 1", nav: true},
      {route: "page2", moduleId: "./page2", href: "#/page2", title: "Page 2", nav: true},
      {route: "page3", moduleId: "./page3", href: "#/page3", title: "Page 3", nav: true, settings: { adminOnly: true }},
    ]);

    this.router = router;
  }
  
}