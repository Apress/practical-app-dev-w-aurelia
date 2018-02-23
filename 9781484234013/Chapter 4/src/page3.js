import {bindable} from 'aurelia-framework';

export class Page3 {

  @bindable items = [
    'apples', 
    'cereal'
  ];

  constructor() {

  }

  addToList() {
    let item = "donuts";
    this.items.push(item);
  }
  removeFromList(index) {
    this.items.splice(index, 1);
  }

}