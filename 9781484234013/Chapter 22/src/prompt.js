import {DialogController} from 'aurelia-dialog';

export class Prompt {
  static inject = [DialogController];
  
  model = {};

  constructor(controller) {
    this.controller = controller;
  }
  
  activate(model){
    this.model = model;
  }
}
