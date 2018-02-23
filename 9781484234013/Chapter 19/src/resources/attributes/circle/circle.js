import {bindable, customAttribute} from 'aurelia-templating';
import {DOM} from 'aurelia-pal';

@customAttribute('circle')
export class Circle {
  static inject = [DOM.Element];

  @bindable({ primaryProperty: true }) color;
  @bindable size = 25;

  constructor(element) {
    this.element = element;
    this.element.style = `height:${this.size}px; width:${this.size}px; border-radius: 15px;`;
  }

  colorChanged(newValue, oldValue){
    this.element.style.backgroundColor = newValue;
  }  
}