import {customElement, bindable} from 'aurelia-framework';

@customElement('name-tag')
export class NameTag {
  @bindable name = "Aurelia";
}
