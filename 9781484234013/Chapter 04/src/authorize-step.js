import {Redirect} from "aurelia-router";
import {SecurityService} from "./security-service";

export class AuthorizeStep {
  static inject = [SecurityService];

  constructor(securityService) {
    this.securityService = securityService;
  }

  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.adminOnly)) {
      if (!this.securityService.isAdmin) {
        return next.cancel(new Redirect(''));
      }
    }
    return next();
  }
}