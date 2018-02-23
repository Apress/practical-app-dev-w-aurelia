import {SecurityService} from "./security-service";
import {DataService} from "./data-service";

export class AuditStep {
  static inject = [SecurityService, DataService];

  constructor(securityService, dataService) {
    this.securityService = securityService;
    this.dataService = dataService;
  }

  run(navigationInstruction, next) {
    const options = {
      userId: this.securityService.userId,
      pageViewed: navigationInstruction.config.route
    };
    // this.dataService.audit(options);
    console.log('audit-step', options);
    return next();
  }
}