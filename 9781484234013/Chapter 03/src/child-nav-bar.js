import {Router} from 'aurelia-router';

export class ChildNavBar {
  static inject = [Router];

  constructor(router) {
    this.router = router;
  }  
}