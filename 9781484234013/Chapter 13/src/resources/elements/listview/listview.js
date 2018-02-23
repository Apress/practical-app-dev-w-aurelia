import {customElement, bindable, children} from 'aurelia-framework';

@customElement('listview')
export class Listview {

  @children('listview-item') items = [];
  @bindable selectedView;

  constructor() {
    
  }
    
  selectedViewChanged(newValue, oldValue) {
    this.fireSelectionChange();
  }
  fireSelectionChange() {
    setTimeout(() => {
      this.items.forEach((t) => {
        t.selectedView = this.selectedView;
      });
    }, 25);
  }  
}