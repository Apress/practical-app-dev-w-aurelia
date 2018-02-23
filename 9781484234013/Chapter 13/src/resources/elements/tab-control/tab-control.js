import {customElement, bindable, children} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';

@customElement('tab-control')
export class TabControl {
  static inject = [DOM.Element];
  
  @children('tab-item') tabs = [];
  @bindable selectedTab = 'tab1';

  constructor(element) {
    this.element = element;
  }

  selectedTabChanged(newValue, oldValue) {
    this.fireSelectionChange();
  }

  attached() {
    let tab = this.tabs.find(f => f.name === this.selectedTab);
    if (tab) {
      tab.selectedTab = this.selectedTab;
      this.fireSelectionChange();      
    }
  }
  
  navClick(e) {
    this.selectedTab = e.target.attributes['id'].value;
  }
  
  fireSelectionChange() {
    let selectionChangingEvent = DOM.createCustomEvent('selection-changing', {bubbles: true, detail: this.selectedTab});
    this.element.dispatchEvent(selectionChangingEvent);
    setTimeout(() => {
      this.tabs.forEach((t) => {
        t.selectedTab = this.selectedTab;
      });
      let selectionChangedEvent = DOM.createCustomEvent('selection-changed', {bubbles: true, detail: this.selectedTab});
      this.element.dispatchEvent(selectionChangedEvent);      
    }, 25);
  }
}