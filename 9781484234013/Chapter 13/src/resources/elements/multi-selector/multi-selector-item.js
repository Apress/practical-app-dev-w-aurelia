import {customElement, bindable} from 'aurelia-framework';

@customElement('multi-selector-item')
export class MultiSelectorItem {  
  @bindable item;
  @bindable parent;

  constructor() {

  }

  /**
   *  This function removes calls the parent viewmodel to removeOne.
   */
  removeOne(e) {
    e.stopPropagation();
    this.parent.removeOne(this.item);
  }

}
