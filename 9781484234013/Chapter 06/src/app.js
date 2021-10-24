import {inject} from 'aurelia-framework';
import {GithubService} from './github-service';

@inject(GithubService)
export class App {

  heading = 'Github Users';

  constructor(svc) {
    this.svc = svc;
  }

  activate() {
    return this.svc.getUsers();
  }
}
