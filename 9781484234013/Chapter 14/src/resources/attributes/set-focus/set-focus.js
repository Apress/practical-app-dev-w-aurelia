import {customAttribute} from 'aurelia-templating';
import {DOM} from 'aurelia-pal';

@customAttribute('set-focus')
export class SetFocus {
  static inject = [DOM.Element];

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.element.focus();
  }
  
}