import {customElement, bindable} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';

@customElement('tab-item')
export class TabItem {
  static inject = [DOM.Element];

  @bindable name = '';
  @bindable header = '';
  @bindable selectedTab;
  
  constructor(element) {
    this.element = element;
  }  
}